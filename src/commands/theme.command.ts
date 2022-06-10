import { useThemeStore } from "@/stores/theme";
import type {
  Command,
  CommandHandlerParams,
  CommandResult,
} from "@/types/command.type";

type ThemeCommandType = {
  name: string;
  options?: Array<string>;
  func: (option?: string) => string;
};

class ThemeCommand implements Command {
  extraCommands: Array<string> = ["itemsatis", "default"];

  main = ({ input, options, params }: CommandHandlerParams): CommandResult => {
    if (params.includes("--help")) return this.help();
    const themeStore = useThemeStore();
    const [theme, option] = params;
    const command = this.commands.find((c) => c.name === theme);
    if (command) {
      themeStore.setBackgroundColor(command.func(option));
      return { result: `${theme} theme successfully saved`, setResult: true };
    }
    return this.help();
  };

  private help = (): CommandResult => {
    let text: string = "You can try the following themes<br/><br/>";
    this.commands.forEach((command) => {
      text += ` > ${command.name} `;
      if (command.options) {
        text +=
          "<br/>&nbsp;&nbsp;&nbsp;&nbsp;<i>options: " +
          command.options.join(", ") +
          "</i>";
      }
      text += "<br/>";
    });
    text += "<br/>example code: <code>theme itemsatis --dark</code>";
    return { result: text, setResult: true };
  };

  private getItemsatisTheme = (option: string = "default"): string => {
    if (option == "--dark") {
      return this.itemsatisDarkBackgroundTheme();
    }
    return this.itemsatisDefaultBackgroundTheme();
  };

  private itemsatisDefaultBackgroundTheme = (): string => {
    return "url(https://cdn.itemsatis.com/uploads/admin/EuUB8yhiFaZreIo1YTXCWPfm7.png) #383b50";
  };

  private itemsatisDarkBackgroundTheme = (): string => {
    return "url(https://cdn.itemsatis.com/uploads/admin/EuUB8yhiFaZreIo1YTXCWPfm7.png) #181822";
  };

  private defaultTheme = (): string => {
    return "default";
  };

  private themes: Record<string, () => string> = {
    itemsatisDefault: this.itemsatisDefaultBackgroundTheme,
    itemsatisDark: this.itemsatisDarkBackgroundTheme,
    default: this.defaultTheme,
  };

  private commands: Array<ThemeCommandType> = [
    {
      name: "itemsatis",
      options: ["--default", "--dark"],
      func: this.getItemsatisTheme,
    },
    {
      name: "default",
      func: this.defaultTheme,
    },
  ];
}

export default new ThemeCommand();
