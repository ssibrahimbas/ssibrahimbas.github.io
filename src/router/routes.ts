import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "terminal-view",
    components: {
      default: () => import("@/views/TerminalView.vue"),
    },
  },
];
