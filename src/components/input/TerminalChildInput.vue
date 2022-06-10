<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value: string;
  finished: boolean;
  question: string;
  activePosition: number;
}>();

const caretPosition = computed<string>(() => {
  const position = (props.value.length - props.activePosition) * -9;
  return `${position}px`;
});
</script>

<template>
  <div class="terminal-child-input-section">
    <span class="terminal-child-question">&nbsp;{{ question }}</span
    ><br />
    <span class="terminal-child-caret">&nbsp;></span>
    <span
      class="terminal-child-input base-input"
      :class="{
        'use-blink': !finished,
        'font-italic': finished,
        'use-caret-transform':
          props.activePosition !== -1 && props.activePosition > 0,
      }"
      >{{ value }}</span
    >
  </div>
  <slot name="result"></slot>
</template>

<style lang="scss" scoped>
.terminal-child-input-section {
  .terminal-child-input {
    padding: calc(1rem / 4);
    &.use-caret-transform.use-blink {
      &:after {
        position: absolute;
        transform: translateX(v-bind("caretPosition"));
      }
    }
  }
}
</style>
