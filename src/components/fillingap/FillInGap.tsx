"use client"

import React, { FC, JSX, useState } from 'react';
import { FillInGapStatus, IFillInGap } from '@t/components/fill-in-gap';
import FIGStart from '@comp/fillingap/FIGStart';
import FIGTestWindow from "@comp/fillingap/FIGTestWindow";
import FIGResult from '@comp/fillingap/FIGResult';

interface GameState {
    status: FillInGapStatus;
    questionNumber: number;
    answer: string;
}

const FillInGap: FC<IFillInGap> = ({ menus }) => {
    const [gameState, setGameState] = useState<GameState>({
        status: 'start',
        questionNumber: 0,
        answer: ''
    });

    const { status, questionNumber, answer } = gameState;
    const currentDish = menus[questionNumber];

    const updateGameState = (newState: Partial<GameState>): void => {
        setGameState(prev => ({ ...prev, ...newState }));
    };

    const handleNextQuestion = (): void => {
        updateGameState({
            questionNumber: questionNumber + 1,
            status: 'test',
            answer: ''
        });
    };

    const renderGameState = (): JSX.Element | null => {
        const states = {
            start: <FIGStart
                setStatus={(status) => updateGameState({ status })}
            />,
            test: <FIGTestWindow
                handleNextQuestion={handleNextQuestion}
                answer={answer}
                setAnswer={(answer) => updateGameState({ answer })}
                status={status}
                setStatus={(status) => updateGameState({ status })}
                dish={currentDish}
            />,
            result: <FIGResult
                handleNextQuestion={handleNextQuestion}
                dish={currentDish}
                answer={answer}
            />
        };

        return states[status as keyof typeof states] || null;
    };

    return <div>{renderGameState()}</div>;
};

FillInGap.displayName = 'FillInGap';


export default FillInGap