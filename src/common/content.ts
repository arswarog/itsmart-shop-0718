
interface IOptionsTitles {
    [key: string]: string;
}

interface IOptions {
    [key: string]: string;
}

interface IGood {
    id: string;
    name: string;
    categoryId: string;
    description: string;
    price: number;
    image: string;
    options?: IOptions;  
}

interface ICategory {
    id: string;
    name: string;
    children?: ICategory[];
}
