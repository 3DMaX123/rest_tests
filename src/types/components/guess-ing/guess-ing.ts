import {ICommonTestStatuses, IMenuProp} from "@t/root";

export interface IGIProps extends IMenuProp {
    cookies: string | undefined;
}

export interface IGIAnswer {
    answer: string[];
}

export interface IGIStateProps extends IGIAnswer{
    status: ICommonTestStatuses;
    correctAnswer: number;
    incorrectAnswer: number;
}

export interface IGINextQuestion {
    handleNextQuestion: (action: IGIGameUpdateProps) => void;
}

export interface IGIHandleSummaries {
    handleSummaries: (action: IGIHandleAnswersProps) => void;
}

export interface IGIChangeAnswer {
    setAnswer: (status: string[]) => void;
}

export type IGIGameUpdateProps =
  | { type: "next" }
  | { type: "end" };

export type IGIHandleAnswersProps =
    {
        type: "correct";
        amount: number;
    } |
    {
        type: "incorrect";
        amount: number;
    }
