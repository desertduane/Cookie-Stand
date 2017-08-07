'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var salesTable = document.getElementById('cookieStores');
var storeForm = document.getElementById('store-form');
var myStores = [];
var hourlySum = [];

function StoreByLocation(location, minCustomers, maxCustomers, avgCookiesPerSale) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersPerHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesPerDay = 0;

  this.calcCustomersPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
    }
  };
  this.calcCookiesSoldEachHour = function() {
    this.calcCustomersPerHour();
    for (var i = 0; i < hours.length; i++) {

      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiesPerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
    }
  };

  this.render = function() {
    this.calcCookiesSoldEachHour();
    var trEl = document.createElement('tr');

    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    salesTable.appendChild(trEl);

    for (var i = 0; i < hours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
      salesTable.appendChild(trEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(tdEl);
    salesTable.appendChild(trEl);
  };
  myStores.push(this);
}

new StoreByLocation('1st and Pike', 23, 65, 6.3);
new StoreByLocation('SeaTac Airport', 3, 24, 1.2);
new StoreByLocation('Seattle Center', 11, 38, 3.7);
new StoreByLocation('Capitol Hill', 20, 38, 2.3);
new StoreByLocation('Alki', 2, 16, 4.6);

function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'location';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Totals';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);
}

function footerRow() {
  for (var i = 0; i < hours.length; i++) {
    var sum = 0;
    for(var j = 0; j < myStores.length; j++){
      sum += myStores[j].cookiesSoldEachHour[i];
    }
    hourlySum.push(sum);
  }

  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Sum: ';
  trEl.appendChild(thEl);

  for (i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hourlySum[i];
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);

  }

  function grandTotal() {
    var grandSum = 0;
    for (i = 0; i < hours.length; i++) {
      grandSum += hourlySum[i];
    }
    return grandSum;
  }
  thEl = document.createElement('th');
  thEl.textContent = grandTotal();
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);
}

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

function renderNewStore() {
  stores.innerHTML = '';
  makeHeaderRow();
  for (var i = 0; i < myStores.length; i++) {
    myStores[i].render();
  }
  footerRow();
}

renderNewStore();
storeForm.addEventListener('submit', handleStoreSubmit);
