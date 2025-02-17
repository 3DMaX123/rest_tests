"use client";

import React, {FC, JSX, useEffect, useState} from "react";
import {IFIGGameStateProps, IFIGGameUpdateProps, IFillInGap} from "@t/components/fig/fill-in-gap";
import styles from "@s/components/fig/fill-in-gap.module.css";
import Start from "@r/src/components/Start";
import FIGTest from "@r/src/components/fig/FIGTest";
import FIGResult from "@r/src/components/fig/FIGResult";
import Summary from "@comp/Summary";
import AnimOpc from "@anim/AnimOpc";
import MainWindow from "@comp/MainWindow";
import {HEADERS} from "@c/constants";
import {cn} from "@ut/shadcn";

const FillInGap: FC<IFillInGap> = ({
  menu,
  cookies,
}) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [gameState, setGameState] = useState<IFIGGameStateProps>({
    status: "start",
    answer: "",
    correctAnswer: 0,
    incorrectAnswer: 0,
  });
  const {
    status,
    answer,
    correctAnswer,
    incorrectAnswer,
  } = gameState;

  const updateGameState = (newState: Partial<IFIGGameStateProps>): void => {
    setGameState((prev) => ({...prev, ...newState}));
  };

  useEffect(() => {
    updateGameState({
      correctAnswer: 0,
      incorrectAnswer: 0,
    });
    setQuestionNumber(0);
  }, [cookies]);

  const allOver = () => {
    updateGameState({
      correctAnswer: 0,
      incorrectAnswer: 0,
      status: "start",
      answer: "",
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

  const handleGameUpdate = (action: IFIGGameUpdateProps): void => {
    switch (action.type) {
      case "next":
        updateGameState({
          status: "test",
          answer: "",
        });
        setQuestionNumber((prev) => prev + 1);
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
      start: <Start
        setStatus={(status) => updateGameState({status})}
      />,
      test: <FIGTest
        handleNextQuestion={handleGameUpdate}
        answer={answer}
        setAnswer={(answer) => updateGameState({answer})}
        setStatus={(status) => updateGameState({status})}
        dish={questionNumber > menu.length ? menu[0] : menu[questionNumber]}
        questionNumber={questionNumber}
        menuLength={menu.length}
      />,
      result: <FIGResult
        questionNumber={questionNumber}
        menuLength={menu.length}
        handleNextQuestion={handleGameUpdate}
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
              styles.fillInGap,
          )}
          header={HEADERS.fig[status].header}
          subHeader={HEADERS.fig[status].subHeader}
        >
          {renderGameState()}
        </MainWindow>
      </AnimOpc>
    </div>
  );
};

FillInGap.displayName = "FillInGap";

export default FillInGap;
