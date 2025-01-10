import {IFillInGaps} from "@t/pages/fill-in-gap";
import {IFIGNextQuestion} from "@t/components/fill-in-gap";
import {SetStateAction} from "@t/root";

export type IDisplay = "result" | "hint";

export interface IFIGResultHOC extends IFIGNextQuestion {
    dish: IFillInGaps["menus"][number];
    answer: string;
}

export interface IFIGResultCrossLOC {
    handleChangeDisplay: (changeTo: IDisplay) => void;
}
