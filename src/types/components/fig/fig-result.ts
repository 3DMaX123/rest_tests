import {IMenuProp} from "@t/root";
import {IFIGNextQuestion} from "@t/components/fig/fill-in-gap";
import {DDChangeDisplayProps} from "@t/components/dish-details-window";

export interface IFIGResult extends IFIGNextQuestion {
    answer: string;
    questionNumber: number;
    menuLength: number;
    dish: IMenuProp["menu"][number];
}

export interface IFIGResultLOC {
    handleChangeDisplay: (changeTo: DDChangeDisplayProps) => void;
    triggerNextQuestion: () => void;
}
