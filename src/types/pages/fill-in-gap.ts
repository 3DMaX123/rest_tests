export type IMenu =
{
    name: string;
    photo: string;
    weight: string;
    time: string;
    description: string;
    ingredients: string;
    ingByIng: string[];
    decoration: string;
    allergen: string[];
    type: string;
    url: string;
}

export interface IFillInGaps {
    menu: IMenu[];
}
