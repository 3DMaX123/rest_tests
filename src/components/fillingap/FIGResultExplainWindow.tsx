import { IFIGResultExplainWindow } from '@t/components/fig-result-explain-window';
import React, { FC } from 'react';
import styles from '@s/components/fig/fig-result-explain-window.module.css';

const FIGResultExplainWindow: FC<IFIGResultExplainWindow> = ({ dish }) => {
    return (
        <div className={styles.resultExplainWindow}>
            <div className={styles.main}>
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
            </div>
            <div className={styles.blurUnder}></div>
        </div>
    )
}

export default FIGResultExplainWindow;