import React from "react";
import styles from "@s/components/main-window.module.css";
import {IMainWindow} from "@t/components/main-window";
import {cn} from "@ut/shadcn";

const MainWindow = ({
  header = "Привіт!",
  subHeader = "Давай почнемо! Обери потрібний тобі тест",
  children,
  className,
}: IMainWindow) => {
  return (
    <div className={cn(
        styles.mainWindow,
        className,
    )}>
      <div className={cn(
          styles.header,
          "flex justify-center items-center flex-col",
      )}>
        <p className={styles.headerText}>{header}</p>
        <p className={styles.subheader}>{subHeader}</p>
      </div>
      {children}
    </div>
  );
};

export default MainWindow;
