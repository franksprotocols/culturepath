"use client";

import { useEffect, useState, useCallback } from "react";
import { db, type City } from "@/lib/db";
import { useAppStore } from "@/stores/app-store";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown, ChevronUp, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { generateItemDetail, getAIConfig } from "@/lib/ai/content-generator";

const typeLabels: Record<string, { en: string; zh: string; emoji: string }> = {
  capital: { en: "Capital", zh: "首都", emoji: "🏛️" },
  major_city: { en: "Major City", zh: "主要城市", emoji: "🏙️" },
  historic: { en: "Historic", zh: "历史名城", emoji: "🏯" },
  cultural: { en: "Cultural", zh: "文化地标", emoji: "⛩️" },
  natural: { en: "Natural", zh: "自然风光", emoji: "🗻" },
};

const allTypes = ["capital", "major_city", "historic", "cultural", "natural"];

export default function PlacesPage() {
  const { locale, currentNation: currentNationId } = useAppStore();
  const [cities, setCities] = useState<City[]>([]);
  const [nationFlag, setNationFlag] = useState("🇯🇵");
  const [nationName, setNationName] = useState({ en: "Japan", zh: "日本" });
  const [filterType, setFilterType] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"map" | "list">("list");
  const [loadingDetailIds, setLoadingDetailIds] = useState<Set<string>>(new Set());
  const [detailErrors, setDetailErrors] = useState<Map<string, string>>(new Map());

  const nationId = currentNationId || "japan";

  useEffect(() => {
    async function load() {
      const nation = await db.nations.get(nationId);
      if (nation) {
        setNationFlag(nation.flag);
        setNationName({ en: nation.name_en, zh: nation.name_zh });
      }
      const data = await db.cities
        .where("nationId")
        .equals(nationId)
        .toArray();
      setCities(data);
    }
    load();
  }, [nationId]);

  const needsDetail = (city: City) => !city.overview_en;

  const loadDetail = useCallback(async (city: City) => {
    if (!needsDetail(city)) return;
    if (loadingDetailIds.has(city.id)) return;

    setLoadingDetailIds((prev) => new Set(prev).add(city.id));
    setDetailErrors((prev) => { const m = new Map(prev); m.delete(city.id); return m; });

    try {
      const config = await getAIConfig();
      await generateItemDetail({ type: "city", city }, nationName.en, config);
      const updated = await db.cities.get(city.id);
      if (updated) {
        setCities((prev) => prev.map((c) => (c.id === city.id ? updated : c)));
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to load detail";
      setDetailErrors((prev) => new Map(prev).set(city.id, msg));
    } finally {
      setLoadingDetailIds((prev) => { const s = new Set(prev); s.delete(city.id); return s; });
    }
  }, [loadingDetailIds, nationName.en]);

  const handleToggle = useCallback((city: City) => {
    const newId = expandedId === city.id ? null : city.id;
    setExpandedId(newId);
    if (newId && needsDetail(city)) {
      loadDetail(city);
    }
  }, [expandedId, loadDetail]);

  const handleMapSelect = useCallback((id: string) => {
    setViewMode("list");
    setExpandedId(id);
    const city = cities.find((c) => c.id === id);
    if (city && needsDetail(city)) {
      loadDetail(city);
    }
  }, [cities, loadDetail]);

  const filtered = filterType
    ? cities.filter((c) => c.type === filterType)
    : cities;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/timeline"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {locale === "zh" ? "返回时间线" : "Back to Timeline"}
        </Link>
        <h1 className="text-2xl font-bold">
          {locale === "zh" ? `${nationFlag} ${nationName.zh}地理与城市` : `${nationFlag} Places of ${nationName.en}`}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {locale === "zh"
            ? `${cities.length} 个值得探索的地方 · 点击查看详情`
            : `${cities.length} places to explore · Tap for details`}
        </p>
      </div>

      {/* View Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setViewMode("list")}
          className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
            viewMode === "list"
              ? "bg-primary text-primary-foreground"
              : "border-border hover:bg-accent"
          }`}
        >
          {locale === "zh" ? "📋 列表" : "📋 List"}
        </button>
        <button
          onClick={() => setViewMode("map")}
          className={`text-xs px-3 py-1.5 rounded-md border transition-colors ${
            viewMode === "map"
              ? "bg-primary text-primary-foreground"
              : "border-border hover:bg-accent"
          }`}
        >
          {locale === "zh" ? "🗺️ 地图" : "🗺️ Map"}
        </button>
      </div>

      {/* Type Filter */}
      <div className="overflow-x-auto">
        <div className="flex gap-1.5 min-w-max pb-2">
          <button
            onClick={() => setFilterType(null)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              filterType === null
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:bg-accent"
            }`}
          >
            {locale === "zh" ? "全部" : "All"}
          </button>
          {allTypes.map((type) => {
            const info = typeLabels[type];
            const count = cities.filter((c) => c.type === type).length;
            if (count === 0) return null;
            return (
              <button
                key={type}
                onClick={() => setFilterType(filterType === type ? null : type)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  filterType === type
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:bg-accent"
                }`}
              >
                {info.emoji} {locale === "zh" ? info.zh : info.en} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Map View */}
      {viewMode === "map" && (
        <SimpleMap
          cities={filtered}
          locale={locale}
          onSelect={handleMapSelect}
        />
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="space-y-3">
          {filtered.map((city) => (
            <CityCard
              key={city.id}
              city={city}
              locale={locale}
              isExpanded={expandedId === city.id}
              isLoadingDetail={loadingDetailIds.has(city.id)}
              detailError={detailErrors.get(city.id)}
              onToggle={() => handleToggle(city)}
              onRetryDetail={() => loadDetail(city)}
            />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          {locale === "zh" ? "暂无数据" : "No data available"}
        </p>
      )}
    </div>
  );
}

function SimpleMap({
  cities,
  locale,
  onSelect,
}: {
  cities: City[];
  locale: string;
  onSelect: (id: string) => void;
}) {
  // Compute bounds from city coordinates
  const coords = cities.filter((c) => c.coordinates);
  if (coords.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground text-sm">
        {locale === "zh" ? "暂无坐标数据" : "No coordinate data available"}
      </div>
    );
  }

  const lats = coords.map((c) => c.coordinates!.lat);
  const lngs = coords.map((c) => c.coordinates!.lng);
  const minLat = Math.min(...lats) - 2;
  const maxLat = Math.max(...lats) + 2;
  const minLng = Math.min(...lngs) - 2;
  const maxLng = Math.max(...lngs) + 2;

  const mapX = (lng: number) => ((lng - minLng) / (maxLng - minLng)) * 90 + 5;
  const mapY = (lat: number) => ((maxLat - lat) / (maxLat - minLat)) * 85 + 5;

  return (
    <div className="relative bg-accent/30 rounded-xl p-4 overflow-hidden">
      <svg viewBox="0 0 100 100" className="w-full max-w-md mx-auto">
        {/* City pins */}
        {cities.map((city) => {
          if (!city.coordinates) return null;
          const x = mapX(city.coordinates.lng);
          const y = mapY(city.coordinates.lat);
          const name = locale === "zh" ? city.name_zh : city.name_en;

          return (
            <g key={city.id} onClick={() => onSelect(city.id)} className="cursor-pointer">
              <circle
                cx={x}
                cy={y}
                r="2"
                fill="hsl(var(--primary))"
                stroke="white"
                strokeWidth="0.5"
              />
              <text
                x={x}
                y={y - 3}
                textAnchor="middle"
                className="text-[3px] fill-foreground font-medium"
              >
                {name}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="text-xs text-center text-muted-foreground mt-2">
        {locale === "zh" ? "点击城市查看详情" : "Tap a city for details"}
      </p>
    </div>
  );
}

function CityCard({
  city,
  locale,
  isExpanded,
  isLoadingDetail,
  detailError,
  onToggle,
  onRetryDetail,
}: {
  city: City;
  locale: string;
  isExpanded: boolean;
  isLoadingDetail: boolean;
  detailError?: string;
  onToggle: () => void;
  onRetryDetail: () => void;
}) {
  const name = locale === "zh" ? city.name_zh : city.name_en;
  const region = locale === "zh" ? city.region_zh : city.region_en;
  const overview = locale === "zh" ? city.overview_zh : city.overview_en;
  const whyVisit = locale === "zh" ? city.whyVisit_zh : city.whyVisit_en;
  const highlights = locale === "zh" ? city.highlights_zh : city.highlights_en;
  const typeInfo = typeLabels[city.type] || typeLabels.major_city;
  const hasDetail = !!city.overview_en;

  return (
    <Card>
      <div role="button" tabIndex={0} onClick={onToggle} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onToggle(); }} className="w-full text-left cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex items-start gap-3">
            <div className="text-2xl shrink-0">{typeInfo.emoji}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base">{name}</CardTitle>
                <Badge variant="secondary" className="text-[10px]">
                  {region}
                </Badge>
                <Badge variant="outline" className="text-[10px]">
                  {locale === "zh" ? typeInfo.zh : typeInfo.en}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                {city.name_native} · {city.name_reading}
              </p>
            </div>
            <div className="shrink-0 pt-1">
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>
        </CardHeader>
      </div>

      {isExpanded && (
        <CardContent className="pt-0 space-y-4">
          {/* Loading detail */}
          {isLoadingDetail && (
            <div className="flex items-center justify-center gap-2 py-6">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <span className="text-sm text-muted-foreground">
                {locale === "zh" ? "正在生成详细内容..." : "Generating details..."}
              </span>
            </div>
          )}

          {/* Error */}
          {detailError && !isLoadingDetail && (
            <div className="text-center py-4 space-y-2">
              <p className="text-xs text-destructive">{detailError}</p>
              <button
                onClick={(e) => { e.stopPropagation(); onRetryDetail(); }}
                className="text-xs text-primary hover:underline"
              >
                {locale === "zh" ? "重试" : "Retry"}
              </button>
            </div>
          )}

          {/* Detail content */}
          {hasDetail && !isLoadingDetail && (
            <>
              {/* Overview */}
              <p className="text-sm leading-relaxed whitespace-pre-line">{overview}</p>

              {/* Why Visit */}
              <div className="rounded-lg bg-primary/5 p-3">
                <p className="text-xs font-medium text-primary mb-1">
                  {locale === "zh" ? "🧳 为什么要去" : "🧳 Why Visit"}
                </p>
                <p className="text-sm">{whyVisit}</p>
              </div>

              {/* Highlights */}
              {highlights.length > 0 && (
                <div>
                  <p className="text-xs font-medium mb-2">
                    {locale === "zh" ? "⭐ 亮点" : "⭐ Highlights"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {highlights.map((h, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {h}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {(city.linkedPeopleIds.length > 0 || city.linkedTimelineIds.length > 0) && (
                <div className="flex gap-3 pt-2 border-t border-border">
                  {city.linkedPeopleIds.length > 0 && (
                    <Link
                      href="/people"
                      className="text-xs text-primary hover:underline"
                    >
                      {locale === "zh"
                        ? `👤 相关人物 (${city.linkedPeopleIds.length})`
                        : `👤 Related people (${city.linkedPeopleIds.length})`}
                    </Link>
                  )}
                  {city.linkedTimelineIds.length > 0 && (
                    <Link
                      href="/timeline"
                      className="text-xs text-primary hover:underline"
                    >
                      {locale === "zh"
                        ? `📜 历史事件 (${city.linkedTimelineIds.length})`
                        : `📜 History (${city.linkedTimelineIds.length})`}
                    </Link>
                  )}
                </div>
              )}
            </>
          )}

          {/* No detail yet and not loading */}
          {!hasDetail && !isLoadingDetail && !detailError && (
            <div className="text-center py-4">
              <p className="text-xs text-muted-foreground italic">
                {locale === "zh" ? "点击加载详情" : "Tap to load details"}
              </p>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
