var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;
var today = Date.now();
var bday = new Date ('05 Mar 1998 23:00')

var y = Math.round(today / days);
var x = Math.round(bday.getTime() / days)
var dif = y-x
document.getElementById("demo").innerHTML = "<p>Tag </p>" + dif;
/* var birthday = new Date('Thu Mar 05 1998 23:00:00 GMT+0100 (W. Europe Standard Time)');
var date = Date(Date.now());
a = date.toString();
var statement = "";

var dif = date-birthday

window.document.write("<p>Innerhalb des JavaScripts</p>" + birthday + " - " + y;

switch (dif) {
    case (dif % 10 == 1):
    statement = "st day alive";
    break;

    case (dif % 10 == 2):
    statement = "nd day alive";
    break;

    case (dif % 10 == 3):
    statement = "rd day alive";
    break;

    case (dif % 10 > 3):
    statement = "th day alive";
    break;
}

window.document.write("This is your " + dif + statement) */
