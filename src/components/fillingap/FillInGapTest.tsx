"use client"

import React, { useState } from 'react';
import Button from '@ui/Button';
import MainWindow from '@comp/MainWindow';
import styles from "@s/components/fill-in-gap-test.module.css";
import AnimOpc from '@anim/AnimOpc';
import FIGTest from '@comp/fillingap/FIGTest';

const FillInGapTest = () => {
    const [start, setStart] = useState(false);

    const test = () => {
        setStart((prev) => !prev);
    }

    return (
        <div>
            {!start &&
                <Button className='bg-white' is='button' action={test} text="Розпочати" to={false} />
            }
            {start &&
                <AnimOpc >
                    <MainWindow
                        className={styles.mainWindow}
                        header='Заповни пропуски'
                        subHeader='Спираючись на опис страви чи напою введи правильну відповідь у текстовому полі'>
                        <FIGTest />
                    </MainWindow>
                </AnimOpc>
            }
        </div>
    )
}

export default FillInGapTest