const fs= require('fs');

fs.writeFile("output.txt","Writing File",(err)=>{
  if(err) console.log("error occured");
    else
    console.log("File writing successfully");
  
});

console.log("i am the best");