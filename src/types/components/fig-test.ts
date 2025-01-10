import { FillInGapStatus, IFIGTestAndResultWindow } from "@t/components/fill-in-gap";
import { IFIGTestWindowsHOC } from "@t/components/fig-test-window";

export interface IFIGTestProps extends IFIGTestAndResultWindow, IFIGTestWindowsHOC {
    // dish: IFillInGaps["menus"][number];
    changeQuestion: () => void;
    // status: FillInGapStatus;
    // answer: string;
    // setAnswer: SetStateAction<string>;
}