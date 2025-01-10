import {IFillInGaps} from "@t/pages/fill-in-gap";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IFillInGap extends IFillInGaps { }

export type FillInGapStatus = "start" | "test" | "result" | "end";

export interface IFillInGapCrossWindow {
    setStatus: (status: FillInGapStatus) => void;
}

export interface IFIGChangeAnswer {
    setAnswer: (status: string) => void;
}

export interface IFIGNextQuestion {
    handleNextQuestion: () => void;
}
