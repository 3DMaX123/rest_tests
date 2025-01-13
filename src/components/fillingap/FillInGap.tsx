"use client";

import React, {FC, JSX, useState} from "react";
import {IFIGGameStateProps, IFIGGameUpdateProps, IFillInGap} from "@t/components/fill-in-gap";
import styles from "@s/components/fig/fill-in-gap.module.css";
import FIGStart from "@comp/fillingap/FIGStart";
import FIGTestWindow from "@comp/fillingap/FIGTestWindow";
import FIGResult from "@comp/fillingap/FIGResult";

const FillInGap: FC<IFillInGap> = ({menu}) => {
  const [gameState, setGameState] = useState<IFIGGameStateProps>({
    status: "start",
    questionNumber: 0,
    answer: "",
    correctAnswer: 0,
    incorrectAnswer: 0,
  });
  const {
    status,
    questionNumber,
    answer,
    correctAnswer,
    incorrectAnswer,
  } = gameState;
  const currentDish = menu[questionNumber];

  const updateGameState = (newState: Partial<IFIGGameStateProps>): void => {
    setGameState((prev) => ({...prev, ...newState}));
  };

  const handleGameUpdate = (action: IFIGGameUpdateProps): void => {
    switch (action.type) {
      case "next":
        updateGameState({
          questionNumber: questionNumber + 1,
          status: "test",
          answer: "",
        });
        break;
      case "correct":
        updateGameState({
          correctAnswer: correctAnswer + 1,
        });
        break;
      case "incorrect":
        updateGameState({
          incorrectAnswer: incorrectAnswer + 1,
        });
        break;
    }
  };

  const renderGameState = (): JSX.Element | null => {
    const states = {
      start: <FIGStart
        setStatus={(status) => updateGameState({status})}
      />,
      test: <FIGTestWindow
        handleNextQuestion={handleGameUpdate}
        answer={answer}
        setAnswer={(answer) => updateGameState({answer})}
        status={status}
        setStatus={(status) => updateGameState({status})}
        dish={currentDish}
      />,
      result: <FIGResult
        handleNextQuestion={handleGameUpdate}
        dish={currentDish}
        answer={answer}
      />,
    };

    return states[status as keyof typeof states] || null;
  };

  return (
    <div className={styles.main}>
      {renderGameState()}
    </div>
  );
};

FillInGap.displayName = "FillInGap";

export default FillInGap;
