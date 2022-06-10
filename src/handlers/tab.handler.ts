import type {
  KeyboardHandler,
  KeyboardHandlerParams,
  KeyboardHandlerResult,
} from "@/types/handler.type";

class TabKeyboardHandler implements KeyboardHandler {
  main = ({ state }: KeyboardHandlerParams): KeyboardHandlerResult => {
    if (state.autocompletedKey !== "") {
      const input = state.terminal[state.activeIndex];
      if (state.autocompletedKey == " --help") {
        input.value += state.autocompletedKey;
        state.autocompletedKey = "";
      } else {
        input.value = state.autocompletedKey;
        if (input.value !== "--help") {
          state.autocompletedKey = " --help";
        } else {
          state.autocompletedKey = "";
        }
      }
    }
    return {};
  };
}

export default new TabKeyboardHandler();
