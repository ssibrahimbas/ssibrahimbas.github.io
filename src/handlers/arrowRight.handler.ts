import type {
  KeyboardHandler,
  KeyboardHandlerParams,
  KeyboardHandlerResult,
} from "@/types/handler.type";

class ArrowRightKeyboardHandler implements KeyboardHandler {
  main = ({ state, funcs }: KeyboardHandlerParams): KeyboardHandlerResult => {
    const input = state.terminal[state.activeIndex];
    if (input.children) {
      const active = input.children.find((c) => !c.finished);
      if (active) {
        if (state.activePosition === -1) {
          state.activePosition = active.answer.length - 1;
        } else {
          funcs.tryIncreaseActivePosition();
        }
      }
    } else if (state.activePosition === -1) {
      state.activePosition = input.value.length - 1;
    } else {
      funcs.tryIncreaseActivePosition();
    }
    return {};
  };
}

export default new ArrowRightKeyboardHandler();
