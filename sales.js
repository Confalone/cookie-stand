'use strict';
var sales = document.getElementById('cook-sales');
var tableFooter = document.getElementById('table-footer');
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allLoc =[];
var totHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function MakeLocation(
  loc,
  minCust,
  maxCust,
  avgCook
) {
  this.loc = loc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCook = avgCook;
  this.randomCustByHour = [];
  this.cookPerHour = [];
  this.totalCookies = 0;
  allLoc.push(this);


  this.calcRandCustByHour = function () {
    for (var i=0; i< hours.length; i++) {
      this.randomCustByHour.push(
        Math.floor(
          Math.random() * (this.maxCust - this.minCust + 1)
        ) + this.minCust
      );
      // console.log(this.randomCustByHour[i]);
    }
  },
  this.calcCookPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      var randnum = Math.round(this.avgCook * this.randomCustByHour[i]);
      this.cookPerHour.push(
        randnum
      );
      this.totalCookies+=randnum;
      // console.log(this.cookPerHour[i]);
    }
  },
  this.render = function (sales) {
    var makeRow = document.createElement('tr');
    var cellLoc = document.createElement('td');
    cellLoc.textContent = this.loc;
    makeRow.appendChild(cellLoc);

    for (var i = 0; i < hours.length; i++) {
      var makeCell = document.createElement('td');
      makeCell.textContent = this.cookPerHour[i];
      makeRow.appendChild(makeCell);
    }

    var cellTot = document.createElement('td');
    cellTot.textContent = this.totalCookies;
    makeRow.appendChild(cellTot);

    sales.appendChild(makeRow);
  };

  this.calcRandCustByHour();
  this.calcCookPerHour();
  this.render(sales);

  for (var i = 0; i < hours.length; i++) {
    totHour[i] += this.cookPerHour[i];
  }

}
function makeHeader(sales) {
  var makeRow = document.createElement('tr');
  var cellLoc = document.createElement('td');
  cellLoc.textContent = '';
  makeRow.appendChild(cellLoc);

  for (var i = 0; i < hours.length; i++) {
    var makeCell = document.createElement('td');
    makeCell.textContent = hours[i];
    makeRow.appendChild(makeCell);
  }

  var cellTot = document.createElement('td');
  cellTot.textContent = 'Total Cookies';
  makeRow.appendChild(cellTot);

  sales.appendChild(makeRow);
}
makeHeader(sales);


function makeStands(totHour) {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki', 2, 16, 4.6);
  //make one for each store
}
makeStands();

function makeFooter(sales) {
  var makeRow = document.createElement('tr');
  var cellLoc = document.createElement('td');
  cellLoc.textContent = 'Total';
  makeRow.setAttribute('id','footerRow');
  makeRow.appendChild(cellLoc);
  for (var i = 0; i < hours.length; i++) {
    var makeCell = document.createElement('td');
    makeCell.textContent = totHour[i];
    makeRow.appendChild(makeCell);
  }

  var cellTot = document.createElement('td');
  cellTot.textContent = 'Total Cookies';
  makeRow.appendChild(cellTot);

  tableFooter.appendChild(makeRow);
}
makeFooter(sales);


var cookForm = document.getElementById('cook-form');
//console.log(cookForm);

function handleAddStore(event) {
  event.preventDefault();

  var sales = document.getElementById('cookSales');
  // if(!event.target.loc.value ||event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcook.value) {
  //   return alert('Please add a store, the function only works well if u enter a store');
  // }

  var newLoc = event.target.loc.value;
  var newLocMinCust = parseInt(event.target.mincust.value);
  var newLocMaxCust = parseInt(event.target.maxcust.value);
  var newLocAvgCook = parseInt(event.target.avgcook.value);

  var newStore = new MakeLocation(newLoc, newLocMinCust, newLocMaxCust, newLocAvgCook);
  //console.log (newStore);
  var footerRow = document.getElementById('footerRow');
  //sales.removeChild(footerRow);

  newStore.render(allLoc.length -1);
  makeFooter();

  event.target.locname.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcook.value = null;
}

cookForm.addEventListener('submit', handleAddStore);