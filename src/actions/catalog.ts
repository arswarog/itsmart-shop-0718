import { ActionType } from '../common/actions';
import { ICategory, IGood } from '../common/content';
import { AnyAction } from 'redux';

export function fillCat(categories: ICategory[]) {
    return {
        categories,
        type: ActionType.fillCat,
    }
}

export function fillGoods(goods: IGood[]) {
    return {
        goods,
        type: ActionType.fillGoods,
    }
}

export function getGoodsByCategory(id: string) {
    console.log('new cat id, need fetch ' + id);

    return (dispatch: (action: AnyAction) => void) => {
        if (id) {
            fetch('/api/cat/' + id).then(
                response => response.json()
            ).then(
                goods => dispatch({
                    type: ActionType.fillGoods,
                    goods,
                })
            )
        } else {
            dispatch({
                type: ActionType.fillGoods,
                goods: [],
            })
        };
    }
}