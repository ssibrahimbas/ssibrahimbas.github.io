import type {
  Command,
  CommandHandlerParams,
  CommandResult,
} from "../types/command.type";

class ClearCommand implements Command {
  main = ({ state, params }: CommandHandlerParams): CommandResult => {
    if (params.includes("--help")) {
      return this.help();
    }
    state.terminal = [];
    state.activeIndex = -1;
    state.deep = 0;
    state.clear = true;
    return { result: "" };
  };

  private help = (): CommandResult => {
    return {
      result: "Clear the terminal",
      setResult: true,
    };
  };
}

export default new ClearCommand();
