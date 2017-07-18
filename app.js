'use strict'

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  hourlyCookies: [],

  customersPerHour: function(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < openHours.length; i++){
      var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
      this.hourlyCookies.push(cookiesPer);
    }
    return this.hourlyCookies;
  },

cookiesPerDay: function(){
  var total = 0;
  for(var i = 0; i < this.hourlyCookies.length; i++){
  total += this.hourlyCookies[i];
}
return total;
},
render: function(){
  var pikeUL = document.getElementById('pike');
  for(var i = 0; i < openHours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = openHours[i] + ': ' + pike.hourlyCookies[i] + ' cookies this hour';
    pikeUL.appendChild(liEl);
  }
  var total = document.getElementById('pike');
  var liEl = document.createElement('li');
  liEl.textContent = 'total - ' + pike.cookiesPerDay(total);
  total.appendChild(liEl);

 }
};

pike.customersPerHour();
pike.cookiesPerHour();
pike.render();

var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerSale: 6.3,
  hourlyCookies: [],

  customersPerHour: function(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers;
  },
  cookiesPerHour: function(){
    for(var i = 0; i < openHours.length; i++){
      var cookiesPer = Math.floor(this.avgCookiesPerSale * this.customersPerHour());
      this.hourlyCookies.push(cookiesPer);
    }
    return this.hourlyCookies;
  },

cookiesPerDay: function(){
  var total = 0;
  for(var i = 0; i < this.hourlyCookies.length; i++){
  total += this.hourlyCookies[i];
}
return total;
},
render: function(){
  var pikeUL = document.getElementById('pike');
  for(var i = 0; i < openHours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = openHours[i] + ': ' + pike.hourlyCookies[i] + ' cookies this hour';
    pikeUL.appendChild(liEl);
  }
  var total = document.getElementById('pike');
  var liEl = document.createElement('li');
  liEl.textContent = 'total - ' + pike.cookiesPerDay(total);
  total.appendChild(liEl);

 }
};

pike.customersPerHour();
pike.cookiesPerHour();
pike.render();
