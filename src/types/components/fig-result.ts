import {IFillInGaps} from "@t/pages/fill-in-gap";
import {IFIGNextQuestion} from "@t/components/fill-in-gap";

export type IDisplay = "result" | "hint";

export interface IFIGResult extends IFIGResultHOC, IFIGNextQuestion {
    answer: string;
}

export interface IFIGResultHOC {
    dish: IFillInGaps["menu"][number];
}

export interface IFIGResultCrossLOC {
    handleChangeDisplay: (changeTo: IDisplay) => void;
    triggerNextQuestion: () => void;
}


export type FIGResultStatus = "correct" | "incorrect";
