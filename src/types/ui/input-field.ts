import { IClassName, SetStateAction } from "@t/root";

export interface IInputFields extends IClassName {
    setValue: SetStateAction<string>;
    value: string;
    placehilder?: string;
}