
const express = require('express');
let writtenNumber = require('written-number');


const PORT = 3000;
const server = express();

const router = express.Router();

server.use(router);

router.get('/', (req, res) => {

    res.send('Welcome to challenger of Certi Foundation');
    
});

router.get('/:id', (req, res) => {

    let value = req.params.id;

    let text = '';

    if (value >= -99999 && value <= -1) {
        text = 'menos ';

        text += writtenNumber(value * (-1), {lang: 'pt'});
        res.send({ 'extenso': text})
    } else if (value >= 0 && value <= 99999) {
        text += writtenNumber(value, {lang: 'pt'});
        res.send({ 'extenso': text})
    } else {
        res.send("O número digitado deve estar entre -99999 e 99999");
    }
})


server.listen(PORT, (error) => {

    if(error) {
        console.log(error);
    }
    console.log('Server started at http://localhost:3000');
})