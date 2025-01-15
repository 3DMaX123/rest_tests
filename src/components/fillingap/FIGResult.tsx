import AnimOpc from "@anim/AnimOpc";
import React, {FC, JSX} from "react";
import MainWindow from "@comp/MainWindow";
import styles from "@s/components/fig/fig-result.module.css";
import {IFIGResult} from "@t/components/fig-result";
import DishDetailsWindow from "@comp/fillingap/DishDetailsWindow";
import FIGResultUi from "@comp/fillingap/FIGResultUI";
import {cn} from "@ut/shadcn";
import {normalizeAndCompare} from "@ut/compareAlgorythms";
import {ResultUiStatus} from "@t/ui/result-ui";

type IDisplay = "result" | "hint";

const Text = {
  result: {
    header: "І що ж там?",
    subHeader: "Тут буде результат відповіді, також можеш подивитись розгорнуту відповідь",
  },
  hint: {
    header: "А це у нас",
    subHeader: "",
  },
} as const;


const FIGResult: FC<IFIGResult> = ({
  dish,
  answer,
  handleNextQuestion,
  questionNumber,
  menuLength,
}) => {
  const [display, setDisplay] = React.useState<IDisplay>("result");
  const isAnswerCorrect = normalizeAndCompare(dish.name, answer);
  const status: ResultUiStatus = isAnswerCorrect ? "correct" : "incorrect";

  const handleDisplayChange = (changeTo: IDisplay) => {
    setDisplay(changeTo);
  };

  const getClassName = () => {
    return display === "result" ? styles.mainWindowResult : styles.mainWindowHint;
  };

  const triggerNextQuestion = () => {
    if (questionNumber + 1 === menuLength) {
      handleNextQuestion({type: "end"});
    } else {
      handleNextQuestion({type: status === "correct" ? "correct" : "incorrect"});
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
                  triggerNextQuestion={triggerNextQuestion}
                  handleChangeDisplay={handleDisplayChange}
                />,
    };

    return states[display] || null;
  };


  return (
    <div>
      <AnimOpc>
        <MainWindow
          className={cn(getClassName(), "mainWindowStandard")}
          header={Text[display].header}
          subHeader={Text[display].subHeader}>
          {renderWindowContent()}
        </MainWindow>
      </AnimOpc>
    </div>
  );
};

FIGResult.displayName = "FIGResult";

export default FIGResult;
