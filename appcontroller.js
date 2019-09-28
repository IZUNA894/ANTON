var mapbox=require('./mapbox');
module.exports.appcontroller = function(app)
{
  app.get('/',function(req,res)
  {
    res.sendFile(path.join(__dirname + '/index.html'));
    res.end();
  });
  app.get('/favicon.ico' , function(req,res)
  {
    //console.log(req.params.loc);
    //mapbox.giveCord(req.params.loc,res);
    //console.log("welcome to -" + req.params.loc);
    //res.send(2.png);
    res.end();
  });
  app.get('/:loc' , function(req,res)
  {
    //console.log(req.params.loc);
    mapbox.giveCord(req.params.loc,res);
    //console.log("welcome to -" + req.params.loc);
    //res.send("hello ji");
    //res.end();
  });
};
