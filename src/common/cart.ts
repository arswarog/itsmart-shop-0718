import { IGood } from './content';

export interface ICartItem {
    good: IGood,
    quant: number,
    goodId: string,
}