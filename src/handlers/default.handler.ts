import { StringTool } from "@/tools/string.tool";
import type {
  KeyboardHandler,
  KeyboardHandlerParams,
  KeyboardHandlerResult,
} from "@/types/handler.type";

class DefaultKeyboardHandler implements KeyboardHandler {
  main = ({
    state,
    funcs,
    event,
  }: KeyboardHandlerParams): KeyboardHandlerResult => {
    const input = state.terminal[state.activeIndex];
    if (!input) return {};
    if (input.children) {
      const active = input.children.find((c) => !c.finished);
      if (active) {
        if (state.activePosition !== -1) {
          active.answer = StringTool.splitAndAdd(
            active.answer,
            state.activePosition,
            event.key
          );
          funcs.tryIncreaseActivePosition();
        } else {
          active.answer += event.key;
        }
      }
    } else {
      if (state.activePosition !== -1) {
        input.value = StringTool.splitAndAdd(
          input.value,
          state.activePosition,
          event.key
        );
        funcs.tryIncreaseActivePosition();
      } else {
        input.value += event.key;
      }
    }
    return {};
  };
}

export default new DefaultKeyboardHandler();
