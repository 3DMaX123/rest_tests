import {IClassName} from "@t/root";

export type IButton = (IButtonLink | IButtonComeBack | IButtonButton) & IButtonBase & IClassName

export interface IButtonBase {
    text: string;
}

interface IButtonLink {
    to: string;
    is: "link";
    action: false;
}

interface IButtonButton {
    to: false;
    is: "button";
    action: () => void;
}

interface IButtonComeBack {
    to: string;
    is: "comeBack";
    action: false;
}
