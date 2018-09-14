import { ActionType } from "../common/actions";
import { IGood } from '../common/content';
import { ICartItem } from '../common/cart';
import { AnyAction } from 'redux';
import { Map } from "immutable";

export function buyGood(good: IGood) {
    return {
        good,
        type: ActionType.buyGood,
    }
}

export function removeGood(good: IGood) {
    return {
        good,
        type: ActionType.removeGood,
    }
}

export function deleteGood(good: IGood) {
    return {
        good,
        type: ActionType.deleteGood,
    }
}




export function order(items: Map<string, ICartItem>) {

    return (dispatch: (action: AnyAction) => void) => {

        fetch('/api/order/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items.map((item: ICartItem) => ({goodId: item.goodId, quant: item.quant}) )
        .toArray())
        }).then(
            response => response.json()
        ).then(
            body => dispatch({
                type: ActionType.emptyCart
            })
        )
    };
}
