import {IFIGTestType} from "@t/components/fill-in-gap";

export interface ICheckListProps{
    selectedItems: IFIGTestType;
    onUpdate: IUpdateCheckList;
    list: string[][]; // [type, ua]
}

export type IUpdateCheckList = (
    item: string,
    action: "delete" | "save"
) => void;
