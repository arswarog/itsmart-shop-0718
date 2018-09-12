const express = require('express');

const app = express();

const cats = testGroups();
const flatCats = cats.reduce((list, cat) => [...list, ...cat.children], []);
const goods = testGoods(cats);

app.get('/api/cats', function (req, res) {
    res.send(cats);
});

app.get('/api/cat/:id', function (req, res) {
    const cat = flatCats.find(item => item.id === req.params.id);
    console.log(cat);
    console.log(goods);
    if (cat)
        res.json(goods.filter(item => item.categoryId === cat.id));
    else
        res.status(400).json({ error: 'Not found' })
});

app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
});




function testGroups() {
    return [
        {
            id: '1',
            name: 'group1',
            children: [{
                id: '11',
                name: 'subgroup1',
            }, {
                id: '12',
                name: 'subgroup2',
            }]
        }, {
            id: '2',
            name: 'group2',
            children: [{
                id: '21',
                name: 'subgroup3',
            }, {
                id: '22',
                name: 'subgroup4',
            }]
        }
    ];
}

function testGoods(groups) {
    const children = cats.reduce((list, cat) => [...list, ...cat.children], []).map(item => item.id);
    const list = [];
    for (let i = 0; i < 100; i++) {
        const groupIndex = Math.floor(children.length * Math.random());
        list.push(
            {
                id: i.toString(),
                name: Math.random().toString(36).substr(2),
                categoryId: children[groupIndex],
                description: 'blabla',
                price: Math.ceil(1000 * Math.random()),
                image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-jnGqFW3Z2Ce3QysdG6EgdZfre1dIRP80ppVV49cpsJh-SEyzQmjyfNParggJcCpMnYK6wPafwA&usqp=CAc'

            }
        )
    }
    return list;
}
