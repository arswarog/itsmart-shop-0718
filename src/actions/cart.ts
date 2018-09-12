import { ActionType } from "../common/actions";
import { IGood } from '../common/content';

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