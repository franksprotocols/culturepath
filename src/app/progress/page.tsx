"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { db, type UserProgress, type StudySession } from "@/lib/db";
import { useAppStore } from "@/stores/app-store";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Clock,
  Flame,
  Target,
  TrendingUp,
} from "lucide-react";

export default function ProgressPage() {
  const t = useTranslations("progress");
  const { locale, currentNation: currentNationId } = useAppStore();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [totalVocab, setTotalVocab] = useState(0);

  const nationId = currentNationId || "japan";

  useEffect(() => {
    async function load() {
      const nation = await db.nations.get(nationId);
      const langId = nation?.languages?.[0] || "japanese";
      const p = await db.userProgress
        .where("languageId")
        .equals(langId)
        .first();
      setProgress(p || null);

      const s = await db.studySessions.toArray();
      setSessions(s);

      // Count vocab for current nation only
      const allVocab = await db.vocabularyItems.toArray();
      const nationVocab = allVocab.filter((v) => v.id.startsWith(nationId + "-"));
      setTotalVocab(nationVocab.length);
    }
    load();
  }, [nationId]);

  const totalMinutes = sessions.reduce((s, sess) => s + sess.durationMinutes, 0);
  const totalReviewed = sessions.reduce((s, sess) => s + sess.itemsReviewed, 0);
  const totalCorrect = sessions.reduce((s, sess) => s + sess.itemsCorrect, 0);
  const accuracy = totalReviewed > 0 ? Math.round((totalCorrect / totalReviewed) * 100) : 0;
  const wordsLearned = progress?.wordsLearned || 0;
  const vocabPercent = totalVocab > 0 ? Math.round((wordsLearned / totalVocab) * 100) : 0;

  // Weekly data
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const weekStr = weekAgo.toISOString().split("T")[0];
  const weekSessions = sessions.filter((s) => s.date >= weekStr);
  const weekMinutes = weekSessions.reduce((s, sess) => s + sess.durationMinutes, 0);

  // CEFR level display
  const level = progress?.level || "A1";
  const levelProgress: Record<string, number> = {
    A1: 10,
    A2: 25,
    B1: 45,
    B2: 65,
    C1: 85,
    C2: 100,
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{t("title")}</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="flex flex-col items-center p-4 text-center">
            <BookOpen className="h-6 w-6 text-blue-500 mb-2" />
            <p className="text-2xl font-bold">{wordsLearned}</p>
            <p className="text-xs text-muted-foreground">{t("wordsLearned")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-4 text-center">
            <Clock className="h-6 w-6 text-purple-500 mb-2" />
            <p className="text-2xl font-bold">{totalMinutes}</p>
            <p className="text-xs text-muted-foreground">
              {t("studyTime")} ({t("minutes")})
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-4 text-center">
            <Flame className="h-6 w-6 text-orange-500 mb-2" />
            <p className="text-2xl font-bold">{progress?.currentStreak || 0}</p>
            <p className="text-xs text-muted-foreground">{t("dayStreak")}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center p-4 text-center">
            <Target className="h-6 w-6 text-green-500 mb-2" />
            <p className="text-2xl font-bold">{accuracy}%</p>
            <p className="text-xs text-muted-foreground">{t("accuracy")}</p>
          </CardContent>
        </Card>
      </div>

      {/* Vocabulary Progress */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            {t("vocabularyProgress")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>
              {wordsLearned} / {totalVocab}{" "}
              {locale === "zh" ? "词汇" : "words"}
            </span>
            <span className="font-medium">{vocabPercent}%</span>
          </div>
          <Progress value={vocabPercent} className="h-3" />
        </CardContent>
      </Card>

      {/* Level Progress */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            📊 {t("levelProgress")}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{level}</span>
            <span className="text-sm text-muted-foreground">
              CEFR {locale === "zh" ? "等级" : "Level"}
            </span>
          </div>
          <Progress value={levelProgress[level] || 0} className="h-3" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>A1</span>
            <span>A2</span>
            <span>B1</span>
            <span>B2</span>
            <span>C1</span>
            <span>C2</span>
          </div>
        </CardContent>
      </Card>

      {/* This Week */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">
            📅 {t("thisWeek")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <p className="text-xl font-bold">{weekSessions.length}</p>
              <p className="text-xs text-muted-foreground">
                {locale === "zh" ? "学习次数" : "Sessions"}
              </p>
            </div>
            <div>
              <p className="text-xl font-bold">{weekMinutes}</p>
              <p className="text-xs text-muted-foreground">
                {t("minutes")}
              </p>
            </div>
            <div>
              <p className="text-xl font-bold">
                {weekSessions.reduce((s, sess) => s + sess.itemsReviewed, 0)}
              </p>
              <p className="text-xs text-muted-foreground">
                {locale === "zh" ? "复习词汇" : "Reviews"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
