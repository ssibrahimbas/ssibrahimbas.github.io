export type InputType = {
  value: string;
  finished: boolean;
  result: string;
  resultClass?: string;
  children?: Array<QuestionAnswerType>;
  prevCommand?: string;
};

export type QuestionAnswerType = {
  question: string;
  answer: string;
  finished: boolean;
  result?: string;
};
