/**
 * SM-2 Spaced Repetition Algorithm
 * Quality ratings: 0-5 (we use 1-4 mapped to Again/Hard/Good/Easy)
 */

export type ReviewQuality = 1 | 2 | 3 | 4; // Again, Hard, Good, Easy

interface SM2Result {
  easeFactor: number;
  interval: number;
  repetitions: number;
}

// Map our 1-4 rating to SM-2's 0-5 scale
const qualityMap: Record<ReviewQuality, number> = {
  1: 1, // Again → 1
  2: 2, // Hard → 2
  3: 4, // Good → 4
  4: 5, // Easy → 5
};

export function calculateSM2(
  quality: ReviewQuality,
  prevEaseFactor: number,
  prevInterval: number,
  prevRepetitions: number
): SM2Result {
  const q = qualityMap[quality];

  let easeFactor = prevEaseFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  easeFactor = Math.max(1.3, easeFactor);

  let interval: number;
  let repetitions: number;

  if (q < 3) {
    // Failed — reset
    repetitions = 0;
    interval = 1;
  } else {
    repetitions = prevRepetitions + 1;
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.round(prevInterval * easeFactor);
    }
  }

  return { easeFactor, interval, repetitions };
}

export function getNextReviewDate(interval: number): string {
  const date = new Date();
  date.setDate(date.getDate() + interval);
  return date.toISOString().split("T")[0];
}

export function isDueForReview(nextReviewDate: string): boolean {
  const today = new Date().toISOString().split("T")[0];
  return nextReviewDate <= today;
}
