import React from "react";

export interface IClassName {
    className?: string;
}

export interface IChildren {
    children: React.ReactNode
}

export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

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
    alcohol?: boolean;
    drinks?: boolean;
    subType?: string;
}

export interface IMenuProp {
    menu: IMenu[];
}

export type ICommonTestStatuses = "start" | "test" | "result" | "end";
export interface IChangeTestStatuses {
    setStatus: (status: ICommonTestStatuses) => void;
}
