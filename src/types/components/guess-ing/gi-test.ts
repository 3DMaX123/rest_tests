import {IChangeTestStatuses, IMenuProp} from "@t/root";
import {IGIChangeAnswer, IGINextQuestion} from "./guess-ing";

export interface IGITestProps extends
    IGINextQuestion,
    IChangeTestStatuses,
    IGIChangeAnswer
 {
    dish: IMenuProp["menu"][number];
    questionNumber: number;
    menuLength: number;
}
