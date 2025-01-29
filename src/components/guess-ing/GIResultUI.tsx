import {IGIResultUIProps} from "@t/components/guess-ing/gi-result-ui";
import styles from "@s/components/guess-ing/gi-result-ui.module.css";
import React, {FC} from "react";
import {cn} from "@r/src/utils/shadcn";
import Button from "@r/src/ui/Button";

const GIResultUI: FC<IGIResultUIProps> = ({
  handleDisplayChange,
  triggerNextQuestion,
  amountOfCorrectAnswers,
  amountOfIncorrectAnswers,
  ingredients,
  arrayOfCorrectAnswers,
}) => {
  const getIngredientClass = (ingredient: string) => {
    return arrayOfCorrectAnswers.includes(ingredient) ?
      styles.recipeOneByOneCorrect :
      "";
  };

  const handleChangeToHint = () => {
    handleDisplayChange("hint");
  };

  return (
    <div className={styles.main}>
      <div className={styles.recipeScroll}>
        <div className={styles.recipe}>
          {ingredients.map((ingredient: string, index: number) => (
            ingredient && (
              <p
                key={`${ingredient}-${index}`}
                className={cn(
                    getIngredientClass(ingredient),
                    styles.recipeOneByOne,
                )}
              >
                {ingredient}
              </p>
            )
          ))}
        </div>
      </div>
      <div className={styles.texts}>
        <p className={styles.rightAns}>Правильних відповідей: {amountOfCorrectAnswers}</p>
        <p className={styles.wrongAns}>Не правильних відповідей: {amountOfIncorrectAnswers}</p>
      </div>
      <div className={styles.buttons}>
        <div className={styles.buttons}>
          <Button
            className='bg-white'
            is='button' action={triggerNextQuestion}
            text="Наступне питання"
          />
          <Button
            className='bg-white'
            is='button'
            action={handleChangeToHint}
            text="Розкажи більше про цю страву"
          />
        </div>
      </div>
    </div>
  );
};

export default GIResultUI;
