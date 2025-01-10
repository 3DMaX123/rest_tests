import {IClassName, SetStateAction} from "@t/root";

export interface IInputFieldProps extends IClassName {
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeHolder?: string;
    triggerInput?: () => void;
}
