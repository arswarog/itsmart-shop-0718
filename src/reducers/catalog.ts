import { List } from "immutable";
import { AnyAction } from "redux";
import { ICategory, IGood } from '../common/content';


export interface ICatalogState {
    groups: List<ICategory>,
    goods: List<IGood>,
}

export function catalog(state: ICatalogState, action: AnyAction) {
    if (!state) {
        const groups = testGroups();
        state = {
            goods: testGoods(groups),
            groups,
        }
    }
    return state;
}

function testGroups(): List<ICategory> {
    return List([{
        id: '1',
        name: 'group1',
        children: List([{
            id: '11',
            name: 'subgroup1',
        }, {
            id: '12',
            name: 'subgroup2',
        }])
    }, {
        id: '2',
        name: 'group2',
        children: List([{
            id: '21',
            name: 'subgroup3',
        }, {
            id: '22',
            name: 'subgroup4',
        }])
    }
    ]);
}

function testGoods(groups: List<ICategory>): List<IGood> {
    const children = ['11', '12', '21', '22'];
    const list: IGood[] = [];
    for (let i=0;i<10;i++) {;
        const groupIndex =  Math.floor(4*Math.random());
        list.push(
            {
                id: i.toString(),
                name: Math.random().toString(36).substr(2), 
                categoryId: children[groupIndex],
                description: 'blabla',
                price: Math.ceil(1000*Math.random()),
                image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-jnGqFW3Z2Ce3QysdG6EgdZfre1dIRP80ppVV49cpsJh-SEyzQmjyfNParggJcCpMnYK6wPafwA&usqp=CAc'

            }
        )
    }    
    return List(list);
}
