<script setup lang="ts">
import { computed } from "vue";
import { useThemeStore, type ThemeColors } from "@/stores/theme";
import { useUserStore, type TerminalUser } from "@/stores/user";

const themeStore = useThemeStore();
const userStore = useUserStore();

const colors = computed<ThemeColors>(() => themeStore.getColors);
const user = computed<TerminalUser>(() => userStore.getUser);

const props = defineProps<{
  value: string;
  finished?: boolean;
  autocompletedKey: string;
  activePosition: number;
}>();
const emit = defineEmits<{
  (e: "update:value", value: string): void;
}>();

const value = computed<string>({
  get: () => props.value,
  set: (value: string) => emit("update:value", value),
});

const caretPosition = computed<string>(() => {
  const position = (props.value.length - props.activePosition) * -9;
  return `${position}px`;
});
</script>

<template>
  <section class="terminal-input-section">
    <span class="terminal-user">{{ user.username }} {{ user.separator }}</span>
    <span
      class="terminal-input base-input"
      :class="{
        'use-blink': !finished,
        'use-caret-transform':
          props.activePosition !== -1 && props.activePosition > 0,
      }"
      >{{ value }}
    </span>
    <span
      class="terminal-autocomplete"
      v-if="!finished && autocompletedKey !== ''"
      >{{ autocompletedKey }}</span
    >
  </section>
  <slot name="result"></slot>
</template>

<style lang="scss" scoped>
.terminal-input-section {
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  .terminal-user {
    color: v-bind("colors.colorText");
  }
  .terminal-input {
    color: v-bind("colors.colorText");
    &.use-blink {
      &.use-caret-transform {
        &:after {
          position: absolute;
          transform: translateX(v-bind("caretPosition"));
        }
      }
      &:after {
        background-color: v-bind("colors.colorText");
      }
    }
  }
  .terminal-autocomplete {
    color: v-bind("colors.colorText");
    opacity: 0.4;
    font-style: italic;
  }
}
</style>
