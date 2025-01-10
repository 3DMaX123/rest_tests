import { FC } from "react";
import styles from "@s/components/fig/fig-result-explain-render-element.module.css";
import {
    DishNameProps,
    IngredientsProps,
    RecipeProps,
    AllergensProps,
    DecorationProps,
    AdditionalProps,
} from "@t/components/fig-result-explaint-render-element";

const DishName: FC<DishNameProps> = ({ name, description }) => (
    <>
        <h2 className={styles.name}>{name}</h2>
        {description && <p className={styles.description}>{description}</p>}
    </>
);


const DishIngredients: FC<IngredientsProps> = ({ ingredients }) => (
    <>
        <h2 className={styles.ingridientsHeader}>Складається</h2>
        <p className={styles.ingredients}>{ingredients}</p>
    </>
);


const DishRecipe: FC<RecipeProps> = ({ ingredients }) => (
    <div className={styles.recipe}>
        {ingredients.map((ingredient, index) => (
            <p key={index} className={styles.recipeOneByOne}>
                {ingredient}
            </p>
        ))}
    </div>
);


const DishAllergens: FC<AllergensProps> = ({ allergens }) => (
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

const DishDecoration: FC<DecorationProps> = ({ decoration }) => (
    <>
        <h2 className={styles.decorationHeader}>Прикрашається</h2>
        <p className={styles.decoration}>{decoration}</p>
    </>
);

const DishAdditional: FC<AdditionalProps> = ({ additional }) => (
    <>
        <h2 className={styles.decorationHeader}>Додаткові відомості</h2>
        <p className={styles.decoration}>{additional}</p>
    </>
);

export {
    DishName,
    DishIngredients,
    DishRecipe,
    DishAllergens,
    DishDecoration,
    DishAdditional,
};