const http = require('http');
const app = require('./app');
require('./dbConnection');
require('./dummyData');

// setting up config file 

const PORT =  4000;

const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`PORT is listening at ${PORT}`);

});