import { ICartItem } from '../common/cart';
import { Map } from 'immutable';
import { AnyAction } from 'redux';
import { ActionType } from '../common/actions';
import { IGood } from '../common/content';

export interface ICartState {
    items: Map<string, ICartItem>,
    summ: number,
}

export function cart(state: ICartState, action: AnyAction): ICartState {
    if (!state) {
        state = {
            items: Map(),
            summ: 0
        }
    }
    switch (action.type) {
        case ActionType.buyGood:
            const itemsBuy = state.items.update(
                action.good.id,
                { goodId: action.good.id, good: action.good as IGood, quant: 0 },
                good => ({
                    ...good,
                    quant: good.quant + 1
                })
            );
            return {
                ...state,
                items: itemsBuy,
                summ: itemsBuy.reduce((sum: number, item: ICartItem) => sum + (item ? item.good.price * item.quant : 0), 0)
            }
        case ActionType.removeGood:
            const itemsRemove = state.items.update(
                action.good.id,
                { goodId: action.good.id, good: action.good as IGood, quant: 0 },
                good => ({
                    ...good,
                    quant: (good.quant > 1 ? good.quant - 1 : 1)
                })
            );
            return {
                ...state,
                items: itemsRemove,
                summ: itemsRemove.reduce((sum: number, item: ICartItem) => sum + (item ? item.good.price * item.quant : 0), 0)
            }        
        case ActionType.deleteGood:
            const itemsDelete = state.items.filter((item: ICartItem) => item.good.id !== action.good.id) as Map<string, ICartItem>;
            return {
                ...state,
                items: itemsDelete,
                summ: itemsDelete.reduce((sum: number, item: ICartItem) => sum + (item ? item.good.price * item.quant : 0), 0)
            }  
        case ActionType.emptyCart:
            return {
                ...state,
                items: Map<string, ICartItem>(),
                summ: 0
            }                  


        //    //         const foundItem = state.items.find((item: ICartItem) => item.goodId === action.good.id);
        //             if (foundItem) {
        //                 return {
        //                     ...state,
        //  //                   items: state.items.splice(state.items.indexOf(foundItem), 1, { goodId: foundItem.good.id, good: foundItem.good as IGood, quant: foundItem.quant + 1 }) as List<ICartItem> ,
        //                 items: state.items.update(action.good.id)
        //                     summ: state.summ + action.good.price
        //                 }
        //             } else {
        //                 return {
        //                     ...state,
        // //                    items: state.items.push({ goodId: action.good.id, good: action.good as IGood, quant: 1 }),
        //                     summ: state.summ + action.good.price
        //                 }
        //             }
    }

    return state;
}