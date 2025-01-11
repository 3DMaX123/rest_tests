import {FC} from "react";
import styles from "@s/components/fig/fig-result-explain-render-element.module.css";
import {
  DishNameProps,
  IngredientsProps,
  RecipeProps,
  AllergensProps,
  DecorationProps,
  AdditionalProps,
  DishPhotoProps,
} from "@t/components/fig-result-explaint-render-element";

const DishPhoto: FC<DishPhotoProps> = ({photo, type}) => (
  <img className={styles.photo} src={`dishPhoto/${type}/${photo}`} alt={photo} />
);

const DishName: FC<DishNameProps> = ({name, description}) => (
  <>
    <h2 className={styles.name}>{name}</h2>
    {description && <p className={styles.description}>{description}</p>}
  </>
);


const DishIngredients: FC<IngredientsProps> = ({ingredients}) => (
  <>
    <h2 className={styles.ingridientsHeader}>Складається</h2>
    <p className={styles.ingredients}>{ingredients}</p>
  </>
);


const DishRecipe: FC<RecipeProps> = ({ingredients}) => (
  <div className={styles.recipe}>
    {ingredients.map((ingredient, index) => (
      <p key={index} className={styles.recipeOneByOne}>
        {ingredient}
      </p>
    ))}
  </div>
);


const DishAllergens: FC<AllergensProps> = ({allergens}) => (
  <>
    <h2 className={styles.allergensHeader}>Алергени</h2>
    <div className={styles.allergen}>
      {allergens.map((allergen, index) => (
        <p key={index} className={styles.allergenOneByOne}>
          {allergen}
        </p>
      ))}
    </div>
  </>
);

const DishDecoration: FC<DecorationProps> = ({decoration}) => (
  <>
    <h2 className={styles.decorationHeader}>Прикрашається</h2>
    <p className={styles.decoration}>{decoration}</p>
  </>
);

const DishAdditional: FC<AdditionalProps> = ({dish}) => {
  const checkIfTime = (time: string): string => {
    return time.includes("хв") ? time : time + " хв";
  };

  const checkIfWeight = (weight: string) => {
    if (weight.includes("г")) {
      return weight;
    } else if (weight.includes("кг")) {
      return weight;
    } else {
      return weight + " г";
    };
  };

  return (
    <>
      <h2 className={styles.decorationHeader}>Додаткові відомості</h2>
      <div className={styles.decorations}>
        {dish.time && <p className={styles.decorationOneByOne}>{checkIfTime(dish.time)}</p>}
        {dish.weight && <p className={styles.decorationOneByOne}>{checkIfWeight(dish.weight)}</p>}
      </div>
    </>
  );
};

export {
  DishPhoto,
  DishName,
  DishIngredients,
  DishRecipe,
  DishAllergens,
  DishDecoration,
  DishAdditional,
};
