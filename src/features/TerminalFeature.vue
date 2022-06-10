<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from "vue";
import TerminalInput from "@/components/input/TerminalInput.vue";
import TerminalResult from "@/components/result/TerminalResult.vue";
import TerminalBanner from "@/components/banner/TerminalBanner.vue";
import { useCommands, type Commands } from "@/commands";
import { useHandlers, type Handlers } from "@/handlers";
import type { InputType, QuestionAnswerType } from "@/types/input.type";
import type { CommandResult } from "@/types/command.type";
import TerminalChildInput from "../components/input/TerminalChildInput.vue";
import type { State } from "@/types/state.type";

const commands: Commands = useCommands();
const handlers: Handlers = useHandlers();

const terminalContainer = ref<HTMLDivElement>();

const state = reactive<State>({
  terminal: [{ value: "", finished: false, result: "" }],
  activeIndex: 0,
  activePosition: -1,
  deep: 0,
  autocompletedKey: "",
  showFinished: false,
  clear: false,
});

const setResult = (input: InputType, value: string) => {
  input.result = value;
  state.activePosition = -1;
};

const setChildrenResult = (input: InputType, value: string) => {
  const active = input.children![input.children!.length - 1];
  active.result = value;
  state.activePosition = -1;
};

const setChildren = (input: InputType, children: QuestionAnswerType): void => {
  state.activePosition = -1;
  input.finished = true;
  if (input.children) {
    input.children.push(children);
  } else {
    input.children = [children];
  }
};

const setPrevCommand = (input: InputType, command: string): void => {
  input.prevCommand = command;
};

const finishPrevInputs = (): void => {
  state.terminal.forEach((input) => {
    input.finished = true;
  });
};

const createNewInput = (): void => {
  finishPrevInputs();
  state.terminal.push({ value: "", finished: false, result: "" });
  state.activeIndex++;
  state.deep = 0;
  state.activePosition = -1;
  autoScroll();
};

const execCommand = (): { createNew: boolean } => {
  const result: CommandResult = commands.execCommand(
    state.terminal[state.activeIndex],
    state
  );
  const input = state.terminal[state.activeIndex];
  if (result.setResult) {
    setResult(input, result.result);
  }
  if (result.setChildren && result.children) {
    setChildren(input, result.children);
  }
  if (result.nextCommand) {
    setPrevCommand(input, result.nextCommand);
  }
  if (result.setChildResult) {
    setChildrenResult(input, result.result);
  }
  return {
    createNew:
      !result.setChildren ||
      (typeof result.fromUnderground !== "undefined"
        ? result.fromUnderground
        : false),
  };
};

const tryDecreaseActivePosition = (): void => {
  const input = state.terminal[state.activeIndex];
  if (state.activePosition - 1 > 0) {
    state.activePosition--;
  } else if (state.activePosition > input.value.length) {
    state.activePosition = -1;
  }
};

const tryIncreaseActivePosition = (): void => {
  const input = state.terminal[state.activeIndex];
  if (state.activePosition + 1 <= input.value.length) {
    state.activePosition++;
  } else if (state.activePosition >= input.value.length) {
    state.activePosition = -1;
  }
};

const autoScroll = () => {
  setTimeout(() => {
    window.scrollTo({
      top: terminalContainer.value!.clientHeight + 1200,
    });
  }, 100);
};

const calculateAutoComplete = ({ input }: { input: InputType }): void => {
  return commands.calculateAutocomplete(input, state);
};

const clearAutocomplete = (): void => {
  state.autocompletedKey = "";
};

const onKeydown = (event: KeyboardEvent): void => {
  autoScroll();
  handlers.onKeydown({
    event,
    state,
    funcs: {
      execCommand,
      createNewInput,
      tryIncreaseActivePosition,
      tryDecreaseActivePosition,
      clearAutocomplete,
      calculateAutoComplete,
    },
  });
};

const listenKeyboard = () => {
  window.addEventListener("keydown", onKeydown, false);
};

const stopListeningKeyboard = () => {
  window.removeEventListener("keydown", onKeydown, false);
};

onMounted(() => {
  listenKeyboard();
});

onUnmounted(() => {
  stopListeningKeyboard();
});
</script>

<template>
  <div ref="terminalContainer">
    <TerminalBanner
      @ssi:finish="state.showFinished = true"
      v-if="!state.clear"
    ></TerminalBanner>
    <template v-if="state.showFinished">
      <div
        v-for="(input, index) in state.terminal"
        :key="index"
        class="terminal-item-wrapper"
      >
        <TerminalInput
          v-model:value="input.value"
          :finished="input.finished"
          :autocompleted-key="state.autocompletedKey"
          :active-position="state.activePosition"
        >
          <template #result>
            <TerminalResult
              :value="input.result"
              :class="input.resultClass"
            ></TerminalResult>
          </template>
        </TerminalInput>
        <TerminalChildInput
          v-for="(child, index) in input.children"
          :key="index"
          :value="child.answer"
          :finished="child.finished"
          :question="child.question"
          :active-position="state.activePosition"
        >
          <template #result>
            <TerminalResult
              v-if="child.result"
              :value="child.result"
              :class="input.resultClass"
            ></TerminalResult>
          </template>
        </TerminalChildInput>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.terminal-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
<style lang="scss">
@keyframes caretBlink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.use-blink {
  &:after {
    animation: caretBlink 1s step-end infinite;
    content: " ";
    background-color: var(--color-text);
  }
}
</style>
