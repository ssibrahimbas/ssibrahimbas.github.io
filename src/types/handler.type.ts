import type { InputType } from "./input.type";
import type { State } from "./state.type";

export type ExtraFunctions = {
  execCommand: () => { createNew: boolean };
  createNewInput: () => void;
  tryIncreaseActivePosition: () => void;
  tryDecreaseActivePosition: () => void;
  clearAutocomplete: () => void;
  calculateAutoComplete: (params: { input: InputType }) => void;
};

export type KeyboardHandlerParams = {
  event: KeyboardEvent;
  state: State;
  funcs: ExtraFunctions;
};

export type KeyboardHandlerFunc = (
  params: KeyboardHandlerParams
) => KeyboardHandlerResult;

export type KeyboardHandlerResult = {};

export interface KeyboardHandler {
  main: KeyboardHandlerFunc;
}
