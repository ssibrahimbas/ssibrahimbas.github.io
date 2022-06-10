import { StringTool } from "@/tools/string.tool";
import type {
  KeyboardHandler,
  KeyboardHandlerParams,
  KeyboardHandlerResult,
} from "@/types/handler.type";

class BackspaceKeyboardHandler implements KeyboardHandler {
  main = ({
    state,
    funcs,
    event,
  }: KeyboardHandlerParams): KeyboardHandlerResult => {
    const input = state.terminal[state.activeIndex];
    if (input.children) {
      const active = input.children.find((c) => !c.finished);
      if (active) {
        if (state.activePosition !== -1) {
          active.answer = StringTool.split(
            active.answer,
            state.activePosition - 1
          );
          funcs.tryDecreaseActivePosition();
        } else {
          active.answer = active.answer.slice(0, -1);
        }
      }
    } else if (input.value.length > 0) {
      if (state.activePosition !== -1) {
        input.value = StringTool.split(input.value, state.activePosition - 1);
        funcs.tryDecreaseActivePosition();
      } else {
        input.value = input.value.slice(0, -1);
      }
    }
    return {};
  };
}

export default new BackspaceKeyboardHandler();
