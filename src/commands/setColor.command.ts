import { useThemeStore } from "@/stores/theme";
import type {
  Command,
  CommandHandlerParams,
  CommandResult,
} from "../types/command.type";

class SetColorCommand implements Command {
  main = ({ input, options, params }: CommandHandlerParams): CommandResult => {
    if (params.includes("--help")) {
      return this.help();
    }
    if (options["text"]) {
      const themeStore = useThemeStore();
      themeStore.setTextColor(options["text"]);
      return { result: "" };
    }
    return this.help();
  };

  help = (): CommandResult => {
    return { result: "Set the color of the terminal", setResult: true };
  };

  
}

export default new SetColorCommand();
