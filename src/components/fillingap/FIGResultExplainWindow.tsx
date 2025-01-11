import {IFIGResultExplainWindow} from "@t/components/fig-result-explain-window";
import React, {FC} from "react";
import styles from "@s/components/fig/fig-result-explain-window.module.css";
import Button from "@ui/Button";
import {
  DishPhoto,
  DishName,
  DishIngredients,
  DishRecipe,
  DishAllergens,
  DishDecoration,
  DishAdditional,
} from "@comp/fillingap/FIGResultExplainRenderElements";

const FIGResultExplainWindow: FC<IFIGResultExplainWindow> = ({
  dish,
  handleChangeDisplay,
  handleNextQuestion,
}) => {
  const handleChangeToHint = () => {
    handleChangeDisplay("result");
  };

  const renderElements = () => {
    const sections = [
      dish.photo !== "" && dish.type !== "" && <DishPhoto photo={dish.photo} type={dish.type} />,
      dish.name && <DishName name={dish.name} description={dish.description} />,
      dish.ingredients && <DishIngredients ingredients={dish.ingredients} />,
      dish.ingByIng.length && <DishRecipe ingredients={dish.ingByIng} />,
      dish.allergen.length && <DishAllergens allergens={dish.allergen} />,
      dish.decoration !== "" && <DishDecoration decoration={dish.decoration} />,
      <DishAdditional dish={dish} />,
    ].filter(Boolean);

    return sections;
  };

  return (
    <>
      <div className={styles.resultExplainWindow}>
        <div className={styles.main}>
          <div className={styles.mainIfo}>
            {renderElements()}
          </div>
        </div>
        <div className={styles.blurUnder}></div>
        <div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          className='bg-white'
          is='button'
          action={handleChangeToHint}
          text="Повернутись назад"
          to={false}
        />
        <Button
          className='bg-white'
          is='button'
          action={handleNextQuestion}
          text="Наступне питання"
          to={false}
        />
      </div>
    </>
  );
};

export default FIGResultExplainWindow;
