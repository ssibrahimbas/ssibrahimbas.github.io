import { defineStore } from "pinia";

export type TerminalUser = {
  username: string;
  separator: string;
};

export type UserState = {
  user: TerminalUser;
};

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    user: {
      username: "ssibrahimbas@Samis-Macbook Pro",
      separator: "%",
    },
  }),
  getters: {
    getUser: (state): TerminalUser => state.user,
  },
});
