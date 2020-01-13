const express = require('express');
const scan = require('../core/scan.js')
const app = express();
let memberjson = require('../../members.json')


app.listen(3000);

app.get('/', (req,res) => {
    res.send(memberjson)
})