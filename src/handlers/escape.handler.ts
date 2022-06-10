import type {
  KeyboardHandler,
  KeyboardHandlerParams,
  KeyboardHandlerResult,
} from "@/types/handler.type";

class EscapeKeyboardHandler implements KeyboardHandler {
  main = ({ state, funcs }: KeyboardHandlerParams): KeyboardHandlerResult => {
    const input = state.terminal[state.activeIndex];
    if (input.children) {
      input.children.forEach((child) => {
        child.finished = true;
      });
      funcs.createNewInput();
    }
    return {};
  };
}

export default new EscapeKeyboardHandler();
