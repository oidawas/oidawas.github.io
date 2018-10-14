var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
var today = Date.now();
var bday = new Date ('05 Mar 1998 23:00')

var y = Math.round(today / days);
var x = Math.round(bday.getTime() / days)
var dif = y-x

document.getElementById("days").innerHTML = dif + ".";
