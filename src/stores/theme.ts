import { defineStore } from "pinia";

export enum ThemeStorage {
  ColorKey = "cache:theme:colors",
}

export type ThemeColors = {
  colorText: string | null;
  colorHeading: string | null;
  colorBackground: string | null;
};

export type ThemeStore = {
  colors: ThemeColors;
};

export type ThemeActions = {
  setTextColor: (color: string) => void;
};

const colors: { [key in string]: string } = {
  pink: "#FF8AD8",
};

export const useThemeStore = defineStore({
  id: "theme",
  state: (): ThemeStore => ({
    colors: JSON.parse(
      localStorage.getItem(ThemeStorage.ColorKey) ||
        JSON.stringify({
          colorText: null,
          colorHeading: null,
          colorBackground: null,
        })
    ),
  }),
  getters: {
    getColors: (state): ThemeColors => state.colors,
    getTextColor: (state): string | null => state.colors.colorText,
    getHeadingColor: (state): string | null => state.colors.colorHeading,
    getBackgroundColor: (state): string | null => state.colors.colorBackground,
  },
  actions: {
    setTextColor(color: string | null): void {
      this.colors.colorText = color ? colors[color] : null;
      this.updateColors();
    },
    setHeadingColor(color: string | null): void {
      this.colors.colorHeading = color;
      this.updateColors();
    },
    setBackgroundColor(color: string | null): void {
      if (color === "default") {
        color = getComputedStyle(document.body)
          .getPropertyValue("--color-background")
          .trim();
      }
      this.colors.colorBackground = color;
      this.updateColors();
    },
    updateColors(): void {
      this.setBackgroundToBody();
      localStorage.setItem(ThemeStorage.ColorKey, JSON.stringify(this.colors));
    },
    setBackgroundToBody(): void {
      document.body.style.background = this.colors.colorBackground!;
    },
    syncColors(): void {
      if (this.colors.colorText === null) {
        const styleElement = getComputedStyle(document.body);
        this.colors.colorText = styleElement
          .getPropertyValue("--color-text")
          .trim();
        this.colors.colorHeading = styleElement
          .getPropertyValue("--color-heading")
          .trim();
        this.colors.colorBackground = styleElement
          .getPropertyValue("--color-background")
          .trim();
      }
      this.setBackgroundToBody();
    },
  },
});
