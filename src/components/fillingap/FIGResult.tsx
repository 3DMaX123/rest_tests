import AnimOpc from "@anim/AnimOpc";
import React, { FC, JSX } from "react";
import MainWindow from "@comp/MainWindow";
import styles from "@s/components/fig/fig-result.module.css";
import { IFIGResultHOC } from "@r/src/types/components/fig-result";
import FIGResultExplainWindow from "@comp/fillingap/FIGResultExplainWindow";
import FIGResultWindow from "@comp/fillingap/FIGResultWindow";
import { cn } from "@ut/shadcn";

type IDisplay = "result" | "hint";

const Text = {
    result: {
        header: "І що ж там?",
        subHeader: "Тут буде результат відповіді, також можеш подивитись розгорнуту відповідь"
    },
    hint: {
        header: 'А це у нас',
        subHeader: ""
    }
} as const


const FIGResult: FC<IFIGResultHOC> = ({ dish, answer, handleNextQuestion }) => {
    const [display, setDisplay] = React.useState<IDisplay>("result");

    const handleDisplayChange = (changeTo: IDisplay) => {
        setDisplay(changeTo);
    };

    const getClassName = () => {
        return display === "result" ? styles.mainWindowResult : styles.mainWindowHint;
    }

    const renderWindowContent = (): JSX.Element | null => {
        const states = {
            result:
                <FIGResultWindow
                    dish={dish}
                    answer={answer}
                    handleNextQuestion={handleNextQuestion}
                    handleChangeDisplay={handleDisplayChange}
                />,
            hint:
                <FIGResultExplainWindow
                    dish={dish}
                    handleNextQuestion={handleNextQuestion}
                    handleChangeDisplay={handleDisplayChange}
                />
        }

        return states[display] || null;
    }


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
    )
}

export default FIGResult