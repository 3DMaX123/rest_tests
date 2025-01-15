import React, {FC} from "react";
import styles from "@s/ui/result-ui.module.css";
import {randomNumber} from "@ut/generateRandom";
import {coolCorrectPhrases, coolIncorrectPhrases} from "@c/cool-pfrases";
import {IResultUi, ResultUiStatus} from "@t/ui/result-ui";


const ResultUi: FC<IResultUi> = ({
  colors,
  status,
  correctAnswer,
}) => {
  const getResultText = (status: ResultUiStatus): string => {
    const phrases = status === "correct" ? coolCorrectPhrases : coolIncorrectPhrases;
    return phrases[randomNumber(0, phrases.length)];
  };

  const getResultBgColor = (status: ResultUiStatus): string => {
    return status === "correct" ? colors.CORRECT.BG : colors.INCORRECT.BG;
  };
  const getResultTcColor = (status: ResultUiStatus): string => {
    return status === "correct" ? colors.CORRECT.TC : colors.INCORRECT.TC;
  };

  return (
    <div className={styles.text}>
      <p
        className={styles.correctIncorrect}
        style={{
          backgroundColor: getResultBgColor(status),
          color: getResultTcColor(status),
        }}>
        {getResultText(status)}
      </p>
      <p className={styles.rightAnswer}>Правильна відповідь: {correctAnswer}</p>
    </div>
  );
};

export default ResultUi;
