import { StateCreator } from "zustand";
import { AppState } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";

const THEME_STORAGE_KEY = "@theme_mode";
const LANGUAGE_STORAGE_KEY = "@language";

export const createAppSlice: StateCreator<AppState> = (set) => ({
  isOnline: true,
  isInitialized: false,
  isDarkMode: false,
  language: "en",

  setOnlineStatus: (status: boolean) => {
    set({ isOnline: status });
  },

  setInitialized: (status: boolean) => {
    set({ isInitialized: status });
  },

  toggleTheme: async () => {
    set((state) => {
      const newTheme = !state.isDarkMode;
      AsyncStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(newTheme));
      return { ...state, isDarkMode: newTheme };
    });
  },

  setLanguage: async (lang: string) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
      await i18next.changeLanguage(lang);
      set({ language: lang });
    } catch (error) {
      console.error("Error setting language:", error);
    }
  },
});
