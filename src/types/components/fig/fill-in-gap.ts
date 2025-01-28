import {ICommonTestStatuses, IMenuProp} from "@t/root";

export interface IFillInGap extends IMenuProp {
    cookies: string | undefined;
}

export interface IFIGChangeAnswer {
    setAnswer: (status: string) => void;
}

export interface IFIGNextQuestion {
    handleNextQuestion: (action: IFIGGameUpdateProps) => void;
}

export type IFIGTestType = string[];

export interface IFIGGameStateProps {
    status: ICommonTestStatuses;
    answer: string;
    correctAnswer: number;
    incorrectAnswer: number;
}

export type IFIGGameUpdateProps =
  | { type: "next" }
  | { type: "correct" }
  | { type: "incorrect" }
  | { type: "end" };
