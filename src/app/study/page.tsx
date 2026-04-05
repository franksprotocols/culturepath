"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { db, type UserProgress, type FlashcardReview } from "@/lib/db";
import { useAppStore } from "@/stores/app-store";
import { isDueForReview } from "@/lib/sm2";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Layers,
  Headphones,
  Globe,
  Flame,
  Target,
  CheckCircle2,
} from "lucide-react";

interface StudyTask {
  id: string;
  type: "vocabulary" | "listening" | "culture";
  titleKey: string;
  icon: React.ReactNode;
  estimatedMinutes: number;
  itemCount: number;
  href: string;
  completed: boolean;
}

export default function StudyPage() {
  const t = useTranslations("study");
  const { locale } = useAppStore();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [dueCount, setDueCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  const [todayMinutes, setTodayMinutes] = useState(0);

  useEffect(() => {
    async function load() {
      // User progress
      const p = await db.userProgress
        .where("languageId")
        .equals("japanese")
        .first();
      setProgress(p || null);

      // Count due flashcards
      const reviews = await db.flashcardReviews.toArray();
      const totalVocab = await db.vocabularyItems.count();
      const reviewedIds = new Set(reviews.map((r) => r.vocabularyItemId));

      const due = reviews.filter((r) => isDueForReview(r.nextReviewDate)).length;
      const newW = totalVocab - reviewedIds.size;
      setDueCount(due);
      setNewCount(newW);

      // Today's study time
      const today = new Date().toISOString().split("T")[0];
      const todaySessions = await db.studySessions
        .where("date")
        .equals(today)
        .toArray();
      const minutes = todaySessions.reduce(
        (sum, s) => sum + s.durationMinutes,
        0
      );
      setTodayMinutes(minutes);
    }
    load();
  }, []);

  const dailyGoal = 15;
  const goalProgress = Math.min(100, (todayMinutes / dailyGoal) * 100);

  const tasks: StudyTask[] = [
    {
      id: "review",
      type: "vocabulary",
      titleKey: "reviewWords",
      icon: <Layers className="h-5 w-5" />,
      estimatedMinutes: Math.max(1, dueCount),
      itemCount: dueCount,
      href: "/flashcards",
      completed: dueCount === 0,
    },
    {
      id: "new",
      type: "vocabulary",
      titleKey: "newWords",
      icon: <BookOpen className="h-5 w-5" />,
      estimatedMinutes: Math.max(1, Math.min(newCount, 10) * 2),
      itemCount: Math.min(newCount, 10),
      href: "/flashcards",
      completed: newCount === 0,
    },
    {
      id: "culture",
      type: "culture",
      titleKey: "culturalLesson",
      icon: <Globe className="h-5 w-5" />,
      estimatedMinutes: 5,
      itemCount: 1,
      href: "/explore",
      completed: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">{t("todaysPlan")}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          🇯🇵 {locale === "zh" ? "日语学习" : "Japanese"}
        </p>
      </div>

      {/* Streak & Goal */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Flame className="h-8 w-8 text-orange-500" />
            <div>
              <p className="text-2xl font-bold">{progress?.currentStreak || 0}</p>
              <p className="text-xs text-muted-foreground">{t("streak")}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <Target className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-2xl font-bold">
                {todayMinutes}/{dailyGoal}
              </p>
              <p className="text-xs text-muted-foreground">{t("dailyGoal")}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goal Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            {locale === "zh" ? "今日进度" : "Today's progress"}
          </span>
          <span className="font-medium">{Math.round(goalProgress)}%</span>
        </div>
        <Progress value={goalProgress} className="h-3" />
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <Link key={task.id} href={task.href}>
            <Card
              className={`transition-colors hover:bg-accent/50 ${
                task.completed ? "opacity-60" : ""
              }`}
            >
              <CardContent className="flex items-center gap-4 p-4">
                <div
                  className={`rounded-full p-2 ${
                    task.completed
                      ? "bg-green-100 text-green-600"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {task.completed ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    task.icon
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{t(task.titleKey)}</p>
                  <p className="text-xs text-muted-foreground">
                    {task.itemCount}{" "}
                    {locale === "zh" ? "项" : "items"} · {task.estimatedMinutes}{" "}
                    {locale === "zh" ? "分钟" : "min"}
                  </p>
                </div>
                {task.completed && (
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    ✓
                  </Badge>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
