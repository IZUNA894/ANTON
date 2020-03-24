var mapbox=require('./mapbox');
var url = require('url');
var path = require('path');
module.exports.appcontroller = function(app)
{
  app.get('/',function(req,res)
  {

    console.log(path.join(__dirname,'index.html'));
    //res.send("kal");
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname,'index.html'));
    //res.end();
  });
  
  app.get('/lform',function(req,res)
  {
    var q=url.parse(req.url , true);
    var qData = q.query;
    console.log("req recieved for "  + qData.loc);
      mapbox.giveCord(qData.loc,res);
    //res.end();
  })
  
  app.get('/:loc' , function(req,res)
  {
    //console.log(req.params.loc);
    mapbox.giveCord(req.params.loc,res);
    //console.log("welcome to -" + req.params.loc);
    //res.send("hello ji");
    //res.end();
  });
};
