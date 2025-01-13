//core modules
const path=require('path');

const express=require('express');
const hostRauter=express.Router();

hostRauter.get("/add-home", (req, res, next) => { // middleware function
  console.log(req.url, req.method);
  res.sendFile(path.join(__dirname, '../', 'views', 'addhome.html'));
});

hostRauter.post("/add-home", (req, res, next) => { 
  res.sendFile(path.join(__dirname, '../', 'views','homeadded.html'));
});

module.exports=hostRauter; 