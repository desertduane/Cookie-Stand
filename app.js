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

var seatac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerSale: 1.2,
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
  var seatacUL = document.getElementById('seatac');
  for(var i = 0; i < openHours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = openHours[i] + ': ' + seatac.hourlyCookies[i] + ' cookies this hour';
    seatacUL.appendChild(liEl);
  }
  var total = document.getElementById('seatac');
  var liEl = document.createElement('li');
  liEl.textContent = 'total - ' + seatac.cookiesPerDay(total);
  total.appendChild(liEl);

 }
};

seatac.customersPerHour();
seatac.cookiesPerHour();
seatac.render();

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerSale: 3.7,
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
  var scUL = document.getElementById('sc');
  for(var i = 0; i < openHours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = openHours[i] + ': ' + seattleCenter.hourlyCookies[i] + ' cookies this hour';
    scUL.appendChild(liEl);
  }
  var total = document.getElementById('sc');
  var liEl = document.createElement('li');
  liEl.textContent = 'total - ' + seattleCenter.cookiesPerDay(total);
  total.appendChild(liEl);

 }
};

seattleCenter.customersPerHour();
seattleCenter.cookiesPerHour();
seattleCenter.render();


var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerSale: 2.3,
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
  var chUL = document.getElementById('ch');
  for(var i = 0; i < openHours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = openHours[i] + ': ' + capitolHill.hourlyCookies[i] + ' cookies this hour';
    chUL.appendChild(liEl);
  }
  var total = document.getElementById('ch');
  var liEl = document.createElement('li');
  liEl.textContent = 'total - ' + capitolHill.cookiesPerDay(total);
  total.appendChild(liEl);

 }
};

capitolHill.customersPerHour();
capitolHill.cookiesPerHour();
capitolHill.render();

var alkiBeach = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerSale: 4.6,
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
  var alkiUL = document.getElementById('alki');
  for(var i = 0; i < openHours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = openHours[i] + ': ' + alkiBeach.hourlyCookies[i] + ' cookies this hour';
    alkiUL.appendChild(liEl);
  }
  var total = document.getElementById('alki');
  var liEl = document.createElement('li');
  liEl.textContent = 'total - ' + alkiBeach.cookiesPerDay(total);
  total.appendChild(liEl);

 }
};

alkiBeach.customersPerHour();
alkiBeach.cookiesPerHour();
alkiBeach.render();
