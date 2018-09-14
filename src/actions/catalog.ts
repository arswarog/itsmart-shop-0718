import { ActionType } from "../common/actions";
import { ICategory, IGood } from '../common/content';

export function fillCat(categories: ICategory[]) {
    return {
        categories,        
        type: ActionType.fillCat,
    }
}

export function fillGoods(goods: IGood[]) {
    return {
        goods,        
        type: ActionType.fillGoods,
    }
}