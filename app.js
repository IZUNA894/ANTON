var express= require('express');
var appcontroller=require('./appcontroller');
var app=express();
var path=require('path');
var port= process.env.PORT || 2000;
app.listen(port);
app.use(express.static(__dirname));
console.log("running");
appcontroller.appcontroller(app);
