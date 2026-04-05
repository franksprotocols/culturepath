"use client";

import { db } from "./db";
import { japanNation } from "@/data/japan-nation";
import { japanCulturalCards } from "@/data/japan-cultural-cards";
import { japanVocabulary } from "@/data/japan-vocabulary";
import { japanCultureVocab } from "@/data/japan-culture-vocab";
import { japanTimeline } from "@/data/japan-timeline";
import { japanFamousPeople } from "@/data/japan-people";
import { japanCities } from "@/data/japan-cities";

export async function seedDatabase() {
  const nationCount = await db.nations.count();
  if (nationCount > 0) return; // Already seeded

  await db.transaction(
    "rw",
    [
      db.nations,
      db.culturalCards,
      db.vocabularyItems,
      db.timelineEvents,
      db.famousPeople,
      db.cities,
      db.userProgress,
      db.userSettings,
    ],
    async () => {
      await db.nations.add(japanNation);
      await db.culturalCards.bulkAdd(japanCulturalCards);
      await db.vocabularyItems.bulkAdd([...japanVocabulary, ...japanCultureVocab]);
      await db.timelineEvents.bulkAdd(japanTimeline);
      await db.famousPeople.bulkAdd(japanFamousPeople);
      await db.cities.bulkAdd(japanCities);

      // Initialize user progress for Japanese
      await db.userProgress.add({
        languageId: "japanese",
        wordsLearned: 0,
        totalStudyMinutes: 0,
        currentStreak: 0,
        longestStreak: 0,
        lastStudyDate: "",
        level: "A1",
      });

      // Default settings
      await db.userSettings.add({
        locale: "en",
        dailyGoalMinutes: 15,
        targetNations: ["japan"],
      });
    }
  );
}
