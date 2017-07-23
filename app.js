'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var storeForm = document.getElementById('store-form');
var salesTable = document.getElementById('cookieStores');
var myStores = [];

function StoreByLocation(location, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.location = location;
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
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++){

      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
    }
  };
  this.totalCookiesPerDay = 0;
  myStores.push(this);

  this.render = function() {
    var trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);

    for(var i = 0; i < hours.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
    }

    var tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(tdEl);

    salesTable.appendChild(trEl);
  }
  this.calcCookiesSoldEachHour();

};


new StoreByLocation('1st and Pike', 23, 65, 6.3);
new StoreByLocation('SeaTac Airport', 3, 24, 1.2);
new StoreByLocation('Seattle Center', 11, 38, 3.7);
new StoreByLocation('Capitol Hill', 20, 38, 2.3);
new StoreByLocation('Alki', 2, 16, 4.6);

function renderNewStore() {
  stores.innerHTML = '';

  for (var i = 0; i < myStores.length; i++) {
    stores.appendChild(myStores[i].render());
  }
};
function handleStoreSubmit(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var minCustomers = parseInt(event.target.minCustomers.value);
  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var avgCookiesPerSale = parseInt(event.target.avgCookiesPerSale.value);

  if (!event.target.location || !event.target.minCustomers || !event.target.maxCustomers || !event.target.avgCookiesPerSale) {
    return alert('Fields cannot be empty!');

  }
  var newStore = new StoreByLocation(location, minCustomers, maxCustomers, avgCookiesPerSale);

  event.target.location.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.avgCookiesPerSale.value = null;


  myStores.push(newStore);
  newStore.render();
};


function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'location';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily totals';
  trEl.appendChild(thEl);

  salesTable.appendChild(trEl);
}

function allCookies() {
  for(var i = 0; i < myStores.length; i++) {
    myStores[i].render();
  }
};


makeHeaderRow();
allCookies();

storeForm.addEventListener('submit', handleStoreSubmit);


// function storesInTheDOM() {
//   var storeList = document.getElementById('stores');
//   for(var i = 0; i < myStores.length; i++){
//     var liEl = document.createElement('li');
//     liEl.textContent = myStores[i].location;
//     storeList.appendChild(liEl);
//   }
// }
