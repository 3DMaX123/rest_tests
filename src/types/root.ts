export interface IClassName {
    className?: string;
}

export interface IChildren {
    children: React.ReactNode
}

export type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;