import type { QuestionAnswerType } from "@/types/input.type";
import type {
  Command,
  CommandHandler,
  CommandHandlerParams,
  CommandResult,
} from "../types/command.type";

class ContactCommand implements Command {
  main = ({ input, ...params }: CommandHandlerParams): CommandResult => {
    if (params.params.includes("--help") && !input.children)
      return this.help({ input, ...params });
    let index: number = 0;
    if (input.children) {
      index = input.children.length;
    }
    return this.steps[index]({ ...params, input });
  };

  private execFirstStep = ({ input }: CommandHandlerParams): CommandResult => {
    const children: QuestionAnswerType = {
      question: "What is your name?",
      answer: "",
      finished: false,
    };
    return {
      children: children,
      result:
        "Thank you for wanting to contact me.<br/>You can contact me by filling out the form consisting of 4 steps below.<br/><br/>",
      setChildren: true,
      setResult: true,
      nextCommand: "contact",
    };
  };

  private execSecondStep = ({ input }: CommandHandlerParams): CommandResult => {
    const children: QuestionAnswerType = {
      question: "Why do you want to contact?",
      answer: "",
      finished: false,
    };
    input.children![0].finished = true;
    return {
      children: children,
      result: "",
      setChildren: true,
      nextCommand: "contact",
    };
  };

  private execThirdStep = ({ input }: CommandHandlerParams): CommandResult => {
    const children: QuestionAnswerType = {
      question: "What is your email?",
      answer: "",
      finished: false,
    };
    input.children![1].finished = true;
    return {
      children: children,
      result: "",
      setChildren: true,
      nextCommand: "contact",
    };
  };

  private execFourthStep = ({ input }: CommandHandlerParams): CommandResult => {
    const children: QuestionAnswerType = {
      question: "Please enter your message",
      answer: "",
      finished: false,
    };
    input.children![2].finished = true;
    return {
      children: children,
      result: "",
      setChildren: true,
      nextCommand: "contact",
    };
  };

  private finishForm = ({ input }: CommandHandlerParams): CommandResult => {
    input.children![3].finished = true;
    return {
      result:
        "<br/>Thank you for contacting me.<br/>I will get back to you as soon as possible.<br/>",
      setChildResult: true,
      fromUnderground: true,
    };
  };

  private help = ({ input }: CommandHandlerParams): CommandResult => {
    let msg: string =
      "You can contact me with this command.<br/>You will need to fill in the following fields:<br/>";
    msg += ["name", "reason", "email", "message"]
      .map((s) => `&nbsp;&nbsp;${s}`)
      .join("<br/>");
    return {
      result: msg,
      setResult: true,
    };
  };

  private steps: Record<number, CommandHandler> = {
    0: this.execFirstStep,
    1: this.execSecondStep,
    2: this.execThirdStep,
    3: this.execFourthStep,
    4: this.finishForm,
  };
}

export default new ContactCommand();
