import type {
  KeyboardHandler,
  KeyboardHandlerParams,
  KeyboardHandlerResult,
} from "@/types/handler.type";

class EnterKeyboardHandler implements KeyboardHandler {
  main = ({ funcs }: KeyboardHandlerParams): KeyboardHandlerResult => {
    const { createNew } = funcs.execCommand();
    if (createNew) {
      funcs.createNewInput();
    }
    return {};
  };
}

export default new EnterKeyboardHandler();
