import React, {FC} from "react";
import styles from "@s/components/summary.module.css";
import {ISummary} from "@t/components/summary";
import Button from "@ui/Button";

const Summary: FC<ISummary> = ({
  correctAns,
  incorrectAns,
  questionNumber,
  allOver,
}) => {
  return (
    <div className={styles.summery}>
      <p className={styles.correctAnswers}>Правильних відповідей: {correctAns}</p>
      <p className={styles.incorrectAnswers}>Не правильних відповідей: {incorrectAns}</p>
      <p className={styles.questionNumber}>Всього питань: {questionNumber}</p>
      <Button is="button" action={allOver} text="Почати заново" />
    </div>
  );
};

export default Summary;
