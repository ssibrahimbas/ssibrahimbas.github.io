import type {
  Command,
  CommandHandlerParams,
  CommandResult,
} from "../types/command.type";

class ProfileCommand implements Command {
  private profileOptions: Array<string> = [
    "--name",
    "--age",
    "--city",
    "--gender",
    "--country",
    "--all",
  ];
  private profile: Record<string, string> = {
    name: "Sami Salih İbrahimbaş",
    age: "20",
    city: "Sakarya",
    gender: "Male",
    country: "Turkey",
  };

  main = ({ input, params }: CommandHandlerParams): CommandResult => {
    if (params.includes("--help") || params.length === 0) return this.help();
    let param: string = "--all";
    params.forEach((p: string) => {
      if (this.profileOptions.includes(p)) {
        param = p;
      }
    });
    param = param.slice(2, param.length);
    if (param === "all")
      return { result: this.printProfile(), setResult: true };
    return { result: this.profile[param], setResult: true };
  };

  private help = (): CommandResult => {
    const message = "Below are all available options.";
    const options = this.profileOptions
      .map((o) => `<li>profile ${o}</li>`)
      .join("");
    const result = `${message}<br/>${options}`;
    return { result, setResult: true };
  };

  private printProfile = (): string => {
    return Object.keys(this.profile)
      .map((k) => `&nbsp;${k}: ${this.profile[k]}`)
      .join("<br/>");
  };
}

export default new ProfileCommand();
