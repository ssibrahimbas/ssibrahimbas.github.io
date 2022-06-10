import type {
  Command,
  CommandHandlerParams,
  CommandResult,
} from "../types/command.type";

class NotFoundCommand implements Command {
  main = ({ input }: CommandHandlerParams): CommandResult => {
    input.resultClass = "error-text";
    return { result: "Error: Command not found", setResult: true };
  };
}

export default new NotFoundCommand();
