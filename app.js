var express= require('express');
var appcontroller=require('./appcontroller');
var app=express();
var path=require('path');
app.listen(2000);
app.use(express.static(__dirname));
console.log("running");
appcontroller.appcontroller(app);
