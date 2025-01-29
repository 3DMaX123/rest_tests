import {IChangeTestStatuses, IMenuProp} from "@t/root";
import {IGIChangeAnswer, IGIHandleSummaries, IGINextQuestion} from "./guess-ing";

export interface IGITestProps extends
    IGINextQuestion,
    IChangeTestStatuses,
    IGIChangeAnswer,
    IGIHandleSummaries
 {
    dish: IMenuProp["menu"][number];
    questionNumber: number;
    menuLength: number;
}
