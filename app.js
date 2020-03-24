var express= require('express');
var appcontroller=require('./appcontroller');
var cors = require('cors');

var app=express();
app.use(cors());
var path=require('path');
var port= process.env.PORT || 3000;
app.listen(port);
app.use(express.static(__dirname));
console.log("running");
appcontroller.appcontroller(app);
