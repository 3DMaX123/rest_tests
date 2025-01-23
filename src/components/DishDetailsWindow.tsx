import {IDishDetailsProps} from "@t/components/dish-details-window";
import React, {FC} from "react";
import styles from "@s/components/dish-details-window.module.css";
import Button from "@ui/Button";
import DishDetails from "@r/src/components/DishDetails";

const DishDetailsWindow: FC<IDishDetailsProps> = ({
  dish,
  handleChangeDisplay,
  triggerNextQuestion,
  variant,
}) => {
  const handleChangeToHint = () => {
    handleChangeDisplay?.("result");
  };

  const renderElements = () => {
    const sections = [
      {
        id: "photo",
        content: (dish.photo !== "" && dish.type !== "") &&
          <DishDetails.Photo photo={dish.photo} type={dish.type} />,
      },
      {
        id: "name",
        content: dish.name !== "" &&
          <DishDetails.Title name={dish.name} description={dish.description} />,
      },
      {
        id: "ingredients",
        content: dish.ingredients !== "" &&
          <DishDetails.Ingredients ingredients={dish.ingredients} />,
      },
      {
        id: "recipe",
        content: dish.ingByIng.length &&
          <DishDetails.Recipe recipe={dish.ingByIng} />,
      },
      {
        id: "allergens",
        content: dish.allergen.length &&
          <DishDetails.Allergen allergens={dish.allergen} />,
      },
      {
        id: "decoration",
        content: dish.decoration !== "" &&
          <DishDetails.Decorations decoration={dish.decoration} />,
      },
      {
        id: "additional",
        content: <DishDetails.Additional dish={dish} />,
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
    <div className={styles.dishDetails}>
      <div className={styles.resultExplainWindow}>
        {renderElements()}
      </div>
      {variant === "hint" &&
      <div className={styles.buttons}>
        <Button
          className='bg-white'
          is='button'
          action={handleChangeToHint}
          text="Повернутись назад"
        />
        <Button
          className='bg-white'
          is='button'
          action={triggerNextQuestion}
          text="Наступне питання"
        />
      </div>
      }
    </div>
  );
};

export default DishDetailsWindow;
