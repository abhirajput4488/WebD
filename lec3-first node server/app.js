// const http = require('http');

// function requestListener(req,res){
//   console.log(req);
// }

// http.createServer(requestListener);  

// OR

const http = require('http');

const server=http.createServer((req,res)=>{
  console.log(req);
});

const port=3000;
server.listen(port,() =>{
  console.log(`server running on adderss http://localhost:${port}`);
});