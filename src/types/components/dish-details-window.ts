import {IMenuProp} from "@t/root";

export type DDChangeDisplayProps = "result" | "hint";

export interface IDishDetailsWindow {
    dish: IMenuProp["menu"][number];
    variant: "hint";
    handleChangeDisplay: (changeTo: DDChangeDisplayProps) => void;
    triggerNextQuestion: () => void;
}

export interface IDishDetailsBestiary {
    dish: IMenuProp["menu"][number];
    variant: "bestiary";
    handleChangeDisplay?: never;
    triggerNextQuestion?: never;
}

export type IDishDetailsProps = IDishDetailsBestiary | IDishDetailsWindow;
