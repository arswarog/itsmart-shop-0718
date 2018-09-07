import { ICartItem } from '../common/cart';
import { List } from 'immutable';
import { AnyAction } from 'redux';
import { ActionType } from '../common/actions';
import { IGood } from '../common/content';

export interface ICartState {
    items: List<ICartItem>,
    summ: number,
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
        return {
            ...state,
            items: state.items.push({goodId: action.good.id, good: action.good as IGood, quant: 1})

        } 
    }

    return state;
}