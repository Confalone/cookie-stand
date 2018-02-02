'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allLoc =[];

var totalCookiesByHour = 0;
var netTotal = 0;

function MakeLocation(
  loc,
  minCust,
  maxCust,
  avgCook
)  {
  this.loc = loc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.randomCustByHour = [];
  this.cookPerHour =  [];
  this.totalCookies = 0;
  allLoc.push(this);}
  this.calcRandCustByHour= funtion () {
   //methods   
  }
}

//functin Cookies (minCust, maxCust) {
//  this.minCust = minCust;
//  this.maxCust = maxCust;
//  this.avgCookies = function () {return (this.minCust - this.maxCust)*2}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(minCust);
    max = Math.floor(maxCust);
    return Math.floor(Math.random() * (max-min +1)) + min;
}
//call the functions in a function if you want
//this constructor function creates five new objects with their own unique values used in properties of this object (name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour)
function makeStands() {
    new MakeLocation("First and Pike", 23, 65, 6.3);
    new MakeLocation("SeaTac Airport", 3, 24, 1.2);
    //make one for each store
  }
  makeStands();
  
  //time to create the table in javascript
  //make header row
  //table needs an id in html
  
  function makeHeaderRow() {
    var cookiestands = document.getElementById("cookiestands");
    var trEl = document.createElement("tr");
    var thEl = document.createElement("th");
    trEl.appendChild(thEl);
  }
  
  //consider a for loop for the hours
  //create a th element
  //give the th element some text content like hours[i];
  //appendChild
  
  //create a th element
  //give the th element text content 'Daily Location Total'
  //append child
  
  //remeber to call makeHeaderRow();
  
var firstPike= new location ('1st andPike', 23,65,6.3);

var seaTac = new location ('SeaTac Airport', 3, 24, 1.2);

var seaCenter = new location ('Seattle Center', 11,38, 3.7);

var cHill = new location ('Capitol Hill', 20,38,2.3);

var Alki = new location ('Alki', 2, 16,4.6);

cookies ();
getRandomIntInclusive();