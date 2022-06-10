import type {
  Command,
  CommandHandlerParams,
  CommandResult,
} from "../types/command.type";

const maths = {
  "+": (a: number, b: number): number => a + b,
  "-": (a: number, b: number): number => a - b,
  "*": (a: number, b: number): number => a * b,
  "/": (a: number, b: number): number => a / b,
};

class MathCommand implements Command {
  main = ({ input, params }: CommandHandlerParams): CommandResult => {
    let secondNumber: number | undefined;
    let operator: string | undefined;
    params.forEach((param: string) => {
      if (param.match(/^[0-9]+$/)) {
        secondNumber = +param;
      } else if (param.match(/[+\-*/]/)) {
        operator = param;
      }
    });
    const firstNumber = +input.value.split(" ")[0];
    if (
      secondNumber &&
      firstNumber &&
      operator &&
      Object.keys(maths).includes(operator)
    ) {
      // @ts-ignore
      const result = maths[operator](firstNumber, secondNumber);
      return { result: result.toString(), setResult: true };
    }
    return { result: "" };
  };
}

export default new MathCommand();
