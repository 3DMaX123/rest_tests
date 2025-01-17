export interface ISummary {
    correctAns: number;
    incorrectAns: number;
    questionNumber: number;
    allOver: () => void;
}
