const { sumRequest } =require('./sum');
const requestHandler=(req,res)=>{
  console.log(req.url , req.method);//sending request to server
 
  if (req.url === '/'){
    res.setHeader('Content-Type','text/html');//sending response to client
    res.write(`
      <html>
    <head><title>Prectice set</title></head>
    <body><h1>Welcome to calculator </h1>
    <a href="/calculator">Go to Calculator</a><br>
    </body>
    </html>
    `);
return res.end();
    }
    else if(req.url.toLowerCase() === '/calculator'){
      res.setHeader('Content-Type','text/html');//sending response to client
      res.write(`
        <html>
    <head><title>Prectice set</title></head>
    <body><h1>here is the calculator </h1>
    <form action="/calculate-result" method="POST">
    <input type="text" placeholder="Enter first number" name="first"/>
    <input type="text" placeholder="Enter second number" name="second"/>
    <input type="submit" value="Sum"/>
    </form>
    </body>
    </html>
      `);
  return res.end();
  }
  else if(req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
  return sumRequest(req,res);
  }
    res.setHeader('Content-Type','text/html');//sending response to client
    res.write(`
      <html>
    <head><title>Prectice set</title></head>
    <body><h1>404 Page does not exist </h1>
    <a href="/">Go to Home </a><br>
    </body>
    </html>
    `);
return res.end();
}

exports.requestHandler = requestHandler;