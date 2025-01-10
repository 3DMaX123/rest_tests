import { IFillInGaps } from "@t/pages/fill-in-gap";
import { IFIGNextQuestion } from "./fill-in-gap";

export interface IFIGResultHOC extends IFIGNextQuestion {
    dish: IFillInGaps["menus"][number];
    answer: string;
}