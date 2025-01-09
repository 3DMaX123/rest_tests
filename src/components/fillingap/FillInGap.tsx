"use client"

import React, { useState } from 'react';
import { FillInGapStatus, IFillInGap } from '@t/components/fill-in-gap-test';
import FIGStart from './FIGStart';
import FIGTestWindow from "./FIGTestWindow";

const FillInGap = ({ menus }: IFillInGap) => {
    const [status, setStatus] = useState<FillInGapStatus>("start");
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [answer, setAnswer] = useState<string>("");

    return (
        <div>
            <FIGStart status={status} setStatus={setStatus} />
            <FIGTestWindow
                answer={answer}
                setAnswer={setAnswer}
                status={status}
                setQuestionNumber={setQuestionNumber}
                menus={menus}
                questionNumber={questionNumber}
            />
            {/* {status === "result" &&
                <AnimOpc>
                    <MainWindow
                        className={styles.mainWindow}
                        header='І що ж там?'
                        subHeader='Тут буде результат відповіді, також можеш подивитись розгорнуту відповідь'>

                    </MainWindow>
                </AnimOpc>

            } */}
        </div>
    )
}

export default FillInGap