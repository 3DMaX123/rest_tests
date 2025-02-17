import React, {FC, JSX} from "react";
import styles from "@s/components/fig/fig-result.module.css";
import {IFIGResult} from "@t/components/fig/fig-result";
import DishDetailsWindow from "@r/src/components/DishDetailsWindow";
import FIGResultUi from "@r/src/components/fig/FIGResultUI";
import {normalizeAndCompare} from "@ut/compareAlgorythms";
import {ResultUiStatus} from "@t/ui/result-ui";
import {DDChangeDisplayProps} from "@t/components/dish-details-window";


const FIGResult: FC<IFIGResult> = ({
  dish,
  answer,
  handleNextQuestion,
  questionNumber,
  menuLength,
}) => {
  const [display, setDisplay] = React.useState<DDChangeDisplayProps>("result");
  const isAnswerCorrect = normalizeAndCompare(dish.name, answer);
  const status: ResultUiStatus = isAnswerCorrect ? "correct" : "incorrect";

  const handleDisplayChange = (changeTo: DDChangeDisplayProps) => {
    setDisplay(changeTo);
  };

  const triggerNextQuestion = () => {
    handleNextQuestion({type: status === "correct" ? "correct" : "incorrect"});

    if (questionNumber + 1 === menuLength) {
      handleNextQuestion({type: "end"});
    } else {
      handleNextQuestion({type: "next"});
    }
  };


  const renderWindowContent = (): JSX.Element | null => {
    const states = {
      result:
                <FIGResultUi
                  correctAnswer={dish.name}
                  status={status}
                  triggerNextQuestion={triggerNextQuestion}
                  handleChangeDisplay={handleDisplayChange}
                />,
      hint:
                <DishDetailsWindow
                  dish={dish}
                  variant="hint"
                  triggerNextQuestion={triggerNextQuestion}
                  handleChangeDisplay={handleDisplayChange}
                />,
    };

    return states[display] || null;
  };

  const getClassNames = () => {
    switch (display) {
      case "result":
        return styles.result;
      case "hint":
        return styles.hint;
    }
  };


  return (
    <div className={getClassNames()}>
      {renderWindowContent()}
    </div>
  );
};

FIGResult.displayName = "FIGResult";

export default FIGResult;
