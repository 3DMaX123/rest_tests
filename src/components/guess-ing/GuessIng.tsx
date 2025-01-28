"use client";

import React, {FC, JSX, useEffect, useState} from "react";
import {cn} from "@ut/shadcn";
import AnimOpc from "@anim/AnimOpc";
import MainWindow from "@comp/MainWindow";
import {HEADERS} from "@c/constants";
import {
  IGIGameUpdateProps,
  IGIHandleAnswersProps,
  IGIProps,
  IGIStateProps,
} from "@t/components/guess-ing/guess-ing";
import styles from "@s/pages/guess-ing.module.css";
import Summary from "../Summary";
import Start from "../Start";
import GIResult from "./GIResult";
import GITest from "./GITest";

const GuessIng: FC<IGIProps> = ({
  menu,
  cookies,
}) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [gameState, setGameState] = useState<IGIStateProps>({
    status: "start",
    answer: [],
    correctAnswer: 0,
    incorrectAnswer: 0,
  });
  const {
    status,
    correctAnswer,
    incorrectAnswer,
    answer,
  } = gameState;

  const updateGameState = (newState: Partial<IGIStateProps>): void => {
    setGameState((prev) => ({...prev, ...newState}));
  };

  useEffect(() => {
    updateGameState({
      answer: [],
      correctAnswer: 0,
      incorrectAnswer: 0,
    });
    setQuestionNumber(0);
  }, [cookies]);

  const allOver = () => {
    updateGameState({
      status: "start",
      answer: [],
      correctAnswer: 0,
      incorrectAnswer: 0,
    });
    setQuestionNumber(0);
  };

  // asking when user wants to leave
  useEffect(() => {
    const unloadCallback = (
        event: {
        preventDefault: () => void;
        returnValue: string;
        },
    ) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    // eslint-disable-next-line no-undef
    window.addEventListener("beforeunload", unloadCallback);
    // eslint-disable-next-line no-undef
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const handleGameUpdate = (action: IGIGameUpdateProps): void => {
    switch (action.type) {
      case "next":
        updateGameState({
          status: "test",
        });
        setQuestionNumber((prev) => prev + 1);
        break;
      case "end":
        updateGameState({
          status: "end",
        });
    }
  };

  const handleSummaries = (action: IGIHandleAnswersProps) => {
    switch (action.type) {
      case "correct":
        updateGameState({
          correctAnswer: correctAnswer + action.amount,
        });
        break;
      case "incorrect":
        updateGameState({
          correctAnswer: correctAnswer + action.amount,
        });
        break;
      default:
        break;
    }
  };

  const renderGameState = (): JSX.Element | null => {
    const states = {
      start: <Start
        setStatus={(status) => updateGameState({status})}
      />,
      test: <GITest
        handleNextQuestion={handleGameUpdate}
        setStatus={(status) => updateGameState({status})}
        setAnswer={(answer) => updateGameState({answer})}
        dish={questionNumber > menu.length ? menu[0] : menu[questionNumber]}
        questionNumber={questionNumber}
        menuLength={menu.length}
      />,
      result: <GIResult
        handleNextQuestion={handleGameUpdate}
        handleSummaries={handleSummaries}
        questionNumber={questionNumber}
        menuLength={menu.length}
        dish={menu[questionNumber]}
        answer={answer}
      />,
      end: <Summary
        correctAns={correctAnswer}
        incorrectAns={incorrectAnswer}
        questionNumber={menu.length}
        allOver={allOver}
      />,
    };

    return states[status as keyof typeof states] || null;
  };

  const getClassMainWindow = () => {
    switch (status) {
      case "test":
        return styles.testGap;
      case "end":
        return styles.endGap;
      default:
        return;
    }
  };

  return (
    <div className={styles.main}>
      {(status === "test" || status === "result") &&
        <p className={styles.countDown}>{questionNumber + 1}/{menu.length}</p>
      }
      <AnimOpc className={styles.mainWindow}>
        <MainWindow
          className={cn(
              getClassMainWindow(),
              styles.guessIng,
          )}
          header={HEADERS.gi[status].header}
          subHeader={HEADERS.gi[status].subHeader}
        >
          {renderGameState()}
        </MainWindow>
      </AnimOpc>
    </div>
  );
};

export default GuessIng;
