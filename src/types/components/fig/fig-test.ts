import {
  IFIGChangeAnswer,
  IFIGNextQuestion,
  IFillInGapCrossWindow,
} from "@t/components/fig/fill-in-gap";
import {IFillInGaps} from "@t/pages/fill-in-gap";


export interface IFIGTestWindow extends
IFillInGapCrossWindow,
IFIGChangeAnswer,
IFIGNextQuestion{
  answer: string;
  dish: IFillInGaps["menu"][number];
  questionNumber: number;
  menuLength: number;

}
