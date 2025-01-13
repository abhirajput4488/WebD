const path = require('path'); 
const express = require('express'); // import express module

//local module
const userRauter=require("./route/userRauter");
const hostRauter=require("./route/hostRauter");

const app = express(); // create express app

app.use(express.urlencoded()); 
app.use(userRauter);
app.use("/host",hostRauter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'views','404notfound.html'));
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
