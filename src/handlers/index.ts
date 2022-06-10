import arrowDownHandler from "./arrowDown.handler";
import arrowLeftHandler from "./arrowLeft.handler";
import arrowRightHandler from "./arrowRight.handler";
import arrowUpHandler from "./arrowUp.handler";
import backspaceHandler from "./backspace.handler";
import blankHandler from "./blank.handler";
import defaultHandler from "./default.handler";
import enterHandler from "./enter.handler";
import escapeHandler from "./escape.handler";

import tabHandler from "./tab.handler";
import type {
  KeyboardHandlerFunc,
  KeyboardHandlerParams,
} from "@/types/handler.type";

export class Handlers {
  private handlers: Record<string, KeyboardHandlerFunc> = {
    Enter: enterHandler.main,
    ArrowUp: arrowUpHandler.main,
    ArrowDown: arrowDownHandler.main,
    ArrowLeft: arrowLeftHandler.main,
    ArrowRight: arrowRightHandler.main,
    Backspace: backspaceHandler.main,
    Tab: tabHandler.main,
    default: defaultHandler.main,
    ShiftRight: blankHandler.main,
    ShiftLeft: blankHandler.main,
    CapsLock: blankHandler.main,
    Alt: blankHandler.main,
    AltLeft: blankHandler.main,
    AltRight: blankHandler.main,
    Meta: blankHandler.main,
    MetaLeft: blankHandler.main,
    MetaRight: blankHandler.main,
    ControlLeft: blankHandler.main,
    ControlRight: blankHandler.main,
    Control: blankHandler.main,
    Escape: escapeHandler.main,
  };

  onKeydown = ({ event, state, funcs }: KeyboardHandlerParams): void => {
    event.preventDefault();
    if (this.handlers[event.code]) {
      this.handlers[event.code]({ event, state, funcs });
      if (event.code !== "Tab") {
        funcs.clearAutocomplete();
      }
    } else {
      this.handlers.default({ event, state, funcs });
      funcs.calculateAutoComplete({ input: state.terminal[state.activeIndex] });
    }
  };
}

const handlers = new Handlers();

export const useHandlers = (): Handlers => {
  return handlers;
};
