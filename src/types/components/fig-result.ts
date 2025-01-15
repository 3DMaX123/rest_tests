import {IFillInGaps} from "@t/pages/fill-in-gap";
import {IFIGNextQuestion} from "@t/components/fill-in-gap";

export type IDisplay = "result" | "hint";

export interface IFIGResult extends IFIGNextQuestion {
    answer: string;
    questionNumber: number;
    menuLength: number;
    dish: IFillInGaps["menu"][number];
}

export interface IFIGResultLOC {
    handleChangeDisplay: (changeTo: IDisplay) => void;
    triggerNextQuestion: () => void;
}
