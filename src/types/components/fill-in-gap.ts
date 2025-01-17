import {IFillInGaps} from "@t/pages/fill-in-gap";

export interface IFillInGap extends IFillInGaps {
    cookies: string | undefined;
}

export type FillInGapStatus = "start" | "test" | "result" | "end";

export interface IFillInGapCrossWindow {
    setStatus: (status: FillInGapStatus) => void;
}

export interface IFIGChangeAnswer {
    setAnswer: (status: string) => void;
}

export interface IFIGNextQuestion {
    handleNextQuestion: (action: IFIGGameUpdateProps) => void;
}

export type IFIGTestType = string[];

export interface IFIGGameStateProps {
    status: FillInGapStatus;
    answer: string;
    correctAnswer: number;
    incorrectAnswer: number;
}

export type IFIGGameUpdateProps =
  | { type: "next" }
  | { type: "correct" }
  | { type: "incorrect" }
  | { type: "end" };
