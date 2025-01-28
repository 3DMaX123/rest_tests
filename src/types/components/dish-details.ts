import {IMenuProp, IMenu} from "@t/root";

export interface DishPhotoProps {
    photo: string;
    type: string;
}

export interface DishNameProps {
    name: string;
    description?: string;
    alcohol: boolean | undefined;
}

export interface DishIngredientsProps {
    ingredients: string;
}

export interface DishRecipeProps {
    recipe: string[];
}

export interface DishAllergensProps {
    allergens: string[];
}

export interface DishDecorationProps {
    decoration: string;
}

export interface DishAdditionalProps {
    dish: IMenuProp["menu"][number];
}

type DishPropertyKey = keyof Pick<IMenu, "time" | "weight">;

export interface PropertyConfig{
    key: DishPropertyKey;
    label: string;
    formatter: (value: string) => string;
}
