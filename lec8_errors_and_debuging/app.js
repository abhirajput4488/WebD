// using http module to create server

const http = require('http');
const testingsyntex=require('./syntex');
const testinglogical=require('./logical');
const testingruntime=require('./runtime');
const server=http.createServer( (req,res)=>{
  console.log(req.url , req.method);
  testingsyntex();
  testinglogical();
  testingruntime();
});

const port=3003;
server.listen(port,() =>{
  console.log(`server running on adderss http://localhost:${port}`);
});