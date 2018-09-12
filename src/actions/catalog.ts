import { ActionType } from "../common/actions";
import { ICategory } from '../common/content';

export function fillCat(categories: ICategory[]) {
    return {
        categories,        
        type: ActionType.fillCat,
    }
}