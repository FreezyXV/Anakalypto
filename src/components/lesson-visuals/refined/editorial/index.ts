import type { Study } from "./art";
import { autoElectric } from "./autoElectric";
import { autoRoad } from "./autoRoad";
import { autoThermal } from "./autoThermal";

import { energyPlants } from "./energyPlants";
import { energyUses } from "./energyUses";

import { industryMaterial } from "./industryMaterial";
import { industryLogistics } from "./industryLogistics";

import { structures } from "./structures";

import { habitats } from "./habitats";
import { waterAndClay } from "./waterAndClay";

import { computing } from "./computing";
import { astronomyStudies } from "./astronomy";

import { performingArts } from "./performingArts";
import { craftArts } from "./craftArts";

import { geography } from "./geography";
import { physicsStudies } from "./physicsStudies";
import { earthLab } from "./earthLab";

export const editorialStudies: Readonly<Record<string, Study>> = {
  ...autoElectric,
  ...autoRoad,
  ...autoThermal,
  ...energyPlants,
  ...energyUses,
  ...industryMaterial,
  ...industryLogistics,
  ...structures,
  ...habitats,
  ...waterAndClay,
  ...computing,
  ...astronomyStudies,
  ...performingArts,
  ...craftArts,
  ...geography,
  ...physicsStudies,
  ...earthLab,
};
