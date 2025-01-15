"use client";

import React, {FC, JSX, useState} from "react";
import {IFIGGameStateProps, IFIGGameUpdateProps, IFillInGap} from "@t/components/fill-in-gap";
import styles from "@s/components/fig/fill-in-gap.module.css";
import FIGStart from "@comp/fillingap/FIGStart";
import FIGTest from "@comp/fillingap/FIGTest";
import FIGResult from "@comp/fillingap/FIGResult";
import Summary from "@comp/Summary";

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

  // const resetStats = (): void => {
  //   updateGameState({
  //     correctAnswer: 0,
  //     incorrectAnswer: 0,
  //     questionNumber: 0,
  //   });
  // };

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
      case "end":
        updateGameState({
          status: "end",
        });
    }
  };

  const renderGameState = (): JSX.Element | null => {
    const states = {
      start: <FIGStart
        setStatus={(status) => updateGameState({status})}
      />,
      test: <FIGTest
        handleNextQuestion={handleGameUpdate}
        answer={answer}
        setAnswer={(answer) => updateGameState({answer})}
        setStatus={(status) => updateGameState({status})}
        dish={currentDish}
        questionNumber={questionNumber}
        menuLength={menu.length}
      />,
      result: <FIGResult
        questionNumber={questionNumber}
        menuLength={menu.length}
        handleNextQuestion={handleGameUpdate}
        dish={currentDish}
        answer={answer}
      />,
      end: <Summary
        correctAns={correctAnswer}
        incorrectAns={incorrectAnswer}
        questionNumber={menu.length}
      />,
    };

    return states[status as keyof typeof states] || null;
  };

  return (
    <div className={styles.main}>
      {(status === "test" || status === "result") &&
        <p className={styles.countDown}>{questionNumber + 1}/{menu.length}</p>
      }
      {renderGameState()}
    </div>
  );
};

FillInGap.displayName = "FillInGap";

export default FillInGap;
