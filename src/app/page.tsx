import React from "react";
import MainWindow from "@comp/MainWindow";
import styles from "@s/pages/main-page.module.css";
import Button from "@ui/Button";
import {links} from "@c/links";
import {jsonToArray} from "@ut/arrays";
import {randomNumber} from "@ut/generateRandom";

export default function Home() {
  const array = jsonToArray(links, "values");
  const randomArray = randomNumber(0, array.length - 1);

  return (
    <div className='flex items-center justify-center'>
      <MainWindow className={styles.mainWindow}>
        <div className={styles.buttons}>
          <Button is="link" to={links.LCorrectAns} text="Правильні відповіді" />
          <Button is="link" to={links.LOpenQuestions} text="Відкриті питання" />
          <Button is="link" to={links.LCategories} text="Категорії" />
          <Button is="link" to={links.LSpeedTest} text="Швидка думка" />
          <Button is="link" to={links.LDishByGuess} text="Страва по опису" />
          <Button is="link" to={links.LFillGap} text="Заповнити пропуски" />
          <Button is="link" to={array[randomArray]} text="Здивуй мене" />
        </div>
      </MainWindow>
    </div>
  );
}
