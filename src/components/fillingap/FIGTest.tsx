import React, {FC} from "react";
import styles from "@s/components/fig/fig-test.module.css";
import Button from "@ui/Button";
import InputField from "@ui/InputField";
import {IFIGTestWindow} from "@t/components/fig-test";

const FIGTest: FC<IFIGTestWindow> = ({
  answer,
  setAnswer,
  setStatus,
  dish,
  handleNextQuestion,
  questionNumber,
  menuLength,
}) => {
  const renderIngredients = () => (
    dish.ingredients && (
      <section className={styles.ingridientsDiv}>
        <h2 className={styles.ingridientsHeader}>Склад:</h2>
        <p className={styles.ingridients}>{dish.ingredients}</p>
      </section>
    )
  );

  const renderDescription = () => (
    dish.description && (
      <section className={styles.descriptionDiv}>
        <h2 className={styles.descriptionHeader}>Опис:</h2>
        <p className={styles.description}>{dish.description}</p>
      </section>
    )
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const nextQuestion = () => {
    handleNextQuestion({
      type: "incorrect",
    });

    if (questionNumber + 1 === menuLength) {
      handleNextQuestion({
        type: "end",
      });
    } else {
      handleNextQuestion({
        type: "next",
      });
    }
  };

  const changeQuestion = () => {
    setStatus("result");
  };


  // eslint-disable-next-line no-undef
  console.log(dish.name);

  return (

    <div className={styles.main}>
      <div className={styles.text}>
        {renderIngredients()}
        {renderDescription()}
      </div>
      <div className={styles.fieldButton}>
        <InputField
          value={answer}
          triggerInput={changeQuestion}
          setValue={handleInputChange}
          placeHolder='Назву вводити ось тут'
        />
        <div className={styles.buttons}>
          <Button is='button' text='Відповісти' action={changeQuestion}/>
          <Button is='button' text='Пропустити' action={nextQuestion} />
        </div>
      </div>
    </div>
  );
};

FIGTest.displayName = "FIGTest";

export default FIGTest;
