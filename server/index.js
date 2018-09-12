const express = require('express');

const app = express();

app.get('/api/', function (req, res) {
    res.send({asd: 'Hello World!'});
});

app.listen(3000, function () {
    /* tslint:disable */
    console.log('Example app listening on port 3000!');
});
