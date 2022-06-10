import type {
  KeyboardHandler,
  KeyboardHandlerParams,
  KeyboardHandlerResult,
} from "@/types/handler.type";

class ArrowUpKeyboardHandler implements KeyboardHandler {
  main = ({ state }: KeyboardHandlerParams): KeyboardHandlerResult => {
    if (state.terminal[state.activeIndex - (state.deep + 1)]) {
      state.terminal[state.activeIndex].value =
        state.terminal[state.activeIndex - (state.deep + 1)].value;
      state.deep++;
    }
    return {};
  };
}

export default new ArrowUpKeyboardHandler();
