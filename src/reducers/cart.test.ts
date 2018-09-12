import { cart } from './cart'
import { ActionType } from '../common/actions';
import { Map } from 'immutable';
import * as should from 'should';
import { IGood } from '../common/content';

describe('testreducers', () => {

    const good: IGood = {
        id: '1',
        name: 'qwerty',
        categoryId: '1',
        description: 'bla',
        price: 666,
        image: 'image',

    }


    it('init', () => {
        const result = cart(
            null as any,
            {
                type: 'asdasd'
            }
        );

        should(result.summ).equal(0);

        should(result.items.size).equal(0);
    })
    it('add item', () => {
        const result = cart(
            {
                summ: 0,
                items: Map(),
            }, {
                type: ActionType.buyGood,
                good
            }
        );

        should(result.summ).equal(good.price);

        should(result.items.size).equal(1);

        should(result.items.get(good.id)).eql({
            goodId: good.id,
            good,
            quant: 1,
        });
    })
    it('removeGood', () => {
        const result = cart(
            {
                summ: 2 * good.price,
                items: Map({
                    [good.id]: {
                        goodId: good.id,
                        good,
                        quant: 2,
                    }
                }),
            }, {
                type: ActionType.removeGood,
                good
            }
        );

        should(result.summ).equal(good.price);

        should(result.items.size).equal(1);

        should(result.items.get(good.id)).eql({
            goodId: good.id,
            good,
            quant: 1,
        });
    })

    it('deleteGood', () => {
        const result = cart(
            {
                summ: good.price,
                items: Map({
                    [good.id]: {
                        goodId: good.id,
                        good,
                        quant: 1,
                    }
                }),
            }, {
                type: ActionType.deleteGood,
                good
            }
        );

        should(result.summ).equal(0);

        should(result.items.size).equal(0);

    })


    describe('newtest', () => {

        it('clearTimeout', (done) => {

            // setTimeout(() => {
            //     /* tslint:disable */
            //     console.log('tock');
            // }, 500 )

            const h = setTimeout(() => {
                /* tslint:disable */
                throw new Error('aaaa!');
            }, 1000);

            clearTimeout(h);


            setTimeout(() => {
                /* tslint:disable */
                done();
            }, 2000);


        })

        it('callback hell', () => {
            

            // , (body: any) => {
            //     // console.log('ok1', body);
            //     // get('http://google.ru', (body: any) => {
            //     //     console.log('ok2', body);
            //     //     get('http://google.ru', (body: any) => {
            //             console.log('ok3', body);
            //             should(body.status).eql(200);
            //             done();
            //     //     });
            //     // });
            // });
        })

        it('promise', (done) => {

            get('http://google.ru')
                .then(
                    (body: object) => {
                        console.log('ok1', body);
                        return {status: 400};
                        // return get('http://google.ru');
                    },
                )
                .then(
                    (body: object) => {
                        console.log('ok2', body);
                        return get('http://google.ru');
                    },
                )
                .then(
                    (body: object) => {
                        console.log('ok3', body);
                        done();
                    },
                    error => {
                        throw new Error(error);
                    }
                )

        })

        it('async', async () => {
            const body1 = await get('http://google.ru');

            console.log('ok1', body1);

            await sleep(1000);
            
            const body2 = await get('http://google.ru');
            console.log('ok2', body2);
        })
    })


    function get(url: string): Promise<object> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve({
                status: 200
            }), 1000);
        });
    }

    function sleep(timeout: number): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve), timeout);
        });
    }