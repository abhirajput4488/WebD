// using http module to create server

const http = require('http');
const requestHandler=require('./user1.js');
const server=http.createServer( requestHandler);

const port=3001;
server.listen(port,() =>{
  console.log(`server running on adderss http://localhost:${port}`);
});