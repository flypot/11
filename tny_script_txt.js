/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/



runClock()
setInterval('runClock()',1000)

function runClock(){
   var currentDay =new Date();
   var dateStr = currentDay.toLocaleDateString();
 var timeStr = currentDay.toLocaleTimeString();

 document.getElementById("dateNow").innerHTML =
 dateStr + "<br />" +timeStr;

var newYear=new Date("January 1, 2022")
 var nextYear= currentDay.getFullYear()+1;
 newYear.setFullYear(nextYear);
 var daysLeft =  (newYear - currentDay)/(1000*60*60*24)
var hrsLeft=(daysLeft-Math.floor(daysLeft))*24;
var minsLeft=(hrsLeft-Math.floor(hrsLeft))*60;
var secsLeft=(minsLeft-Math.floor(minsLeft))*60;
document.getElementById("days").textContent=Math.floor(daysLeft);
document.getElementById("hrs").textContent=Math.floor(hrsLeft);
document.getElementById("mins").textContent=Math.floor(minsLeft);
document.getElementById("secs").textContent=Math.floor(secsLeft);
 
}