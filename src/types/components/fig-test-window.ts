import {
  FillInGapStatus,
  IFIGChangeAnswer,
  IFIGNextQuestion,
  IFillInGapCrossWindow,
} from "@t/components/fill-in-gap";
import {IFillInGaps} from "@t/pages/fill-in-gap";


export interface IFIGTestWindow extends IFillInGapCrossWindow, IFIGTestWindowsHOC { }

export interface IFIGTestWindowsHOC extends IFIGChangeAnswer, IFIGNextQuestion {
    answer: string;
    status: FillInGapStatus;
    dish: IFillInGaps["menus"][number];
}
