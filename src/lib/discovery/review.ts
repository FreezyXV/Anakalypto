import type { DiscoveryReviewSession, DiscoverySession } from "./progress";
import type { DiscoveryStep } from "./schema";

export type Checkpoint = DiscoveryStep & {
  interaction: Extract<NonNullable<DiscoveryStep["interaction"]>, { kind: "choice" }>;
};

export function getCheckpoints(steps: DiscoveryStep[]): Checkpoint[] {
  return steps.filter(
    (step): step is Checkpoint =>
      step.interaction?.kind === "choice" && step.interaction.checkpoint,
  );
}

export function freshReview(): DiscoveryReviewSession {
  return { step: 0, choices: {}, firstCorrect: {}, completed: false };
}

/** A review preserves the completed lesson. Only due, first-try success extends the interval. */
export function completeReview(
  session: DiscoverySession,
  review: DiscoveryReviewSession,
  checkpoints: Checkpoint[],
  now = new Date(),
): DiscoverySession {
  if (
    !session.completed ||
    checkpoints.length === 0 ||
    !checkpoints.every((step) => review.choices[step.id] === step.interaction.correctOptionId)
  )
    return session;
  const passed = checkpoints.every((step) => review.firstCorrect[step.id] === true);
  const due = !!session.reviewAt && session.reviewAt <= now.toISOString();
  const streak = passed ? Math.min(4, (session.reviewStreak ?? 0) + (due ? 1 : 0)) : 0;
  const days = [1, 3, 7, 14, 30][streak]!;
  // Practising early cannot postpone an already scheduled review.
  const reviewAt =
    passed && !due && session.reviewAt
      ? session.reviewAt
      : new Date(now.getTime() + days * 86_400_000).toISOString();
  return {
    ...session,
    review: { ...review, completed: true, passed },
    reviewStreak: streak,
    reviewedAt: now.toISOString(),
    updatedAt: now.toISOString(),
    reviewAt,
  };
}
