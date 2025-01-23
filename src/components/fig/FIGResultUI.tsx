import Button from "@ui/Button";
import styles from "@s/components/fig/fig-result-ui.module.css";
import React, {FC} from "react";
import {IFIGResultUi} from "@t/components/fig/fig-result-ui";
import ResultUi from "@ui/ResultUi";
import {RESULT_TEXT_COLORS} from "@c/constants";

const FIGResultUi: FC<IFIGResultUi> = ({
  correctAnswer,
  triggerNextQuestion,
  handleChangeDisplay,
  status,
}) => {
  const handleChangeToHint = () => {
    handleChangeDisplay("hint");
  };

  return (
    <div className={styles.figResultUi}>
      <ResultUi
        colors={RESULT_TEXT_COLORS}
        status={status}
        correctAnswer={correctAnswer}
      />
      <div className={styles.buttons}>
        <Button
          className='bg-white'
          is='button' action={triggerNextQuestion}
          text="Наступне питання"
        />
        <Button
          className='bg-white'
          is='button'
          action={handleChangeToHint}
          text="Розкажи більше про цю страву"
        />
      </div>
    </div>
  );
};

FIGResultUi.displayName = "FIGResultUi";

export default FIGResultUi;
