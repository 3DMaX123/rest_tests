export interface DishNameProps {
    name: string;
    description?: string;
}

export interface IngredientsProps {
    ingredients: string;
}

export interface RecipeProps {
    ingredients: string[];
}

export interface AllergensProps {
    allergens: string[];
}

export interface DecorationProps {
    decoration: string;
}

export interface AdditionalProps {
    additional: string[];
}
