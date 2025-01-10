import {ChangeEvent} from "react";
import {IClassName} from "@t/root";

export interface IInputFieldProps extends IClassName {
    setValue: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeHolder?: string;
    triggerInput?: () => void;
}
