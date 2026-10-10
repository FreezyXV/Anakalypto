/** Isolated local acceptance environment. Never reads the repository's .env files. */
import { execFileSync, spawn } from "node:child_process";
import { cp, mkdtemp, mkdir, symlink, writeFile } from "node:fs/promises";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const runTests = process.argv.includes("--test");
const unknown = process.argv.slice(2).filter((arg) => arg !== "--test");
if (unknown.length) throw new Error("Usage : npm run preview:local -- [--test]");

function run(command, args, options = {}) {
  return execFileSync(command, args, { stdio: "inherit", ...options });
}

async function availablePort(first) {
  for (let port = first; port < first + 20; port++) {
    const free = await new Promise((resolve) => {
      const probe = net.createServer();
      probe.once("error", () => resolve(false));
      probe.listen(port, "127.0.0.1", () => probe.close(() => resolve(true)));
    });
    if (free) return port;
  }
  throw new Error(`Aucun port local disponible à partir de ${first}.`);
}

// Fail before creating anything if the required local PostgreSQL tools are absent.
for (const binary of ["initdb", "pg_ctl", "createdb"]) {
  execFileSync(binary, ["--version"], { stdio: "ignore" });
}

// macOS's per-user temp path can exceed PostgreSQL's Unix socket path limit.
const tempRoot = process.platform === "darwin" ? "/private/tmp" : os.tmpdir();
const root = await mkdtemp(path.join(tempRoot, "anakalypto-preview-"));
const snapshot = path.join(root, "app");
const data = path.join(root, "postgres");
const socket = path.join(root, "socket");
const dbPort = await availablePort(54329);
const appPort = await availablePort(3002);
const role = "anakalypto_preview";
const database = "anakalypto_preview";
const testDatabase = "anakalypto_preview_test";
const url = `postgresql://${role}@127.0.0.1:${dbPort}/${database}`;
const testUrl = `postgresql://${role}@127.0.0.1:${dbPort}/${testDatabase}`;
const origin = `http://127.0.0.1:${appPort}`;
const environment = {
  ...process.env,
  DATABASE_URL: url,
  DIRECT_URL: url,
  TEST_DATABASE_URL: testUrl,
  NEXT_PUBLIC_SITE_URL: origin,
};
delete environment.NODE_ENV;

let databaseStarted = false;
let server;
let stopping = false;

function stopDatabase() {
  if (!databaseStarted) return;
  databaseStarted = false;
  run("pg_ctl", ["-D", data, "-m", "fast", "-w", "stop"]);
}

function stop() {
  if (stopping) return;
  stopping = true;
  if (server && server.exitCode === null) server.kill("SIGTERM");
  else stopDatabase();
}
process.on("SIGINT", stop);
process.on("SIGTERM", stop);

try {
  // A snapshot has its own Next lock/cache and contains neither Git state nor credentials.
  const excluded = new Set([
    ".git",
    ".next",
    "node_modules",
    ".vercel",
    ".agents",
    ".codex",
    ".claude",
    ".aws",
    "docs",
    "coverage",
    "out",
    "build",
  ]);
  await cp(repository, snapshot, {
    recursive: true,
    filter(source) {
      const relative = path.relative(repository, source);
      if (!relative) return true;
      const segments = relative.split(path.sep);
      return !segments.some(
        (part) =>
          excluded.has(part) ||
          part === ".env" ||
          part.startsWith(".env.") ||
          part.endsWith(".pem"),
      );
    },
  });
  await symlink(path.join(repository, "node_modules"), path.join(snapshot, "node_modules"), "dir");
  await mkdir(socket, { mode: 0o700 });
  run("initdb", [
    "-D",
    data,
    "-U",
    role,
    "--encoding=UTF8",
    "--locale=C",
    "--auth-local=trust",
    "--auth-host=trust",
  ]);
  run("pg_ctl", [
    "-D",
    data,
    "-l",
    path.join(root, "postgres.log"),
    "-o",
    `-p ${dbPort} -h 127.0.0.1 -k ${socket} -c max_connections=30`,
    "-w",
    "start",
  ]);
  databaseStarted = true;
  run("createdb", ["-h", "127.0.0.1", "-p", String(dbPort), "-U", role, database]);

  const options = { cwd: snapshot, env: environment };
  run(path.join(repository, "node_modules/.bin/prisma"), ["migrate", "deploy"], options);
  run(process.execPath, ["--import", "tsx", "prisma/seed.ts"], options);

  if (runTests) {
    run("createdb", ["-h", "127.0.0.1", "-p", String(dbPort), "-U", role, testDatabase]);
    run("npm", ["test"], {
      cwd: repository,
      env: { ...environment, DATABASE_URL: testUrl, DIRECT_URL: testUrl },
    });
  }

  await writeFile(
    path.join(root, "preview.json"),
    JSON.stringify(
      {
        repository,
        snapshot,
        data,
        origin,
        dbPort,
        database,
        testDatabase,
        role,
        testsRun: runTests,
        createdAt: new Date().toISOString(),
      },
      null,
      2,
    ),
  );
  console.log(`\nPréproduction locale : ${origin}/decouvrir`);
  console.log(`Instantané et base dédiés : ${root}`);
  console.log("Accessible depuis ce poste uniquement. Ctrl+C arrête ce serveur et sa base dédiée.");
  if (stopping) stopDatabase();
  else {
    server = spawn(
      path.join(repository, "node_modules/.bin/next"),
      ["dev", "--webpack", "--hostname", "127.0.0.1", "--port", String(appPort)],
      { ...options, stdio: "inherit" },
    );
    server.on("error", (error) => {
      console.error(error.message);
      stopDatabase();
      process.exitCode = 1;
    });
    server.on("exit", (code) => {
      stopDatabase();
      if (!stopping) process.exitCode = code ?? 1;
    });
  }
} catch (error) {
  stopDatabase();
  throw error;
}
