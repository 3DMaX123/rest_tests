import React from "react";
import MainWindow from "@comp/MainWindow";
import styles from "@s/pages/main-page.module.css";
import Button from "@ui/Button";
import { links } from "@c/links";
import { JSONToArray } from "../utils/JsonToArray";
import { randomNumber } from "../utils/generateRandom";

export default function Home() {
  const array = JSONToArray(links, "values");
  const randomArray = randomNumber(0, array.length - 1)

  return (
    <div className='flex items-center justify-center'>
      <MainWindow className={styles.mainWindow}>
        <div className={styles.buttons}>
          <Button is="link" to={links.LCorrectAns} text="Правильні відповіді" action={false} />
          <Button is="link" to={links.LOpenQuestions} text="Відкриті питання" action={false} />
          <Button is="link" to={links.LCategories} text="Категорії" action={false} />
          <Button is="link" to={links.LSpeedTest} text="Швидка думка" action={false} />
          <Button is="link" to={links.LDishByGuess} text="Страва по опису" action={false} />
          <Button is="link" to={links.LFillGap} text="Заповнити пропуски" action={false} />
          <Button is="link" to={array[randomArray]} text="Здивуй мене" action={false} />
        </div>
      </MainWindow>
    </div>
  );
}