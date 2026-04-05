"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { useAppStore } from "@/stores/app-store";
import { useDiscoveryStore } from "@/stores/discovery-store";
import { worldNationsRegistry, allRegions, type WorldNation, type Region } from "@/data/world-nations-registry";
import { WorldMap } from "@/components/discovery/world-map";
import { NationDetailSheet } from "@/components/discovery/nation-detail-sheet";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Compass, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const regionLabels: Record<string, { en: string; zh: string }> = {
  all: { en: "All", zh: "全部" },
  "East Asia": { en: "East Asia", zh: "东亚" },
  "Southeast Asia": { en: "SE Asia", zh: "东南亚" },
  "South Asia": { en: "South Asia", zh: "南亚" },
  "Middle East": { en: "Middle East", zh: "中东" },
  Europe: { en: "Europe", zh: "欧洲" },
  "North Africa": { en: "N. Africa", zh: "北非" },
  "Sub-Saharan Africa": { en: "Africa", zh: "非洲" },
  "North America": { en: "Americas", zh: "美洲" },
  "Central America": { en: "C. America", zh: "中美" },
  "South America": { en: "S. America", zh: "南美" },
  Oceania: { en: "Oceania", zh: "大洋洲" },
};

// Collapse region filters into fewer groups for mobile
const regionFilterGroups: { key: string; regions: string[] }[] = [
  { key: "all", regions: [] },
  { key: "East Asia", regions: ["East Asia"] },
  { key: "Southeast Asia", regions: ["Southeast Asia"] },
  { key: "South Asia", regions: ["South Asia"] },
  { key: "Middle East", regions: ["Middle East"] },
  { key: "Europe", regions: ["Europe"] },
  { key: "North Africa", regions: ["North Africa", "Sub-Saharan Africa"] },
  { key: "North America", regions: ["North America", "Central America", "South America"] },
  { key: "Oceania", regions: ["Oceania"] },
];

export default function DiscoveryPage() {
  const { locale, setCurrentNation } = useAppStore();
  const {
    selectedNation,
    setSelectedNation,
    unlockedNations,
    setUnlockedNations,
    generationJobs,
  } = useDiscoveryStore();

  const router = useRouter();
  const [filterRegion, setFilterRegion] = useState<string>("all");
  const [contentCounts, setContentCounts] = useState<Record<string, number>>({});

  // Load unlocked nations from DB on mount
  useEffect(() => {
    async function load() {
      const nations = await db.nations.toArray();
      setUnlockedNations(nations.map((n) => n.id));

      // Get content counts per nation
      const counts: Record<string, number> = {};
      for (const n of nations) {
        const cards = await db.culturalCards.where("nationId").equals(n.id).count();
        const events = await db.timelineEvents.where("nationId").equals(n.id).count();
        const people = await db.famousPeople.where("nationId").equals(n.id).count();
        counts[n.id] = cards + events + people;
      }
      setContentCounts(counts);
    }
    load();
  }, [setUnlockedNations]);

  const unlockedSet = new Set(unlockedNations);
  const generatingId = Object.values(generationJobs).find(
    (j) => j.status === "generating"
  )?.nationId ?? null;

  // Filter nations by region
  const filterGroup = regionFilterGroups.find((g) => g.key === filterRegion);
  const filteredNations =
    filterRegion === "all"
      ? worldNationsRegistry
      : worldNationsRegistry.filter((n) =>
          filterGroup?.regions.includes(n.region)
        );

  const selectedNationData = selectedNation
    ? worldNationsRegistry.find((n) => n.id === selectedNation) ?? null
    : null;

  function handleSelectNation(nation: WorldNation) {
    setSelectedNation(nation.id);
  }

  function handleExploreNation(nationId: string) {
    setCurrentNation(nationId);
    router.push("/explore");
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          {locale === "zh" ? "🌍 发现世界" : "🌍 Discover"}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {locale === "zh"
            ? "探索世界各国的文化"
            : "Explore cultures around the world"}
        </p>
      </div>

      {/* Region Filter */}
      <div className="overflow-x-auto">
        <div className="flex gap-1.5 min-w-max pb-2">
          {regionFilterGroups.map((group) => {
            const label = regionLabels[group.key];
            const isActive = filterRegion === group.key;
            // Count nations in this group
            const count =
              group.key === "all"
                ? worldNationsRegistry.length
                : worldNationsRegistry.filter((n) =>
                    group.regions.includes(n.region)
                  ).length;
            if (count === 0 && group.key !== "all") return null;

            return (
              <button
                key={group.key}
                onClick={() => setFilterRegion(isActive ? "all" : group.key)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors whitespace-nowrap ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:bg-accent"
                }`}
              >
                {locale === "zh" ? label.zh : label.en}
              </button>
            );
          })}
        </div>
      </div>

      {/* World Map */}
      <WorldMap
        nations={filteredNations}
        unlockedIds={unlockedSet}
        generatingId={generatingId}
        onSelectNation={handleSelectNation}
        locale={locale}
      />

      {/* Stats Bar */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Compass className="h-4 w-4" />
        {locale === "zh"
          ? `已探索 ${unlockedNations.length} / ${worldNationsRegistry.length} 个国家`
          : `${unlockedNations.length} of ${worldNationsRegistry.length} nations explored`}
      </div>

      {/* Your Nations */}
      {unlockedNations.length > 0 && (
        <div>
          <h2 className="text-sm font-medium mb-2">
            {locale === "zh" ? "🌟 已解锁" : "🌟 Your Nations"}
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {unlockedNations.map((id) => {
              const nation = worldNationsRegistry.find((n) => n.id === id);
              if (!nation) return null;
              return (
                <button
                  key={id}
                  onClick={() => handleExploreNation(id)}
                  className="shrink-0"
                >
                  <Card className="p-3 w-32 text-center hover:bg-accent/50 transition-colors">
                    <span className="text-2xl">{nation.flag}</span>
                    <p className="text-xs font-medium mt-1 truncate">
                      {locale === "zh" ? nation.name_zh : nation.name_en}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {contentCounts[id] ?? 0}{" "}
                      {locale === "zh" ? "项内容" : "items"}
                    </p>
                  </Card>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Recommended Nations */}
      <div>
        <h2 className="text-sm font-medium mb-2">
          {locale === "zh" ? "🗺️ 推荐探索" : "🗺️ Recommended"}
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {worldNationsRegistry
            .filter((n) => !unlockedSet.has(n.id))
            .slice(0, 6)
            .map((nation) => (
              <button
                key={nation.id}
                onClick={() => handleSelectNation(nation)}
                className="text-left"
              >
                <Card className="p-3 hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{nation.flag}</span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium truncate">
                        {locale === "zh" ? nation.name_zh : nation.name_en}
                      </p>
                      <p className="text-[10px] text-muted-foreground truncate">
                        {locale === "zh"
                          ? regionLabels[nation.region]?.zh
                          : regionLabels[nation.region]?.en}
                      </p>
                    </div>
                    <ArrowRight className="h-3 w-3 text-muted-foreground ml-auto shrink-0" />
                  </div>
                </Card>
              </button>
            ))}
        </div>
      </div>

      {/* Nation Detail Sheet */}
      {selectedNationData && (
        <NationDetailSheet
          nation={selectedNationData}
          isUnlocked={unlockedSet.has(selectedNationData.id)}
          onClose={() => setSelectedNation(null)}
          locale={locale}
        />
      )}
    </div>
  );
}
