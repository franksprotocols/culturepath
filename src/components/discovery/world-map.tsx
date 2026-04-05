"use client";

import { type WorldNation } from "@/data/world-nations-registry";

interface WorldMapProps {
  nations: WorldNation[];
  unlockedIds: Set<string>;
  generatingId: string | null;
  onSelectNation: (nation: WorldNation) => void;
  locale: string;
}

export function WorldMap({
  nations,
  unlockedIds,
  generatingId,
  onSelectNation,
  locale,
}: WorldMapProps) {
  return (
    <div className="relative bg-accent/20 rounded-xl p-3 overflow-hidden">
      <svg viewBox="0 0 1000 500" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Glow filter for unlocked nations */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Pulse animation for generating */}
          <radialGradient id="fog-gradient">
            <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.05" />
            <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.15" />
          </radialGradient>
        </defs>

        {/* Background */}
        <rect width="1000" height="500" fill="url(#fog-gradient)" rx="12" />

        {/* Simplified continent shapes */}
        <g className="fill-muted-foreground/8 stroke-muted-foreground/20" strokeWidth="0.8">
          {/* North America */}
          <path d="M 120 60 Q 150 50 200 55 Q 260 60 280 80 Q 300 100 290 130 Q 280 160 260 180 Q 240 200 220 210 Q 200 220 180 230 Q 170 235 165 240 Q 160 245 155 245 Q 140 235 135 220 Q 130 200 135 180 Q 130 160 125 140 Q 115 120 110 100 Q 108 80 120 60 Z" />
          {/* Central America */}
          <path d="M 155 245 Q 165 250 175 260 Q 185 270 195 275 Q 200 278 210 280 Q 215 282 220 278 Q 230 275 240 268 L 245 265 Q 248 268 250 272 Q 252 278 248 285 Q 244 290 238 292 L 232 290 Q 225 288 220 290 Q 215 295 210 292 Q 205 288 200 285 Q 195 282 188 282 Q 180 285 175 282 Q 170 278 168 272 Q 165 265 160 258 Q 155 250 155 245 Z" />
          {/* South America */}
          <path d="M 250 272 Q 270 265 290 270 Q 310 275 325 290 Q 340 310 345 330 Q 348 350 340 370 Q 330 390 315 400 Q 300 410 285 415 Q 270 420 265 410 Q 260 395 262 375 Q 258 355 255 340 Q 248 320 245 305 Q 242 290 245 280 Z" />
          {/* Europe */}
          <path d="M 450 80 Q 470 75 490 78 Q 510 80 530 90 Q 545 100 555 115 Q 560 130 555 145 Q 548 160 535 170 Q 520 178 505 180 Q 490 182 475 178 Q 460 175 450 168 Q 440 160 438 148 Q 435 135 438 120 Q 442 100 450 80 Z" />
          {/* Africa */}
          <path d="M 465 195 Q 490 190 515 195 Q 540 200 560 215 Q 575 230 585 250 Q 595 270 598 295 Q 600 320 595 345 Q 588 365 575 380 Q 560 390 540 395 Q 520 398 505 390 Q 490 380 480 360 Q 472 340 468 315 Q 465 290 462 265 Q 460 240 462 220 Q 463 205 465 195 Z" />
          {/* Asia (large mass) */}
          <path d="M 560 70 Q 600 55 650 50 Q 700 48 750 55 Q 800 60 840 75 Q 870 90 880 110 Q 885 130 875 150 Q 865 165 850 178 Q 840 188 830 195 Q 815 200 800 210 Q 780 220 760 228 Q 740 235 720 238 Q 700 240 680 235 Q 660 228 645 218 Q 630 208 618 195 Q 608 182 600 168 Q 590 150 578 135 Q 568 118 560 100 Q 555 85 560 70 Z" />
          {/* India subcontinent */}
          <path d="M 700 210 Q 720 205 740 210 Q 752 218 755 235 Q 755 255 748 270 Q 740 282 728 288 Q 715 290 708 280 Q 700 268 698 250 Q 696 235 700 210 Z" />
          {/* Southeast Asia */}
          <path d="M 770 230 Q 790 225 810 230 Q 825 240 835 255 Q 840 270 835 285 Q 828 295 815 298 Q 800 300 788 295 Q 775 288 770 275 Q 765 260 768 245 Z" />
          {/* Japan */}
          <path d="M 855 155 Q 862 150 868 155 Q 872 162 870 172 Q 868 182 862 188 Q 856 192 852 186 Q 848 178 850 168 Q 852 160 855 155 Z" />
          {/* Australia */}
          <path d="M 825 335 Q 855 325 885 330 Q 910 340 920 360 Q 925 380 915 395 Q 900 405 880 408 Q 855 410 838 400 Q 822 388 818 370 Q 815 355 825 335 Z" />
          {/* New Zealand */}
          <ellipse cx="930" cy="400" rx="10" ry="18" />
          {/* Indonesia archipelago */}
          <ellipse cx="810" cy="305" rx="30" ry="5" />
          <ellipse cx="830" cy="310" rx="15" ry="4" />
        </g>

        {/* Grid lines (subtle) */}
        <g className="stroke-muted-foreground/5" strokeWidth="0.3" strokeDasharray="4 8">
          <line x1="0" y1="125" x2="1000" y2="125" />
          <line x1="0" y1="250" x2="1000" y2="250" />
          <line x1="0" y1="375" x2="1000" y2="375" />
          <line x1="250" y1="0" x2="250" y2="500" />
          <line x1="500" y1="0" x2="500" y2="500" />
          <line x1="750" y1="0" x2="750" y2="500" />
        </g>

        {/* Nation pins */}
        {nations.map((nation) => {
          const isUnlocked = unlockedIds.has(nation.id);
          const isGenerating = generatingId === nation.id;

          return (
            <g
              key={nation.id}
              onClick={() => onSelectNation(nation)}
              className="cursor-pointer"
            >
              {/* Generating pulse ring */}
              {isGenerating && (
                <circle
                  cx={nation.svgX}
                  cy={nation.svgY}
                  r="14"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    from="10"
                    to="20"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.8"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Glow background for unlocked */}
              {isUnlocked && (
                <circle
                  cx={nation.svgX}
                  cy={nation.svgY}
                  r="12"
                  fill="hsl(var(--primary))"
                  opacity="0.15"
                />
              )}

              {/* Pin circle */}
              <circle
                cx={nation.svgX}
                cy={nation.svgY}
                r="8"
                fill={
                  isUnlocked
                    ? "hsl(var(--primary))"
                    : isGenerating
                      ? "hsl(var(--primary))"
                      : "hsl(var(--muted-foreground))"
                }
                opacity={isUnlocked || isGenerating ? 1 : 0.3}
                stroke="hsl(var(--background))"
                strokeWidth="1.5"
              />

              {/* Flag emoji */}
              <text
                x={nation.svgX}
                y={nation.svgY + 4}
                textAnchor="middle"
                className="text-[10px]"
                style={{ fontSize: "10px" }}
              >
                {nation.flag}
              </text>

              {/* Nation name label */}
              <text
                x={nation.svgX}
                y={nation.svgY - 13}
                textAnchor="middle"
                className="fill-foreground font-medium"
                style={{ fontSize: "7px" }}
                opacity={isUnlocked ? 1 : 0.5}
              >
                {locale === "zh" ? nation.name_zh : nation.name_en}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="text-xs text-center text-muted-foreground mt-2">
        {locale === "zh"
          ? "点击国家了解更多"
          : "Tap a nation to explore"}
      </p>
    </div>
  );
}
