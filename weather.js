var req = require('request');
var chalk=require('chalk');
module.exports.tempPrec = function(latitude,longitude,res,callback)
{
  var dark_sky_url= 'https://api.darksky.net/forecast/46c9559af34380beca4b2a13c40602b9/' + latitude +"," + longitude;
  // after changing units
  dark_sky_url= dark_sky_url + "?units=si";
  //console.log(dark_sky_url);

  req({url : dark_sky_url,json:true} ,(error,res)=>{
    if(error){
    callback(error,undefined);
    }
    else if(res.body.error)
    {
      console.log(dark_sky_url);
      callback(res.body.error,undefined);
    }
    else{
    var body = res.body;
    var curr=body.currently;
    var daily=body.daily.data;
    var data= {
      currently:{
                  temprature:curr.temperature,
                  humidity:curr.humidity,
                  prec_prob:curr.precipProbability,
                  sunrise:give_time(daily[0].sunriseTime),
                  sunset:give_time(daily[0].sunsetTime),
                  summary:curr.summary,
                  icon:curr.icon

                },
    today:{
      day:calc_day(daily[0].time),
      temperature:((daily[0].temperatureMin+daily[0].temperatureMax)/2).toFixed(1),
      humidity:daily[0].humidity,

      pressure:daily[0].pressure,
      prec_prob:daily[0].precipProbability,
      prec_inten:daily[0].precipIntensity,
      prec_type:daily[0].precipType,
      wind_speed:daily[0].windSpeed,
      temp_max:daily[0].temperatureMax,
      temp_min:daily[0].temperatureMin,
      sunrise:give_time(daily[0].sunriseTime),
      sunset:give_time(daily[0].sunsetTime),
      summary:daily[0].summary,
      icon:daily[0].icon
    },
    tomarrow:{
      day:calc_day(daily[1].time),
      humidity:daily[1].humidity,
      temperature:((daily[1].temperatureMin+daily[1].temperatureMax)/2).toFixed(1),
      pressure:daily[1].pressure,
      prec_prob:daily[1].precipProbability,
      prec_inten:daily[1].precipIntensity,
      prec_type:daily[1].precipType,
      wind_speed:daily[1].windSpeed,
      temp_max:daily[1].temperatureMax,
      temp_min:daily[1].temperatureMin,
      sunrise:give_time(daily[1].sunriseTime),
      sunset:give_time(daily[1].sunsetTime),
      summary:daily[1].summary,
      icon:daily[1].icon
    },
    next_day:{
      day:calc_day(daily[2].time),
      humidity:daily[2].humidity,
      temperature:((daily[2].temperatureMin+daily[2].temperatureMax)/2).toFixed(1),
      pressure:daily[2].pressure,
      prec_prob:daily[2].precipProbability,
      prec_inten:daily[2].precipIntensity,
      prec_type:daily[2].precipType,
      wind_speed:daily[2].windSpeed,
      temp_max:daily[2].temperatureMax,
      temp_min:daily[2].temperatureMin,
      sunrise:give_time(daily[2].sunriseTime),
      sunset:give_time(daily[2].sunsetTime),
      summary:daily[2].summary,
      icon:daily[2].icon
    }

    }
    //console.log(chalk.red.inverse(data.tomarrow.temperature));
    //var data2 = JSON.parse(JSON.stringify(data));
    //console.log(chalk.cyan.inverse(data2));
    callback(undefined, JSON.stringify(data));
    //callback(undefined,"zero signal");
  }
  });

}
function calc_day(time)
{
  var d=new Date(time*1000);
  var options = { weekday: 'long'};
  return (new Intl.DateTimeFormat('en-US', options).format(d));
}
function give_time(value)
{
  var d = new Date(value*1000);
  return (d.toLocaleTimeString());
}
