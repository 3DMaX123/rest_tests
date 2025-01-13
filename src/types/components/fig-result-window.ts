import {IFIGResultCrossLOC, IFIGResultHOC} from "@t/components/fig-result";

export interface IFIGResultWindow extends IFIGResultHOC, IFIGResultCrossLOC {
    status: "correct" | "incorrect"
}
