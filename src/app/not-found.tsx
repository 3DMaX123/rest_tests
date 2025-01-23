import React from "react";
import MainBack from "@comp/MainBack";
import MainWindow from "@comp/MainWindow";
import styles from "@s/pages/not-found.module.css";
import Button from "@ui/Button";

const Error = () => {
  return (
    <div className={styles.notFound}>
      <MainBack />
      <Button is="comeBack" to="" />
      <MainWindow
        header="ТЮФУ!"
        subHeader="Я щось наробив і тепер воно не працює, ти знаєш мій номер..."
        className="mainWindowStandard"
      >
        <></>
      </MainWindow>
    </div>
  );
};

export default Error;
