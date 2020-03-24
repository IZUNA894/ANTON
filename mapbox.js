var req= require('request');
var transformURL = require('transform-url');
var chalk=require('chalk');
var weather = require('./weather.js');
module.exports ={

  giveCord:function(loc,response){
  params={
    loc:loc
  };

  console.log("mapbox key",process.env.MAPBOX_KEY);
  var url = transformURL("https://api.mapbox.com/geocoding/v5/mapbox.places/:loc.json",params);
  var mapbox_url=url + "?access_token=" + process.env.MAPBOX_KEY;
  //console.log(mapbox_url);
  req({url:mapbox_url,json:true} , (error,res)=>{

  if(error){
    console.log(chalk.red.inverse("unable to connect to geo service"));
  }
  else if(res.body.features.length == 0)
  {
    console.log(chalk.red.inverse("invalid cordinates"));
  }
  else{
  var data = res.body.features[0].center;

  weather.tempPrec(data[1],data[0],response,(error,dat)=>{
    if(error){
         console.log(error);
       }
       else{
       //console.log(chalk.cyan(dat));
       response.send(dat);
       response.end();
     }
     }

);
  }
});

}
};
