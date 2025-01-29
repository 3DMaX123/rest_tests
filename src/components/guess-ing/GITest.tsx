import React, {FC, useCallback, useEffect, useMemo, useState} from "react";
import styles from "@s/components/guess-ing/gi-test.module.css";
import Button from "@ui/Button";
import {IGITestProps} from "@t/components/guess-ing/gi-test";
import {menu} from "@c/menu";
import {cn} from "@ut/shadcn";
import {getRandomIngredients} from "@ut/generateRandom";

const GITest: FC<IGITestProps> = ({
  dish,
  handleNextQuestion,
  menuLength,
  questionNumber,
  setStatus,
  setAnswer,
  handleSummaries,
}) => {
  const [answers, setAnswers] = useState<Set<string>>(new Set());
  const allIngredients = useMemo(() =>
    getRandomIngredients(dish, menu), [dish],
  );

  const handleIngredientClick = useCallback((ingredient: string) => {
    if (!answers.has(ingredient)) {
      setAnswers((prev) => new Set(prev).add(ingredient));
    }
  }, []);

  const skipQuestion = () => {
    handleSummaries({
      type: "incorrect",
      amount: allIngredients.length,
    });
    setAnswers(new Set());

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

  const checkAnswer = () => {
    setAnswer([...answers]);
    setAnswers(new Set());
    setStatus("result");
  };

  const getIngredientClass = useCallback((ingredient: string) => {
    if (!answers.has(ingredient)) return styles.recipeOneByOne;

    return cn(
        styles.recipeOneByOne,
      dish.ingByIng.includes(ingredient) ?
        styles.recipeOneByOneCorrect :
        styles.recipeOneByOneIncorrect,
    );
  }, [answers, dish.ingByIng]);


  useEffect(() => {
    // eslint-disable-next-line no-undef
    console.log(dish.ingByIng);
  }, []);

  return (
    <div className={styles.main}>
      <p className={styles.dishInfo}>{dish.name}</p>
      <div className={styles.recipeScroll}>
        <div className={styles.recipe}>
          {allIngredients.map((ingredient: string, index: number) => (
            ingredient && (
              <p
                key={`${ingredient}-${index}`}
                className={getIngredientClass(ingredient)}
                onClick={() => handleIngredientClick(ingredient)}
              >
                {ingredient}
              </p>
            )
          ))}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button is='button' text='Відповісти' action={checkAnswer}/>
        <Button is='button' text='Пропустити' action={skipQuestion} />
      </div>
    </div>
  );
};

export default GITest;
