import { combineReducers } from "redux";
import { catalog, ICatalogState } from './catalog';
import { cart, ICartState } from './cart';


export interface IGlobalState {
    catalog: ICatalogState,
    cart: ICartState,
}

export const combined = combineReducers<IGlobalState>({
    catalog,
    cart
})