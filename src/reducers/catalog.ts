import { AnyAction } from "redux";

export interface ICatalogState {
    name?: string;

}


export function catalog (state: ICatalogState, action: AnyAction) {
    return state;
}