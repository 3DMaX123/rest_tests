import {IGIAnswer, IGIHandleSummaries, IGINextQuestion} from "@t/components/guess-ing/guess-ing";
import {IMenuProp} from "@t/root";

export interface IGIResultProps extends
IGINextQuestion,
IGIHandleSummaries,
IGIAnswer {
    questionNumber: number;
    menuLength: number;
    dish: IMenuProp["menu"][number];
}
