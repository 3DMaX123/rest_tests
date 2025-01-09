
import { SetStateAction } from "@t/root";
import { FillInGapStatus } from "@t/components/fill-in-gap-test";

export interface IFigStart {
    status: FillInGapStatus;
    setStatus: SetStateAction<FillInGapStatus>;
}