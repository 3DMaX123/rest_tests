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
  triggerNextQuestion,
}) => {
  const handleChangeToHint = () => {
    handleChangeDisplay("result");
  };

  const renderElements = () => {
    const sections = [
      {
        id: "photo",
        content: dish.photo !== "" && dish.type !== "" &&
          <DishPhoto photo={dish.photo} type={dish.type} />,
      },
      {
        id: "name",
        content: dish.name &&
          <DishName name={dish.name} description={dish.description} />,
      },
      {
        id: "ingredients",
        content: dish.ingredients &&
          <DishIngredients ingredients={dish.ingredients} />,
      },
      {
        id: "recipe",
        content: dish.ingByIng.length &&
          <DishRecipe ingredients={dish.ingByIng} />,
      },
      {
        id: "allergens",
        content: dish.allergen.length &&
          <DishAllergens allergens={dish.allergen} />,
      },
      {
        id: "decoration",
        content: dish.decoration !== "" &&
          <DishDecoration decoration={dish.decoration} />,
      },
      {
        id: "additional",
        content: <DishAdditional dish={dish} />,
      },
    ];

    return sections
        .filter((section) => section.content)
        .map((section) => (
          <React.Fragment key={section.id}>
            {section.content}
          </React.Fragment>
        ));
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
          action={triggerNextQuestion}
          text="Наступне питання"
          to={false}
        />
      </div>
    </>
  );
};

export default FIGResultExplainWindow;
