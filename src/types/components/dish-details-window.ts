import {IFillInGaps} from "@t/pages/fill-in-gap";
import {IDisplay} from "@t/components/fig/fig-result";

export interface IDishDetailsWindow {
    dish: IFillInGaps["menu"][number];
    variant: "hint";
    handleChangeDisplay: (changeTo: IDisplay) => void;
    triggerNextQuestion: () => void;
}

export interface IDishDetailsBestiary {
    dish: IFillInGaps["menu"][number];
    variant: "bestiary";
    handleChangeDisplay?: never;
    triggerNextQuestion?: never;
}

export type IDishDetailsProps = IDishDetailsBestiary | IDishDetailsWindow;
