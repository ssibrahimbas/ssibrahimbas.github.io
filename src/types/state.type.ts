import type { InputType } from "./input.type";

export type State = {
  terminal: Array<InputType>;
  activeIndex: number;
  activePosition: number;
  deep: number;
  autocompletedKey: string;
  showFinished: boolean;
  clear: boolean;
};
