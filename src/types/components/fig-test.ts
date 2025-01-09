import { IFillInGaps } from "@t/pages/fill-in-gap";
import { FillInGapStatus } from "./fill-in-gap-test";
import { SetStateAction } from "@t/root";

export interface IFIGTest {
    dish: IFillInGaps["menus"][number];
    changeQuestion: () => void;
    status: FillInGapStatus;
    answer: string;
    setAnswer: SetStateAction<string>;
}