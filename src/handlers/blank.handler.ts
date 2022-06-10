import type {
  KeyboardHandler,
  KeyboardHandlerParams,
  KeyboardHandlerResult,
} from "@/types/handler.type";

class BlankKeyboardHandler implements KeyboardHandler {
  main = (params: KeyboardHandlerParams): KeyboardHandlerResult => {
    return {};
  };
}

export default new BlankKeyboardHandler();
