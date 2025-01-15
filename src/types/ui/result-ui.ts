export type ResultUiStatus = "correct" | "incorrect";

export interface IResultUi {
    colors: {
        CORRECT: {
            BG: string,
            TC: string,
        },
        INCORRECT: {
            BG: string,
            TC: string,
        }
    };
    status: ResultUiStatus;
    correctAnswer: string;
}
