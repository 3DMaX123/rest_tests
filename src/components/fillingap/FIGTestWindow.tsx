import AnimOpc from '@anim/AnimOpc';
import React from 'react';
import MainWindow from "@comp/MainWindow";
import styles from "@s/components/fig/fig-test-window.module.css";
import FIGTest from '@comp/fillingap/FIGTest';
import { IFIGTestWindow } from '@t/components/fig-test-window';

const FIGTestWindow = ({ answer, setAnswer, status, setQuestionNumber, menus, questionNumber }: IFIGTestWindow) => {

    const changeQuestion = () => {
        setQuestionNumber((prev) => prev + 1);
    }

    return (
        <>
            {status !== "start" &&
                <AnimOpc >
                    <MainWindow
                        className={styles.mainWindow}
                        header='Заповни пропуски'
                        subHeader='Зпираючись на опис страви чи напою введи назву у текстовому полі'>
                        <FIGTest
                            answer={answer}
                            setAnswer={setAnswer}
                            status={status}
                            changeQuestion={changeQuestion}
                            dish={menus[questionNumber]}
                        />
                    </MainWindow>
                </AnimOpc>
            }
        </>
    )
}

export default FIGTestWindow