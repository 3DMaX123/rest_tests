import {IFIGTestWindowsHOC} from "@t/components/fig-test-window";

export interface IFIGTestProps extends IFIGTestWindowsHOC {
    // dish: IFillInGaps["menus"][number];
    changeQuestion: () => void;
    // status: FillInGapStatus;
    // answer: string;
    // setAnswer: SetStateAction<string>;
}
