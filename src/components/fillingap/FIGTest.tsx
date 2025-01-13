import {IFIGTestProps} from "@t/components/fig-test";
import Button from "@ui/Button";
import React, {FC} from "react";
import styles from "@s/components/fig/fig-test.module.css";
import InputField from "@ui/InputField";

const FIGTest: FC<IFIGTestProps> = ({handleNextQuestion, dish, changeQuestion, answer, setAnswer}) => {
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
      type: "next",
    });
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
          <Button is='button' text='Відповісти' action={changeQuestion} to={false} />
          <Button is='button' text='Пропустити' action={nextQuestion} to={false} />
        </div>
      </div>
    </div>
  );
};

FIGTest.displayName = "FIGTest";

export default FIGTest;
