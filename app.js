'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];

function StoreByLocation(location, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersPerHour = [];

  this.calcCustomersPerHour = function(){
    for(var i = 0; i < hours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  };
  this.cookiesSoldEachHour = [];
  this.calcCookiesSoldEachHour = function(){
    // I need to multiply each value in customersPerHour * avgCookiesPerSale to generate the number of cookiesSoldEachHour
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++){
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];

    }

  };
  this.totalCookiesPerDay = 0;
  this.render = function(){
    var pikeList = document.getElementById('pike');
    this.calcCookiesSoldEachHour();

    for(var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      pikeList.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookiesPerDay + ' cookies';
    pikeList.appendChild(liEl);

  }
  allStores.push(this);
  this.calcCookiesSoldEachHour();
  this.render(allStores);
};
new StoreByLocation('1st and Pike', 23, 65, 6.3);
new StoreByLocation('SeaTac Airport', 3, 24, 1.2);
new StoreByLocation('Seattle Center', 11, 38, 3.7);
new StoreByLocation('Capitol Hill', 20, 38, 2.3);
new StoreByLocation('Alki', 2, 16, 4.6);


// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6


// function makeHeaderRow(){
//   var trEl = document.createElement('tr');
//
//   var thEl = document.createElement('th');
//   for(var i = 0; i < openHours.length; i++) {
//     var thEl = document.createElement('th');
//     thEl.textContent = openHours[i];
//     thEl.appendChild(thEl);
//   }
// }


// pike.customersPerHour();
// pike.cookiesPerHour();
// pike.render();

// var seatac = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookiesPerSale: 1.2,
//   hourlyCookies: [],
//
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < openHours.length; i++){
//       var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//
// cookiesPerDay: function(){
//   var total = 0;
//   for(var i = 0; i < this.hourlyCookies.length; i++){
//   total += this.hourlyCookies[i];
// }
// return total;
// },
// render: function(){
//   var seatacUL = document.getElementById('seatac');
//   for(var i = 0; i < openHours.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = openHours[i] + ': ' + seatac.hourlyCookies[i] + ' cookies this hour';
//     seatacUL.appendChild(liEl);
//   }
//   var total = document.getElementById('seatac');
//   var liEl = document.createElement('li');
//   liEl.textContent = 'total - ' + seatac.cookiesPerDay(total);
//   total.appendChild(liEl);
//
//  }
// };
//
// seatac.customersPerHour();
// seatac.cookiesPerHour();
// seatac.render();
//
// var seattleCenter = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookiesPerSale: 3.7,
//   hourlyCookies: [],
//
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < openHours.length; i++){
//       var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//
// cookiesPerDay: function(){
//   var total = 0;
//   for(var i = 0; i < this.hourlyCookies.length; i++){
//   total += this.hourlyCookies[i];
// }
// return total;
// },
// render: function(){
//   var scUL = document.getElementById('sc');
//   for(var i = 0; i < openHours.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = openHours[i] + ': ' + seattleCenter.hourlyCookies[i] + ' cookies this hour';
//     scUL.appendChild(liEl);
//   }
//   var total = document.getElementById('sc');
//   var liEl = document.createElement('li');
//   liEl.textContent = 'total - ' + seattleCenter.cookiesPerDay(total);
//   total.appendChild(liEl);
//
//  }
// };
//
// seattleCenter.customersPerHour();
// seattleCenter.cookiesPerHour();
// seattleCenter.render();
//
//
// var capitolHill = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookiesPerSale: 2.3,
//   hourlyCookies: [],
//
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < openHours.length; i++){
//       var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//
// cookiesPerDay: function(){
//   var total = 0;
//   for(var i = 0; i < this.hourlyCookies.length; i++){
//   total += this.hourlyCookies[i];
// }
// return total;
// },
// render: function(){
//   var chUL = document.getElementById('ch');
//   for(var i = 0; i < openHours.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = openHours[i] + ': ' + capitolHill.hourlyCookies[i] + ' cookies this hour';
//     chUL.appendChild(liEl);
//   }
//   var total = document.getElementById('ch');
//   var liEl = document.createElement('li');
//   liEl.textContent = 'total - ' + capitolHill.cookiesPerDay(total);
//   total.appendChild(liEl);
//
//  }
// };
//
// capitolHill.customersPerHour();
// capitolHill.cookiesPerHour();
// capitolHill.render();
//
// var alkiBeach = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiesPerSale: 4.6,
//   hourlyCookies: [],
//
//   customersPerHour: function(minCustomers, maxCustomers) {
//     return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
//   },
//   cookiesPerHour: function(){
//     for(var i = 0; i < openHours.length; i++){
//       var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
//       this.hourlyCookies.push(cookiesPer);
//     }
//     return this.hourlyCookies;
//   },
//
// cookiesPerDay: function(){
//   var total = 0;
//   for(var i = 0; i < this.hourlyCookies.length; i++){
//   total += this.hourlyCookies[i];
// }
// return total;
// },
// render: function(){
//   var alkiUL = document.getElementById('alki');
//   for(var i = 0; i < openHours.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = openHours[i] + ': ' + alkiBeach.hourlyCookies[i] + ' cookies this hour';
//     alkiUL.appendChild(liEl);
//   }
//   var total = document.getElementById('alki');
//   var liEl = document.createElement('li');
//   liEl.textContent = 'total - ' + alkiBeach.cookiesPerDay(total);
//   total.appendChild(liEl);
//
//  }
// };
//
// alkiBeach.customersPerHour();
// alkiBeach.cookiesPerHour();
// alkiBeach.render();


//     pikeUL.appendChild(liEl);
//   }
//   var total = document.getElementById('pike');
//   var liEl = document.createElement('li');
//   liEl.textContent = 'total - ' + pike.cookiesPerDay(total);
//   total.appendChild(liEl);
//
//  }
// };
