import { IChildren, IClassName } from "@t/root";

export interface IMainWindow extends IChildren, IClassName {
    header?: string;
    subHeader?: string;
}