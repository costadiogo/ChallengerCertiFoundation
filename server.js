const server = require('./index');

const PORT = 3000;

server.listen(PORT, (error) => {

    if(error) {
        console.log(error);
    }
    console.log('Server started at http://localhost:3000');
})