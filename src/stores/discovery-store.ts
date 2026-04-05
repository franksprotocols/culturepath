import { create } from "zustand";

export interface GenerationJob {
  nationId: string;
  status: "idle" | "generating" | "completed" | "error";
  currentStep: string;
  stepsCompleted: string[];
  totalSteps: number;
  error?: string;
}

export const GENERATION_STEPS = [
  "nation",
  "cultural_cards",
  "vocabulary",
  "culture_vocab",
  "timeline_index",
  "people_index",
  "cities_index",
] as const;

export type GenerationStep = (typeof GENERATION_STEPS)[number];

const stepLabels: Record<GenerationStep, { en: string; zh: string }> = {
  nation: { en: "Nation metadata", zh: "国家信息" },
  cultural_cards: { en: "Cultural cards", zh: "文化卡片" },
  vocabulary: { en: "Daily vocabulary", zh: "日常词汇" },
  culture_vocab: { en: "Culture vocabulary", zh: "文化词汇" },
  timeline_index: { en: "Timeline index (45 events)", zh: "历史事件索引 (45)" },
  people_index: { en: "People index (28 figures)", zh: "名人索引 (28)" },
  cities_index: { en: "Cities index (18 places)", zh: "城市索引 (18)" },
};

export function getStepLabel(step: GenerationStep, locale: string): string {
  return locale === "zh" ? stepLabels[step].zh : stepLabels[step].en;
}

interface DiscoveryState {
  selectedNation: string | null;
  setSelectedNation: (id: string | null) => void;

  generationJobs: Record<string, GenerationJob>;
  startGeneration: (nationId: string) => void;
  updateGenerationStep: (nationId: string, step: string) => void;
  completeStep: (nationId: string, step: string) => void;
  completeGeneration: (nationId: string) => void;
  failGeneration: (nationId: string, error: string) => void;

  unlockedNations: string[];
  setUnlockedNations: (ids: string[]) => void;
  addUnlockedNation: (id: string) => void;
}

export const useDiscoveryStore = create<DiscoveryState>((set) => ({
  selectedNation: null,
  setSelectedNation: (id) => set({ selectedNation: id }),

  generationJobs: {},
  startGeneration: (nationId) =>
    set((state) => ({
      generationJobs: {
        ...state.generationJobs,
        [nationId]: {
          nationId,
          status: "generating",
          currentStep: GENERATION_STEPS[0],
          stepsCompleted: [],
          totalSteps: GENERATION_STEPS.length,
        },
      },
    })),
  updateGenerationStep: (nationId, step) =>
    set((state) => ({
      generationJobs: {
        ...state.generationJobs,
        [nationId]: {
          ...state.generationJobs[nationId],
          currentStep: step,
        },
      },
    })),
  completeStep: (nationId, step) =>
    set((state) => {
      const job = state.generationJobs[nationId];
      if (!job) return state;
      return {
        generationJobs: {
          ...state.generationJobs,
          [nationId]: {
            ...job,
            stepsCompleted: [...job.stepsCompleted, step],
          },
        },
      };
    }),
  completeGeneration: (nationId) =>
    set((state) => ({
      generationJobs: {
        ...state.generationJobs,
        [nationId]: {
          ...state.generationJobs[nationId],
          status: "completed",
          stepsCompleted: [...GENERATION_STEPS],
        },
      },
      unlockedNations: state.unlockedNations.includes(nationId)
        ? state.unlockedNations
        : [...state.unlockedNations, nationId],
    })),
  failGeneration: (nationId, error) =>
    set((state) => ({
      generationJobs: {
        ...state.generationJobs,
        [nationId]: {
          ...state.generationJobs[nationId],
          status: "error",
          error,
        },
      },
    })),

  unlockedNations: [],
  setUnlockedNations: (ids) => set({ unlockedNations: ids }),
  addUnlockedNation: (id) =>
    set((state) => ({
      unlockedNations: state.unlockedNations.includes(id)
        ? state.unlockedNations
        : [...state.unlockedNations, id],
    })),
}));
