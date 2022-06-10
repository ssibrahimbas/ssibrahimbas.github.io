<script setup lang="ts">
import { useThemeStore, type ThemeColors } from "./stores/theme";
import { onMounted, computed } from "vue";

const themeStore = useThemeStore();

const colors = computed<ThemeColors>(() => themeStore.getColors);

onMounted(() => {
  themeStore.syncColors();
});
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/base.css";

*:not(pre) {
  font-family: "PT Mono", monospace;
}
</style>
