import { SetStateAction } from "@t/root";
import { FillInGapStatus, IFillInGap } from "@t/components/fill-in-gap-test";

export interface IFIGTestWindow extends IFillInGap {
    answer: string;
    setAnswer: SetStateAction<string>;
    status: FillInGapStatus;
    setQuestionNumber: SetStateAction<number>;
    questionNumber: number;
}