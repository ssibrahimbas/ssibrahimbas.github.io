import type { InputType, QuestionAnswerType } from "@/types/input.type";
import type { State } from "@/types/state.type";

export type CommandHandlerParams = {
  input: InputType;
  options: Record<string, string>;
  params: Array<string>;
  state: State;
};

export type CommandHandler = (params: CommandHandlerParams) => CommandResult;

export type CommandResult = {
  result: string;
  nextCommand?: string;
  setResult?: boolean;
  setChildResult?: boolean;
  setChildren?: boolean;
  children?: QuestionAnswerType;
  fromUnderground?: boolean;
};

export interface Command {
  main: CommandHandler;
  extraCommands?: Array<string>;
}
