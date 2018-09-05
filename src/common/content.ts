import { List } from "immutable";

export interface IOptionsTitles {
    [key: string]: string;
}

export interface IOptions {
    [key: string]: string;
}

export interface IGood {
    id: string;
    name: string;
    categoryId: string;
    description: string;
    price: number;
    image: string;
    options?: IOptions;  
}

export interface ICategory {
    id: string;
    name: string;
    children?: List<ICategory>;
}
