import { ActionType } from "../common/actions";
import { IGood } from '../common/content';

export function buyGood(good: IGood) {
    return {
        good,        
        type: ActionType.buyGood,
    }
}
