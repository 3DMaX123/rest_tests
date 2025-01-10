import AnimOpc from "@anim/AnimOpc";
import React, { FC, JSX } from "react";
import MainWindow from "@comp/MainWindow";
import styles from "@s/components/fig/fig-result.module.css";
import { IFIGResultHOC } from "@r/src/types/components/fig-result";
import FIGResultExplainWindow from "@comp/fillingap/FIGResultExplainWindow";
import FIGResultWindow from "@comp/fillingap/FIGResultWindow";
import { cn } from "@ut/shadcn";

const FIGResult: FC<IFIGResultHOC> = ({ dish, answer, handleNextQuestion }) => {
    const [display, setDisplay] = React.useState<"result" | "hint">("result");

    const renderWindowContent = (): JSX.Element | null => {
        const states = {
            result:
                <FIGResultWindow
                    dish={dish}
                    answer={answer}
                    handleNextQuestion={handleNextQuestion}
                />,
            hint: <FIGResultExplainWindow dish={dish} />
        }

        return states[display] || null;
    }


    return (
        <div>
            <AnimOpc>
                <MainWindow
                    className={cn(styles.mainWindow, "mainWindowStandard")}
                    header='І що ж там?'
                    subHeader='Тут буде результат відповіді, також можеш подивитись розгорнуту відповідь'>
                    {renderWindowContent()}
                </MainWindow>
            </AnimOpc>
        </div>
    )
}

export default FIGResult