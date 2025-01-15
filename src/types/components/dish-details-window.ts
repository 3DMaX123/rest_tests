import {IFillInGaps} from "@t/pages/fill-in-gap";
import {IFIGResultLOC} from "@t/components/fig-result";

export interface IDishDetailsWindow extends IFIGResultLOC {
    dish: IFillInGaps["menu"][number];
}
