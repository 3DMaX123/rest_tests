import React, {FC, JSX} from "react";
import DishDetailsWindow from "@comp/DishDetailsWindow";
import {IGIResultProps} from "@t/components/guess-ing/gi-result";
import styles from "@s/components/guess-ing/gi-result.module.css";
import GIResultUI from "./GIResultUI";
import {DDChangeDisplayProps} from "@t/components/dish-details-window";

const GIResult: FC<IGIResultProps> = ({
  dish,
  answer,
  handleNextQuestion,
  handleSummaries,
  questionNumber,
  menuLength,
}) => {
  const [display, setDisplay] = React.useState<DDChangeDisplayProps>("result");

  const arrayOfCorrectAnswers = answer.filter((ingredient) =>
    dish.ingByIng.includes(ingredient),
  );
  const amountOfCorrectAnswers = arrayOfCorrectAnswers.length;

  const arrayOfIncorrectAnswers = answer.filter((ingredient) =>
    !dish.ingByIng.includes(ingredient),
  );
  const amountOfIncorrectAnswers = arrayOfIncorrectAnswers.length +
  dish.ingByIng.filter((ing) => !answer.includes(ing)).length;

  const handleDisplayChange = (changeTo: DDChangeDisplayProps) => {
    setDisplay(changeTo);
  };

  const triggerNextQuestion = () => {
    handleSummaries({
      type: "correct",
      amount: amountOfCorrectAnswers,
    });
    handleSummaries({
      type: "incorrect",
      amount: amountOfIncorrectAnswers,
    });

    if (questionNumber + 1 === menuLength) {
      handleNextQuestion({type: "end"});
    } else {
      handleNextQuestion({type: "next"});
    }
  };

  const renderWindowContent = (): JSX.Element | null => {
    const states = {
      result:
        <GIResultUI
          handleDisplayChange={handleDisplayChange}
          triggerNextQuestion={triggerNextQuestion}
          amountOfCorrectAnswers={amountOfCorrectAnswers}
          amountOfIncorrectAnswers={amountOfIncorrectAnswers}
          ingredients={dish.ingByIng}
          arrayOfCorrectAnswers={arrayOfCorrectAnswers}
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

GIResult.displayName = "GIResult";

export default GIResult;
