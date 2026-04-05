"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { db, type VocabularyItem, type FlashcardReview } from "@/lib/db";
import { useAppStore } from "@/stores/app-store";
import {
  calculateSM2,
  getNextReviewDate,
  isDueForReview,
  type ReviewQuality,
} from "@/lib/sm2";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, Check, Zap, Brain } from "lucide-react";

interface FlashcardWithReview {
  vocab: VocabularyItem;
  review: FlashcardReview | null;
}

export default function FlashcardsPage() {
  const t = useTranslations("flashcard");
  const { locale, currentNation: currentNationId } = useAppStore();
  const [cards, setCards] = useState<FlashcardWithReview[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, correct: 0 });
  const [sessionComplete, setSessionComplete] = useState(false);

  const nationId = currentNationId || "japan";

  const loadCards = useCallback(async () => {
    const allVocab = await db.vocabularyItems.toArray();
    // Filter vocab by current nation
    const nationVocab = allVocab.filter((v) => v.id.startsWith(nationId + "-"));
    const allReviews = await db.flashcardReviews.toArray();
    const reviewMap = new Map(allReviews.map((r) => [r.vocabularyItemId, r]));

    const dueCards: FlashcardWithReview[] = [];
    const newCards: FlashcardWithReview[] = [];

    for (const vocab of nationVocab) {
      const review = reviewMap.get(vocab.id) || null;
      if (!review) {
        newCards.push({ vocab, review });
      } else if (isDueForReview(review.nextReviewDate)) {
        dueCards.push({ vocab, review });
      }
    }

    // Due cards first, then new cards (max 10 new per session)
    const sessionCards = [...dueCards, ...newCards.slice(0, 10)];
    setCards(sessionCards);
    setCurrentIndex(0);
    setShowAnswer(false);
    setSessionStats({ reviewed: 0, correct: 0 });
    setSessionComplete(sessionCards.length === 0);
  }, [nationId]);

  useEffect(() => {
    loadCards();
  }, [loadCards]);

  const handleRate = async (quality: ReviewQuality) => {
    const current = cards[currentIndex];
    if (!current) return;

    const prev = current.review || {
      easeFactor: 2.5,
      interval: 0,
      repetitions: 0,
    };

    const result = calculateSM2(
      quality,
      prev.easeFactor,
      prev.interval,
      prev.repetitions
    );

    const today = new Date().toISOString().split("T")[0];
    const nextDate = getNextReviewDate(result.interval);

    if (current.review?.id) {
      await db.flashcardReviews.update(current.review.id, {
        easeFactor: result.easeFactor,
        interval: result.interval,
        repetitions: result.repetitions,
        nextReviewDate: nextDate,
        lastReviewDate: today,
      });
    } else {
      await db.flashcardReviews.add({
        vocabularyItemId: current.vocab.id,
        easeFactor: result.easeFactor,
        interval: result.interval,
        repetitions: result.repetitions,
        nextReviewDate: nextDate,
        lastReviewDate: today,
      });
    }

    // Update progress — find by nation's language
    const nation = await db.nations.get(nationId);
    const langId = nation?.languages?.[0] || "japanese";
    const progress = await db.userProgress
      .where("languageId")
      .equals(langId)
      .first();
    if (progress?.id) {
      const isNew = !current.review;
      await db.userProgress.update(progress.id, {
        wordsLearned: isNew ? progress.wordsLearned + 1 : progress.wordsLearned,
        lastStudyDate: today,
      });
    }

    // Record study session
    await db.studySessions.add({
      date: today,
      durationMinutes: 1,
      itemsReviewed: 1,
      itemsCorrect: quality >= 3 ? 1 : 0,
      focusArea: "vocabulary",
    });

    setSessionStats((prev) => ({
      reviewed: prev.reviewed + 1,
      correct: quality >= 3 ? prev.correct + 1 : prev.correct,
    }));

    if (currentIndex + 1 >= cards.length) {
      setSessionComplete(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
    }
  };

  // Session complete screen
  if (sessionComplete && sessionStats.reviewed > 0) {
    const accuracy =
      sessionStats.reviewed > 0
        ? Math.round((sessionStats.correct / sessionStats.reviewed) * 100)
        : 0;

    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6">
        <div className="text-5xl">🎉</div>
        <h1 className="text-2xl font-bold">{t("sessionComplete")}</h1>
        <div className="grid grid-cols-2 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold">{sessionStats.reviewed}</p>
            <p className="text-sm text-muted-foreground">{t("wordsReviewed")}</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{accuracy}%</p>
            <p className="text-sm text-muted-foreground">{t("accuracy")}</p>
          </div>
        </div>
        <Button onClick={loadCards} className="mt-4">
          {locale === "zh" ? "再练一次" : "Practice Again"}
        </Button>
      </div>
    );
  }

  // No cards screen
  if (sessionComplete) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <div className="text-5xl">✅</div>
        <h1 className="text-xl font-bold">{t("noCards")}</h1>
        <p className="text-sm text-muted-foreground">{t("comeBackLater")}</p>
      </div>
    );
  }

  const current = cards[currentIndex];
  if (!current) return null;

  const { vocab } = current;
  const progressPercent = cards.length > 0 ? ((currentIndex) / cards.length) * 100 : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">{t("title")}</h1>
          <Badge variant="outline">
            {t("cardsLeft", { count: cards.length - currentIndex })}
          </Badge>
        </div>
        <Progress value={progressPercent} className="h-2" />
      </div>

      {/* Flashcard */}
      <Card
        className="min-h-[320px] flex flex-col items-center justify-center cursor-pointer select-none"
        onClick={() => !showAnswer && setShowAnswer(true)}
      >
        <CardContent className="flex flex-col items-center justify-center text-center p-8 w-full space-y-4">
          {/* Front: Japanese word */}
          <p className="text-4xl font-bold">{vocab.word}</p>
          <p className="text-lg text-muted-foreground">{vocab.reading}</p>
          <Badge variant="secondary" className="text-xs">
            {vocab.category}
          </Badge>

          {showAnswer ? (
            <div className="mt-4 pt-4 border-t w-full space-y-3">
              <div className="space-y-1">
                <p className="text-lg font-semibold">{vocab.translation_en}</p>
                <p className="text-lg font-semibold">{vocab.translation_zh}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {locale === "zh" ? vocab.context_zh : vocab.context_en}
              </p>
              {(vocab.culturalNote_en || vocab.culturalNote_zh) && (
                <div className="rounded-lg bg-accent/50 p-3 text-xs">
                  <span className="font-medium">
                    {locale === "zh" ? "💡 文化小知识: " : "💡 Cultural note: "}
                  </span>
                  {locale === "zh" ? vocab.culturalNote_zh : vocab.culturalNote_en}
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mt-4">
              {locale === "zh" ? "点击显示答案" : "Tap to reveal"}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Rating Buttons */}
      {showAnswer && (
        <div className="grid grid-cols-4 gap-2">
          <Button
            variant="outline"
            onClick={() => handleRate(1)}
            className="flex flex-col gap-1 h-auto py-3 border-red-200 text-red-600 hover:bg-red-50"
          >
            <RotateCcw className="h-4 w-4" />
            <span className="text-xs">{t("again")}</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => handleRate(2)}
            className="flex flex-col gap-1 h-auto py-3 border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <Brain className="h-4 w-4" />
            <span className="text-xs">{t("hard")}</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => handleRate(3)}
            className="flex flex-col gap-1 h-auto py-3 border-green-200 text-green-600 hover:bg-green-50"
          >
            <Check className="h-4 w-4" />
            <span className="text-xs">{t("good")}</span>
          </Button>
          <Button
            variant="outline"
            onClick={() => handleRate(4)}
            className="flex flex-col gap-1 h-auto py-3 border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            <Zap className="h-4 w-4" />
            <span className="text-xs">{t("easy")}</span>
          </Button>
        </div>
      )}
    </div>
  );
}
