import {IFillInGaps} from "@t/pages/fill-in-gap";
import {IFIGResultCrossLOC} from "@t/components/fig-result";

export interface IFIGResultExplainWindow extends IFIGResultCrossLOC {
    dish: IFillInGaps["menu"][number];
}
