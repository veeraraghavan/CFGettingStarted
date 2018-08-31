'use strict';
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
let port = process.env.PORT || 3000;
 app.listen(port,function(){
    console.log("Server listening at "+port);
 });
 require("./server/api/distance.js")(app);
 app.get("/",function(req,res){
     res.json({
         "message":"Distance Calculator App Up - Unfortunately not functional yet"
     });

 })