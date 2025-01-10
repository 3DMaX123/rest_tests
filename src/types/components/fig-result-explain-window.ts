import {IFillInGaps} from "@t/pages/fill-in-gap";
import {IFIGResultCrossLOC} from "@t/components/fig-result";
import {IFIGNextQuestion} from "@t/components/fill-in-gap";

export interface IFIGResultExplainWindow extends IFIGResultCrossLOC, IFIGNextQuestion {
    dish: IFillInGaps["menus"][number];
}
