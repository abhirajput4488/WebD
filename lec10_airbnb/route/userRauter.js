//core modules
const path=require('path');

//external modules
const express=require('express');
const userRauter=express.Router();

userRauter.get("/",(req ,res ,next) =>{
  res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));
});
module.exports=userRauter; 