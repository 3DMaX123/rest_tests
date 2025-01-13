import AnimOpc from "@anim/AnimOpc";
import React, {FC, JSX} from "react";
import MainWindow from "@comp/MainWindow";
import styles from "@s/components/fig/fig-result.module.css";
import {FIGResultStatus, IFIGResult} from "@t/components/fig-result";
import FIGResultExplainWindow from "@comp/fillingap/FIGResultExplainWindow";
import FIGResultWindow from "@comp/fillingap/FIGResultWindow";
import {cn} from "@ut/shadcn";
import {normalizeAndCompare} from "@r/src/utils/compareAlgorythms";

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


const FIGResult: FC<IFIGResult> = ({dish, answer, handleNextQuestion}) => {
  const [display, setDisplay] = React.useState<IDisplay>("result");
  const isAnswerCorrect = normalizeAndCompare(dish.name, answer);
  const status: FIGResultStatus = isAnswerCorrect ? "correct" : "incorrect";

  const handleDisplayChange = (changeTo: IDisplay) => {
    setDisplay(changeTo);
  };

  const getClassName = () => {
    return display === "result" ? styles.mainWindowResult : styles.mainWindowHint;
  };

  const triggerNextQuestion = () => {
    handleNextQuestion({type: status});
    handleNextQuestion({type: "next"});
  };


  const renderWindowContent = (): JSX.Element | null => {
    const states = {
      result:
                <FIGResultWindow
                  dish={dish}
                  status={status}
                  triggerNextQuestion={triggerNextQuestion}
                  handleChangeDisplay={handleDisplayChange}
                />,
      hint:
                <FIGResultExplainWindow
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

export default FIGResult;
