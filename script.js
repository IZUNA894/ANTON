function searchloc(loc)
{
  //console.log("hello");
  //var loc = document.getElementById("loc").value;

  console.log(loc);
  //document.getElementById("loc").value="";
  //req_data(loc);
}
function update_table_curr(data)
{
  data = data.currently;
  var x= document.getElementById('curr_table_1');
  document.querySelector('#sunrise').innerHTML=data.sunrise;
  document.querySelector('#sunset').innerHTML=data.sunset;
// now setting currently weather curr_table_2
var y= document.getElementById('curr_table_2');
y.rows[0].cells[1].innerHTML=data.temprature + "&deg;";
y.rows[1].cells[1].innerHTML=data.humidity;
y.rows[2].cells[1].innerHTML=data.prec_prob;

document.getElementById("curr_icon").src=img_address(data.icon);
document.getElementById("curr_summary").innerHTML=data.summary;
}
function update_table_cards(data_main)
{
  var data = data_main.today;
  document.getElementById("card1_img").src=img_address(data.icon);
  document.getElementById("card1_temp").innerHTML=data.temperature + "&deg;C"
  document.getElementById("card1_head").innerHTML=data.day;
  var x= document.getElementById('card1_table');
  x.rows[0].cells[1].innerHTML=data.humidity;
  x.rows[1].cells[1].innerHTML=data.pressure;
  x.rows[2].cells[1].innerHTML=data.prec_prob;
  x.rows[3].cells[1].innerHTML=data.prec_inten +"mm/hr";
  x.rows[4].cells[1].innerHTML=data.prec_type;
  x.rows[5].cells[1].innerHTML=data.wind_speed + "m/s";
  x.rows[6].cells[1].innerHTML=data.temp_max +"&deg;C";
  x.rows[7].cells[1].innerHTML=data.temp_min + "&deg;C";
  x.rows[8].cells[1].innerHTML=data.sunrise;
  x.rows[9].cells[1].innerHTML=data.sunset;
  document.getElementById("card1_summ").innerHTML=data.summary;

  // making card  2 value update...
  data = data_main.tomarrow;
  document.getElementById("card2_img").src=img_address(data.icon);
  document.getElementById("card2_temp").innerHTML=data.temperature + "&deg;C"
  // console.log(data);
  document.getElementById("card2_head").innerHTML=data.day;
  x= document.getElementById('card2_table');
  console.log(x.rows[0].cells[1].innerHTML);
  x.rows[0].cells[1].innerHTML=data.humidity;
  x.rows[1].cells[1].innerHTML=data.pressure;
  x.rows[2].cells[1].innerHTML=data.prec_prob;
  x.rows[3].cells[1].innerHTML=data.prec_inten +"mm/hr";
  x.rows[4].cells[1].innerHTML=data.prec_type;
  x.rows[5].cells[1].innerHTML=data.wind_speed + "m/s";
  x.rows[6].cells[1].innerHTML=data.temp_max +"&deg;C";
  x.rows[7].cells[1].innerHTML=data.temp_min + "&deg;C";
  x.rows[8].cells[1].innerHTML=data.sunrise;
  x.rows[9].cells[1].innerHTML=data.sunset;
  document.getElementById("card2_summ").innerHTML=data.summary;

  // making card 3 value update...
  data = data_main.next_day;
  console.log(img_address(data.icon))
  document.getElementById("card3_img").src=img_address(data.icon);
  document.getElementById("card3_temp").innerHTML=data.temperature + "&deg;C"
  document.getElementById("card3_head").innerHTML=data.day;
  x= document.getElementById('card3_table');
  x.rows[0].cells[1].innerHTML=data.humidity;
  x.rows[1].cells[1].innerHTML=data.pressure;
  x.rows[2].cells[1].innerHTML=data.prec_prob;
  x.rows[3].cells[1].innerHTML=data.prec_inten +"mm/hr";
  x.rows[4].cells[1].innerHTML=data.prec_type;
  x.rows[5].cells[1].innerHTML=data.wind_speed + "m/s";
  x.rows[6].cells[1].innerHTML=data.temp_max +"&deg;C";
  x.rows[7].cells[1].innerHTML=data.temp_min + "&deg;C";
  x.rows[8].cells[1].innerHTML=data.sunrise;
  x.rows[9].cells[1].innerHTML=data.sunset;
  document.getElementById("card3_summ").innerHTML=data.summary;

}
// func to return img addres for curr_icon
function img_address(icon)
{
  if(icon=="clear-day")
  return "icons/3.1.png";
  if(icon=="clear-night")
  return "icons/3.2.png";
  if(icon== "rain")
  return "icons/3.3.png";
  if(icon=="snow")
  return "icons/3.4.3.png";
  if(icon=="sleet")
  return "icons/3.5.png";
  if(icon=="wind")
  return "icons/3.6.png";
  if(icon=="fog")
  return "icons/3.7.1.png"
  if(icon=="cloudy")
  return "icons/3.8.png";
  if(icon=="partly-cloudy-day")
  return "icons/3.9.png";
  if(icon=="partly-cloudy-night")
  return "icons/3.10.1.png";
  if(icon=="default")
  return "icons/3.12.png";


}

window.onload = function() {
  setInterval(change_time,1000);

  console.log($('#myForm'))
  $('#myForm').on('submit', (event) => {
    event.preventDefault();
    var pTag = document.querySelector("#loading");
    pTag.innerHTML= "Loading ...";
    console.log("in submit");
    var loc = event.target.elements[0].value;
    console.log(loc);
    // TODO do something here to show user that form is being submitted
    fetch('/' + loc ,function(req,res){
        console.log(res);
      })
      .then((resp) => resp.json())
      .then((body) => {
        console.log(body);
        this.update_table_cards(body);
        this.update_table_curr(body);
        var pTag = document.querySelector("#loading");
        pTag.innerHTML= "";
      })
      .catch((error) => {
      console.log("error");
      });
  });

};



function change_time()
{
    var time=new Date();
    var block = document.getElementById("time-block");
    block.innerHTML=time.toLocaleTimeString();
    //console.log(time.toLocaleTimeString());

}

 //window.onload=time_container();
console.log("we r here in script.js");
console.log(window);
