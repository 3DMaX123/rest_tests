import {coolCorrectPhrases, coolIncorrectPhrases} from "@c/cool-pfrases";
import Button from "@ui/Button";
import {randomNumber} from "@ut/generateRandom";
import styles from "@s/components/fig/fig-result-window.module.css";
import React, {FC} from "react";
import {IFIGResultWindow} from "@t/components/fig-result-window";
import {FIGResultStatus} from "@t/components/fig-result";

const COLORS = {
  CORRECT: {
    BG: "var(--bg-correct-ans)",
    TC: "var(--tc-correct-ans)",
  },
  INCORRECT: {
    BG: "var(--bg-incorrect-ans)",
    TC: "var(--tc-incorrect-ans)",
  },
} as const;


const FIGResultWindow: FC<IFIGResultWindow> = ({
  dish,
  triggerNextQuestion,
  handleChangeDisplay,
  status,
}) => {
  const getResultText = (status: FIGResultStatus): string => {
    const phrases = status === "correct" ? coolCorrectPhrases : coolIncorrectPhrases;
    return phrases[randomNumber(0, phrases.length)];
  };

  const getResultBgColor = (status: FIGResultStatus): string => {
    return status === "correct" ? COLORS.CORRECT.BG : COLORS.INCORRECT.BG;
  };
  const getResultTcColor = (status: FIGResultStatus): string => {
    return status === "correct" ? COLORS.CORRECT.TC : COLORS.INCORRECT.TC;
  };

  const handleChangeToHint = () => {
    handleChangeDisplay("hint");
  };

  return (
    <>
      <div className={styles.text}>
        <p
          className={styles.correctIncorrect}
          style={{
            backgroundColor: getResultBgColor(status),
            color: getResultTcColor(status),
          }}>
          {getResultText(status)}
        </p>
        <p className={styles.rightAnswer}>Правильна відповідь: {dish.name}</p>
      </div>

      <div className={styles.buttons}>
        <Button
          className='bg-white'
          is='button' action={triggerNextQuestion}
          text="Наступне питання"
          to={false}
        />
        <Button
          className='bg-white'
          is='button'
          action={handleChangeToHint}
          text="Розкажи більше про цю страву"
          to={false}
        />
      </div>
    </>
  );
};

export default FIGResultWindow;
