const sumRequest = (req,res) => {
console.log("In sum request handler ",req.url);

const body = [];
req.on('data', chunk => body.push(chunk));
req.on('end', () => {
  
  const parsedBody = Buffer.concat(body).toString();
  const params= new URLSearchParams(parsedBody);
  const bodyobj=Object.fromEntries(params);
  const result = Number(bodyobj.first) + Number(bodyobj.second);
  console.log(result);
  res.setHeader('Content-Type','text/html');//sending response to client
    res.write(`
      <html>
    <head><title>Prectice set</title></head>
    <body><h1>your sum is ${result} </h1>
    </body>
    </html>
    `);
return res.end();
});

}
exports.sumRequest = sumRequest;