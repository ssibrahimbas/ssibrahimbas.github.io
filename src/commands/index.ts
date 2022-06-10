import ClearCommand from "./clear.command";
import MathCommand from "./math.command";
import SetColorCommand from "./setColor.command";
import SocialCommand from "./social.command";
import ProfileCommand from "./profile.command";
import NotFoundCommand from "./notFound.command";
import ContactCommand from "./contact.command";
import ThemeCommand from "./theme.command";
import HelpCommand from "./help.command";
import type { Command, CommandResult } from "../types/command.type";
import type { InputType } from "@/types/input.type";
import type { State } from "@/types/state.type";

export class Commands {
  private commands: Record<string, Command> = {
    default: NotFoundCommand,
    clear: ClearCommand,
    math: MathCommand,
    "set-color": SetColorCommand,
    "--help": HelpCommand,
    profile: ProfileCommand,
    social: SocialCommand,
    contact: ContactCommand,
    theme: ThemeCommand,
  };

  private checkMathCommand = (params: Array<string>): boolean => {
    const mathCommands = ["+", "-", "*", "/"];
    return mathCommands.includes(params[0]) && params.length === 2;
  };

  execCommand = (input: InputType, state: State): CommandResult => {
    if (
      input.finished &&
      input.prevCommand &&
      this.commands[input.prevCommand]
    ) {
      return this.commands[input.prevCommand].main({
        input,
        options: {},
        params: [],
        state,
      });
    }

    const args = input.value.split(" ");
    const options: Record<string, string> = {};
    const params: Array<string> = [];
    const command = args[0];
    args.shift();
    args.forEach((arg: string) => {
      if (arg.startsWith("--") && arg.includes("=")) {
        const [key, value] = arg.split("=");
        options[key.slice(2, key.length)] = value;
      } else {
        params.push(arg);
      }
    });

    if (this.commands[command]) {
      return this.commands[command].main({ input, options, params, state });
    } else {
      if (this.checkMathCommand(params)) {
        return this.commands.math.main({ input, options, params, state });
      }
      return this.commands.default.main({ input, options, params, state });
    }
  };

  calculateAutocomplete = (input: InputType, state: State): void => {
    let result: string = "";
    const [cmd, childCmd] = input.value.split(" ");
    const childRes = this.calculateChildAutocomplete({ cmd, childCmd });
    if (childRes.success) result = childRes.result!;
    else {
      const baseRes = this.calculateBaseAutocomplete({ cmd });
      if (baseRes.success) result = baseRes.result!;
    }
    state.autocompletedKey = result;
  };

  private calculateChildAutocomplete = ({
    cmd,
    childCmd,
  }: {
    cmd: string;
    childCmd?: string;
  }): { success: boolean; result?: string } => {
    const res: { success: boolean; result?: string } = { success: false };
    if (!childCmd) return res;
    if (this.commands[cmd] && !!this.commands[cmd].extraCommands) {
      this.commands[cmd].extraCommands!.forEach((ec) => {
        if (
          ec.length > childCmd.length &&
          ec.toLocaleLowerCase().includes(childCmd.toLocaleLowerCase())
        ) {
          res.success = true;
          res.result = ec;
        }
      });
    }
    return res;
  };

  private calculateBaseAutocomplete = ({
    cmd,
  }: {
    cmd: string;
  }): { success: boolean; result?: string } => {
    const res: { success: boolean; result?: string } = { success: false };
    const commands = { ...this.commands };
    delete commands.default;
    const cmds = Object.keys(commands);
    cmds.forEach((_cmd) => {
      if (
        _cmd.length > cmd.length &&
        _cmd.toLocaleLowerCase().includes(cmd.toLocaleLowerCase())
      ) {
        res.success = true;
        res.result = _cmd;
      }
    });
    return res;
  };
}

const commands = new Commands();

export const useCommands = (): Commands => {
  return commands;
};
