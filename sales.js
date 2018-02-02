'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstPike = {
  loc: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCook: 6.3,
  perHour: [],
  netSales: 0,

  randomCust: function(){
    return Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  },
  makePerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      var random = Math.floor(this.randCust() * this.avgCook);
      this.perHour.push(random);
      this.netSales += random;
    }
  },
  makeTable: function(){
    this.makePerHour();
    var locEle = document.getElementById('loc1');
    var tableEle = document.createElement('ul');
    for (var i = 0; i < hours.length; i++){
      var rowEle = document.createElement('li');
      rowEle.textContent = hours[i] + ': ' + this.perHour[i] + ' salmon cookies';
      tableEle.appendChild(rowEle);
    }
    var totalEle = document.createElement('li');
    totalEle.textContent ='Total: ' + this.netSales;
    tableEle.appendChild(totalEle);
    locEle.textContent = this.loc;
    locEle.appendChild(tableEle);
  }
};
document.getElementById('loc1').addEventListener('click',function(){ showTable('loc1');});
function showTable(){
  {
    firstPike.makeTable();
  }
}
var seaTac= {
  loc: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCook: 1.2,
  perHour: [],
  netSales: 0,
  randomCust: function(){
    return Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  },
  makePerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      var random = Math.floor(this.randCust() * this.avgCook);
      this.perHour.push(random);
      this.netSales += random;
    }
  },
  makeTable: function(){
    this.makePerHour();
    var locEle = document.getElementById('loc2');
    var tableEle = document.createElement('ul');
    for (var i = 0; i < hours.length; i++){
      var rowEle = document.createElement('li');
      rowEle.textContent = hours[i] + ': ' + this.perHour[i] + ' salmon cookies';
      tableEle.appendChild(rowEle);
    }
    var totalEle = document.createElement('li');
    totalEle.textContent ='Total: ' + this.netSales;
    tableEle.appendChild(totalEle);
    locEle.textContent = this.loc;
    locEle.appendChild(tableEle);
  }
};
document.getElementById('loc2').addEventListener('click',function(){ showTable2('loc2');});
function showTable2(){
  {
    seaTac.makeTable();
  }
}
var center= {
  loc: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCook: 3.7,
  perHour: [],
  netSales: 0,
  randomCust: function(){
    return Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  },
  makePerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      var random = Math.floor(this.randCust() * this.avgCook);
      this.perHour.push(random);
      this.netSales += random;
    }
  },
  makeTable: function(){
    this.makePerHour();
    var locEle = document.getElementById('loc3');
    var tableEle = document.createElement('ul');
    for (var i = 0; i < hours.length; i++){
      var rowEle = document.createElement('li');
      rowEle.textContent = hours[i] + ': ' + this.perHour[i] + ' salmon cookies';
      tableEle.appendChild(rowEle);
    }
    var totalEle = document.createElement('li');
    totalEle.textContent ='Total: ' + this.netSales;
    tableEle.appendChild(totalEle);
    locEle.textContent = this.loc;
    locEle.appendChild(tableEle);
  }
};
document.getElementById('loc3').addEventListener('click',function(){ showTable3('loc3');});
function showTable3(){
  {
    center.makeTable();
  }
}

var hill= {
  loc: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCook: 2.3,
  perHour: [],
  netSales: 0,
  randomCust: function(){
    return Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  },
  makePerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      var random = Math.floor(this.randCust() * this.avgCook);
      this.perHour.push(random);
      this.netSales += random;
    }
  },
  makeTable: function(){
    this.makePerHour();
    var locEle = document.getElementById('loc2');
    var tableEle = document.createElement('ul');
    for (var i = 0; i < hours.length; i++){
      var rowEle = document.createElement('li');
      rowEle.textContent = hours[i] + ': ' + this.perHour[i] + ' salmon cookies';
      tableEle.appendChild(rowEle);
    }
    var totalEle = document.createElement('li');
    totalEle.textContent ='Total: ' + this.netSales;
    tableEle.appendChild(totalEle);
    locEle.textContent = this.loc;
    locEle.appendChild(tableEle);
  }
};
document.getElementById('loc4').addEventListener('click',function(){ showTable4('loc4');});
function showTable4(){
  {
    hill.makeTable();
  }
}

var alki= {
  loc: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCook: 4.6,
  perHour: [],
  netSales: 0,
  randomCust: function(){
    return Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  },
  makePerHour: function(){
    for (var i = 0; i < hours.length; i++) {
      var random = Math.floor(this.randCust() * this.avgCook);
      this.perHour.push(random);
      this.netSales += random;
    }
  },
  makeTable: function(){
    this.makePerHour();
    var locEle = document.getElementById('loc5');
    var tableEle = document.createElement('ul');
    for (var i = 0; i < hours.length; i++){
      var rowEle = document.createElement('li');
      rowEle.textContent = hours[i] + ': ' + this.perHour[i] + ' salmon cookies';
      tableEle.appendChild(rowEle);
    }
    var totalEle = document.createElement('li');
    totalEle.textContent ='Total: ' + this.netSales;
    tableEle.appendChild(totalEle);
    locEle.textContent = this.loc;
    locEle.appendChild(tableEle);
  }
};
document.getElementById('loc5').addEventListener('click',function(){ showTable5('loc5');});
function showTable5(){
  {
    alki.makeTable();
  }
}