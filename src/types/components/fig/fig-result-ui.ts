import {IFIGResultLOC} from "@t/components/fig/fig-result";

export interface IFIGResultUi extends IFIGResultLOC {
    status: "correct" | "incorrect";
    correctAnswer: string;
}
