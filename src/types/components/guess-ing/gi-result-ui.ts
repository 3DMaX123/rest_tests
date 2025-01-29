import {DDChangeDisplayProps} from "@t/components/dish-details-window";

export interface IGIResultUIProps {
    triggerNextQuestion: () => void;
    handleDisplayChange: (changeTo: DDChangeDisplayProps) => void;
    ingredients: string[];
    arrayOfCorrectAnswers: string[];
    amountOfCorrectAnswers: number;
    amountOfIncorrectAnswers: number;
}
