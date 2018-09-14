import { List } from "immutable";
import { AnyAction } from "redux";
import { ICategory, IGood } from '../common/content';
import { ActionType } from '../common/actions';


export interface ICatalogState {
    groups: List<ICategory>,
    goods: List<IGood>,
}

let newgoods: List<IGood> = List();

async function request(catID: string) {
    const response = await fetch('/api/cat/' + catID);
    newgoods = await response.json();
    /* tslint:disable */
    // store.dispatch({
    //   categories: body,
    //   type: ActionType.fillCat,
    // });
//    store.dispatch(fillGoods(body));
  
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
                goods: List<IGood>(state.goods),
                groups: List<ICategory>(action.categories),                
            }

    }

    switch (action.type) {
       
        case ActionType.fillGoods:
   
            request(action.catId);
            return {
                ...state,
                goods: List<IGood>(newgoods),
                groups: List<ICategory>(state.groups),                
            }

    }    

    return state;
}




