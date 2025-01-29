import {
  IFIGChangeAnswer,
  IFIGNextQuestion,
} from "@t/components/fig/fill-in-gap";
import {IChangeTestStatuses, IMenuProp} from "@t/root";


export interface IFIGTestWindow extends
  IChangeTestStatuses,
  IFIGChangeAnswer,
  IFIGNextQuestion
{
  answer: string;
  dish: IMenuProp["menu"][number];
  questionNumber: number;
  menuLength: number;

}
