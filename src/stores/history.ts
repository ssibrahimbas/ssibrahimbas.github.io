import { defineStore } from "pinia";

export enum HistoryStorage {
  key = "cache:history",
}

export type HistoryItem = {
  command: string;
  args: string[];
  timestamp: number;
};

export type HistoryState = {
  histories: Array<HistoryItem>;
};

export const useHistoryStore = defineStore({
  id: "history",
  state: (): HistoryState => ({
    histories: JSON.parse(localStorage.getItem(HistoryStorage.key) || "[]"),
  }),
  getters: {
    getHistory: (state): Array<HistoryItem> => state.histories,
  },
  actions: {
    addItemToHistory(historyItem: HistoryItem): void {
      this.histories.push(historyItem);
      localStorage.setItem(HistoryStorage.key, JSON.stringify(this.histories));
    },
  },
});
