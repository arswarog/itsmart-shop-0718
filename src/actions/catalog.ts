import { ActionType } from "../common/actions";

export function addItem(text: string) {
    return {
        text,        
        type: ActionType.addItemAction,
    }
}
