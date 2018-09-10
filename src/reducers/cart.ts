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
            const items = state.items.update(
                action.good.id,
                { goodId: action.good.id, good: action.good as IGood, quant: 0 },
                good => ({
                    ...good,
                    quant: good.quant + 1
                })
            );
            return {
                ...state,
                items,
                summ: items.reduce((sum: number, item: ICartItem) => sum + (item ? item.good.price * item.quant : 0), 0)
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