import type {
  Command,
  CommandHandlerParams,
  CommandResult,
} from "../types/command.type";

class SocialCommand implements Command {
  private socialAccounts: Record<string, string> = {
    github: "https://github.com/ssibrahimbas",
    linkedin: "https://linkedin.com/in/ssibrahimbas",
    medium: "https://ssibrahimbas.medium.com",
  };
  private socialOptions: Record<string, string> = {
    "--open": "Open in new tab",
  };

  main = ({ input, params }: CommandHandlerParams): CommandResult => {
    if (params.includes("--help") || params.length === 0) return this.help();
    if (params.includes("--open")) {
      const url = this.socialAccounts[params[0]];
      if (url) {
        window.open(url, "_blank");
      } else {
        return this.help();
      }
    } else {
      const param = params[0];
      if (Object.keys(this.socialAccounts).includes(param)) {
        return {
          result: `<a href="${this.socialAccounts[param]}" target="_blank" class="text-link">Click to open ${param} account</a>`,
          setResult: true,
        };
      }
    }
    return this.help();
  };

  private help = (): CommandResult => {
    const message = "Below are all available commands.";
    const options = Object.keys(this.socialAccounts)
      .map((o) => `<li>social ${o}</li>`)
      .join("");
    const _options = Object.keys(this.socialOptions)
      .map((o) => `&nbsp;${o}: ${this.socialOptions[o]}`)
      .join("");
    const result = `${message}<br/>${options}<br/>And below are all available options.<br/>${_options}`;
    return { result, setResult: true };
  };
}

export default new SocialCommand();
