const http = require('http');
const fs= require('fs');

const server=http.createServer((req,res)=>{
  console.log(req.url , req.method);//sending request to server
// routing request


//taking input from user
if(req.url === '/'){
  res.setHeader('Content-Type','text/html');//sending response to client
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Enter your name </h1>');
  res.write('<form action="/submit-details" method="POST">');

  res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
  res.write('<label for="gender">Gender:</label><br>');
  res.write('<input type="radio" id="male" name="gender" value="male"/>');
  res.write('<label for="male">Male</label><br>');
  res.write('<input type="radio" id="female" name="gender" value="female"/>');
  res.write('<label for="female">Female</label><br>');

  res.write('<button type="submit">Submit</button>');

  res.write('</form>');
  

  res.write('</body>');
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
else if(req.url.toLowerCase() === '/submit-details' && req.method == "POST"){
  req.on('data',(chunk)=>{  //listening to data event or parsing data or getting data
    console.log(chunk);
  });
  fs.writeFileSync('user.txt','Abhishek Rao');
  res.statusCode=302;
  res.setHeader('Location','/');
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

const port=3001;
server.listen(port,() =>{
  console.log(`server running on adderss http://localhost:${port}`);
});