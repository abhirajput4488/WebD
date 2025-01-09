//third party module or external module
const express = require('express'); // import express module

//user defined module or local module
const requestHandler=require('./user1.js');

const  app=express(); // create express app

app.get("/",(req , res , next)=>{ // middleware function
    console.log("first middleware" , req.url , req.method);
    next();
    });
app.get("/submit-details",(req , res , next)=>{
    console.log("second middleware" , req.url , req.method);
    res.send(
      `<h1>Please enter your details📝📝</h1>
      <form action="/submit-details" method="POST">
      <input type="text" name="username" placeholder="Enter your name">
      <input type="email" name="email" placeholder="Enter your email">
      <button type="submit">Submit</button>
    `);
    });
app.post("/submit-details",(req , res , next)=>{
    console.log("second middleware" , req.url , req.method);
    res.send('<h1>Ruko jara sabar karo handel karte hai 😊😊</h1>');
    });

    // app.use("/",(req , res , next)=>{ // middleware function
    //   console.log("anouther middleware" , req.url , req.method); 
    //   res.send('<p>came anouther middleware</p>'); 
    //   });


const port=3003;
app.listen(port,() =>{
  console.log(`server running on adderss http://localhost:${port}`);
});