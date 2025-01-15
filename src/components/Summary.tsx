import React, {FC} from "react";
import AnimOpc from "@anim/AnimOpc";
import MainWindow from "@comp/MainWindow";
import styles from "@s/components/summary.module.css";
import {ISummary} from "@t/components/summary";
import Button from "../ui/Button";
import {links} from "@c/links";

const Summary: FC<ISummary> = ({
  correctAns,
  incorrectAns,
  questionNumber,
}) => {
  return (
    <AnimOpc>
      <MainWindow
        className={"mainWindowStandard"}
        header="Вітаю! Ось і кінець теста"
        subHeader="тут можна підбити підсумки та почати знову">
        <div className={styles.summery}>
          <p className={styles.correctAnswers}>Правильних відповідей: {correctAns}</p>
          <p className={styles.incorrectAnswers}>Не правильних відповідей: {incorrectAns}</p>
          <p className={styles.questionNumber}>Всього питань: {questionNumber}</p>
          <Button is="link" to={links.LFillGap} text="Почати заново" />
        </div>
      </MainWindow>
    </AnimOpc>
  );
};

export default Summary;
