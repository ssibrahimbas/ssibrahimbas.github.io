import type {
  KeyboardHandler,
  KeyboardHandlerParams,
  KeyboardHandlerResult,
} from "@/types/handler.type";

class ArrowLeftKeyboardHandler implements KeyboardHandler {
  main = ({ state, funcs }: KeyboardHandlerParams): KeyboardHandlerResult => {
    const input = state.terminal[state.activeIndex];
    if (input.children) {
      const active = input.children.find((c) => !c.finished);
      if (active) {
        if (state.activePosition === -1) {
          state.activePosition = active.answer.length - 1;
        } else {
          funcs.tryDecreaseActivePosition();
        }
      }
    } else if (state.activePosition === -1) {
      state.activePosition = input.value.length - 1;
    } else {
      funcs.tryDecreaseActivePosition();
    }
    return {};
  };
}

export default new ArrowLeftKeyboardHandler();
