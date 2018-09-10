import { ICartItem } from '../common/cart';
import { List } from 'immutable';
import { AnyAction } from 'redux';
import { ActionType } from '../common/actions';
import { IGood } from '../common/content';

export interface ICartState {
    items: List<ICartItem>,
    summ: number,
}

function findItem(items: List<ICartItem>, goodId: string): ICartItem {
    return items.find((item: ICartItem) => item.goodId === goodId);
}

export function cart(state: ICartState, action: AnyAction) {
    if (!state) {
        state = {
            items: List<ICartItem>(),
            summ: 0
        }
    }
    switch (action.type) {
        case ActionType.buyGood:
            const foundItem = findItem(state.items, action.good.id);
            if (foundItem) {
                return {
                    ...state,
                    items: state.items.splice(state.items.indexOf(foundItem),1, { goodId: foundItem.good.id, good: foundItem.good as IGood, quant: foundItem.quant + 1 }),
                    summ: state.summ + action.good.price
                }
            } else {
                return {
                    ...state,
                    items: state.items.push({ goodId: action.good.id, good: action.good as IGood, quant: 1 }),
                    summ: state.summ + action.good.price
                }
            }
    }

    return state;
}