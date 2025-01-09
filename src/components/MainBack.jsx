import React from "react";
import styles from "@s/components/main-back.module.css";
import MainWindow from "@comp/MainWindow";

const MainBack = () => {
    return (
        <div className={styles.mainBack}>
            <div className={styles.circles}>
                <div className={styles.firstC}></div>
                <div className={styles.thirdC}></div>
                <div className={styles.fourthC}></div>
                <div className={styles.secondC}></div>
            </div>
            <div className={styles.blurBack}></div>
        </div>
    )
}

export default MainBack