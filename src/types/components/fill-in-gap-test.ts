import { IFillInGaps } from "@t/pages/fill-in-gap";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IFillInGap extends IFillInGaps { }

export type FillInGapStatus = "start" | "test" | "result" | "end";