import type {
  Command,
  CommandHandlerParams,
  CommandResult,
} from "../types/command.type";

class HelpCommand implements Command {
  private commands: Array<string> = [
    "clear",
    "set-color",
    "profile",
    "social",
    "contact",
    "theme",
  ];
  main = ({ state, params }: CommandHandlerParams): CommandResult => {
    const message = "Below are all available commands.";
    const commands = this.commands.map((c) => `<li>${c}</li>`).join("");
    const result = `${message}<br/>${commands}<br/>If you want more detailed information about a command, type <i>command --help</i>`;
    return { result, setResult: true };
  };
}

export default new HelpCommand();
