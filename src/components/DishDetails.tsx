import styles from "@s/components/dish-details.module.css";
import {
  DishPhotoProps,
  DishNameProps,
  DishIngredientsProps,
  DishRecipeProps,
  DishAllergensProps,
  DishDecorationProps,
  DishAdditionalProps,
  PropertyConfig,
} from "@t/components/dish-details";
import {JSX} from "react";

const DishDetails = {
  Photo: ({photo, type}: DishPhotoProps): JSX.Element => (
    <img
      className={styles.photo}
      src={`dishPhoto/${type}/${photo}`}
      alt={photo}
    />
  ),
  Title: ({name, description}: DishNameProps): JSX.Element => (
    <>
      <h2 className={styles.name}>{name}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </>
  ),
  Ingredients: ({ingredients}: DishIngredientsProps) => (
    <>
      <h2 className={styles.ingridientsHeader}>Складається</h2>
      <p className={styles.ingredients}>{ingredients}</p>
    </>
  ),
  Recipe: ({recipe}: DishRecipeProps) => (
    <div className={styles.recipe}>
      {recipe.map((ingredient: string, index: number) => {
        return (
          <div key={index}>
            {ingredient !== "" &&
              <p key={index} className={styles.recipeOneByOne}>
                {ingredient}
              </p>
            }
          </div>
        );
      },
      )}
    </div>
  ),
  Allergen: ({allergens}: DishAllergensProps) => (
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
  ),
  Decorations: ({decoration}: DishDecorationProps) => (
    <>
      <h2 className={styles.decorationHeader}>Прикрашається</h2>
      <p className={styles.decoration}>{decoration}</p>
    </>
  ),
  Additional: ({dish}: DishAdditionalProps) => {
    const validProperties = dishProperties
        .filter((prop) => dish[prop.key as keyof typeof dish])
        .map((prop) => ({
          key: prop.key,
          value: formatters[prop.key](dish[prop.key]),
        }));

    return (
      <>
        <h2 className={styles.decorationHeader}>Додаткові відомості</h2>
        <div className={styles.decorations}>
          {validProperties.map(({key, value}) => (
            <p key={key} className={styles.decorationOneByOne}>
              {value}
            </p>
          ))}
        </div>
      </>
    );
  },
};

export const formatters = {
  time: (value: string) => value.includes("хв") ? value : `${value} хв`,
  weight: (value: string) => value.match(/[гкГК]/) ? value : `${value} г`,
  default: (value: string) => value,
};

export const dishProperties: PropertyConfig[] = [
  {key: "time", label: "Час", formatter: formatters.time},
  {key: "weight", label: "Вага", formatter: formatters.weight},
];

export default DishDetails;
