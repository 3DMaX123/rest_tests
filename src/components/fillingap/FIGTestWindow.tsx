import AnimOpc from "@anim/AnimOpc";
import React, {FC} from "react";
import MainWindow from "@comp/MainWindow";
import styles from "@s/components/fig/fig-test-window.module.css";
import FIGTest from "@comp/fillingap/FIGTest";
import {IFIGTestWindow} from "@t/components/fig-test-window";
import {cn} from "@ut/shadcn";

const FIGTestWindow: FC<IFIGTestWindow> = ({
  answer,
  setAnswer,
  status,
  setStatus,
  dish,
  handleNextQuestion,
}) => {
  const changeQuestion = () => {
    setStatus("result");
  };

  return (
    <AnimOpc >
      <MainWindow
        className={cn(styles.mainWindow, "mainWindowStandard")}
        header='Заповни пропуски'
        subHeader='Зпираючись на опис страви чи напою введи назву у текстовому полі'>
        <FIGTest
          handleNextQuestion={handleNextQuestion}
          answer={answer}
          setAnswer={setAnswer}
          status={status}
          changeQuestion={changeQuestion}
          dish={dish}
        />
      </MainWindow>
    </AnimOpc>
  );
};

FIGTestWindow.displayName = "FIGTestWindow";

export default FIGTestWindow;
