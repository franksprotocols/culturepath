import { create } from "zustand";

interface AppState {
  locale: "en" | "zh";
  setLocale: (locale: "en" | "zh") => void;
  currentNation: string | null;
  setCurrentNation: (nationId: string | null) => void;
  studySessionActive: boolean;
  setStudySessionActive: (active: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  locale: "en",
  setLocale: (locale) => {
    document.cookie = `locale=${locale};path=/;max-age=31536000`;
    set({ locale });
  },
  currentNation: null,
  setCurrentNation: (nationId) => set({ currentNation: nationId }),
  studySessionActive: false,
  setStudySessionActive: (active) => set({ studySessionActive: active }),
}));
