import { combineReducers } from "redux";
import { catalog, ICatalogState } from './catalog';

export interface IGlobalState {
    catalog: ICatalogState
}

export const combined = combineReducers<IGlobalState>({
    catalog
})