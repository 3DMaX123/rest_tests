import {IFIGTestType} from "@t/components/fill-in-gap";

export interface ICheckListUiProps{
    cookieItems: IFIGTestType;
    onUpdate: IUpdateCheckList;
    list: string[][]; // [type, ua]
}

export type IUpdateCheckList = (items: string[]) => void;
