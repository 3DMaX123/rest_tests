import React from "react";
import {Metadata} from "next";
import Button from "@ui/Button";
import AnimOpc from "@anim/AnimOpc";
import MainWindow from "@comp/MainWindow";
import {HEADERS} from "@c/constants";
import styles from "@s/pages/bestiary.module.css";

export const metadata: Metadata = {
  title: "Дізнайся більше про страви | Restaurant tests",
};

const page = () => {
  return (
    <div>
      <Button is="comeBack" to="" />
      <AnimOpc className={styles.mainWindow}>
        <MainWindow
          header={HEADERS.bestiary.main.header}
          subHeader={HEADERS.bestiary.main.subHeader}>
          <></>
        </MainWindow>
      </AnimOpc>
    </div>
  );
};

export default page;
