import {IFIGTestType} from "@t/components/fill-in-gap";

export interface ICheckListUiProps extends ICheckListUiPropsLOC{
    cookieItems: IFIGTestType;
    onUpdate: IUpdateCheckList;
}

export interface ICheckListUiPropsLOC{
    list: string[][]; // [type, ua]
}

export type IUpdateCheckList = (items: string[]) => void;
