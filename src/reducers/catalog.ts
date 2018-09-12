import { List } from "immutable";
import { AnyAction } from "redux";
import { ICategory, IGood } from '../common/content';
import { ActionType } from '../common/actions';


export interface ICatalogState {
    groups: List<ICategory>,
    goods: List<IGood>,
}

export function catalog(state: ICatalogState, action: AnyAction) {
    if (!state) {
        state = {
            goods: List<IGood>(),
            groups: List<ICategory>(),
        }
    }

    switch (action.type) {
        case ActionType.fillCat:
            return {
                ...state,
                goods: List<IGood>(),
                groups: List<ICategory>(action.categories),                
            }

    }
    return state;
}


