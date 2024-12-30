// const http = require('http');

// function requestListener(req,res){
//   console.log(req);
// }

// http.createServer(requestListener);  

// OR

const http = require('http');

const server=http.createServer((req,res)=>{
  console.log(req.url , req.method , req.headers);//sending request to server
// routing request
if(req.url === '/'){
  res.setHeader('Content-Type','text/html');//sending response to client
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Welcome to home </h1></body>');
  res.write('</html>');
  return res.end();
}
else if(req.url === '/products'){
  res.setHeader('Content-Type','text/html');//sending response to client
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>who I am  </h1></body>');
  res.write('</html>');
  return res.end();
}
else{
  res.setHeader('Content-Type','text/html');//sending response to client
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my node.js server who I am  </h1></body>');
  res.write('</html>');
  res.end();
}
});

const port=3000;
server.listen(port,() =>{
  console.log(`server running on adderss http://localhost:${port}`);
});