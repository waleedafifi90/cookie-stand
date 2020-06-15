var opningTime = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Store(location, minCustomer, maxCustomer, avgCookies, opningTime, totalCookies) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.opningTime = opningTime;
    this.numberPerHour = 0;
    this.totalCookies = totalCookies;
}

Store.prototype.renderedArray = function() {
    var parentElement = document.getElementById('SalesReport');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.location;
    article.appendChild(h2);

    var ul = document.createElement('ul');
    article.appendChild(ul);

    for(var i = 0; i < this.opningTime.length; i++) {

        var li = document.createElement('li');

        this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
        this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
        li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
        ul.appendChild(li);
    }

    var totlaLi = document.createElement('li');
    totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
    ul.appendChild(totlaLi);
};

var Seattle = new Store('Seattle', 23, 65, 6.3, opningTime, 0);
Seattle.renderedArray();

var Tokyo = new Store('Tokyo', 3, 24, 1.2, opningTime, 0);
Tokyo.renderedArray();

var Dubai = new Store('Dubai', 11, 38, 3.7, opningTime, 0);
Dubai.renderedArray();

var Paris = new Store('Paris', 20, 28, 2.3, opningTime, 0);
Paris.renderedArray();

var Lima = new Store('Seattle', 2, 16, 4.6, opningTime, 0);
Lima.renderedArray();

// var Seattle = {
//     location: 'Seattle',
//     minCustomer: 23,
//     maxCustomer: 65,
//     avgCookies: 6.3,
//     opningTime: opningTime,
//     totalCookies: 0,
//     numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
//     renderedArray: function() {
//         var parentElement = document.getElementById('SalesReport');

//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.location;
//         article.appendChild(h2);

//         var ul = document.createElement('ul');
//         article.appendChild(ul);

//         for(var i = 0; i < this.opningTime.length; i++) {

//             var li = document.createElement('li');

//             this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
//             this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
//             li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
//             ul.appendChild(li);
//         }

//         var totlaLi = document.createElement('li');
//         totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
//         ul.appendChild(totlaLi);
//     }
// };

// Seattle.renderedArray();


// var Tokyo = {
//     location: 'Tokyo',
//     minCustomer: 3,
//     maxCustomer: 24,
//     avgCookies: 1.2,
//     opningTime: opningTime,
//     totalCookies: 0,
//     numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
//     renderedArray: function() {
//         var parentElement = document.getElementById('SalesReport');

//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.location;
//         article.appendChild(h2);

//         var ul = document.createElement('ul');
//         article.appendChild(ul);

//         for(var i = 0; i < this.opningTime.length; i++) {

//             var li = document.createElement('li');

//             this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
//             this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
//             li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
//             ul.appendChild(li);
//         }

//         var totlaLi = document.createElement('li');
//         totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
//         ul.appendChild(totlaLi);
//     }
// };

// Tokyo.renderedArray();

// var Dubai = {
//     location: 'Dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookies: 3.7,
//     opningTime: opningTime,
//     totalCookies: 0,
//     numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
//     renderedArray: function() {
//         var parentElement = document.getElementById('SalesReport');

//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.location;
//         article.appendChild(h2);

//         var ul = document.createElement('ul');
//         article.appendChild(ul);

//         for(var i = 0; i < this.opningTime.length; i++) {

//             var li = document.createElement('li');

//             this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
//             this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
//             li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
//             ul.appendChild(li);
//         }

//         var totlaLi = document.createElement('li');
//         totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
//         ul.appendChild(totlaLi);
//     }
// };

// Dubai.renderedArray();


// var Paris = {
//     location: 'Paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgCookies: 2.3,
//     opningTime: opningTime,
//     totalCookies: 0,
//     numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
//     renderedArray: function() {
//         var parentElement = document.getElementById('SalesReport');

//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.location;
//         article.appendChild(h2);

//         var ul = document.createElement('ul');
//         article.appendChild(ul);

//         for(var i = 0; i < this.opningTime.length; i++) {

//             var li = document.createElement('li');

//             this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
//             this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
//             li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
//             ul.appendChild(li);
//         }

//         var totlaLi = document.createElement('li');
//         totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
//         ul.appendChild(totlaLi);
//     }
// };

// Paris.renderedArray();

// var Lima = {
//     location: 'Lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCookies: 4.6,
//     opningTime: opningTime,
//     totalCookies: 0,
//     numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
//     renderedArray: function() {
//         var parentElement = document.getElementById('SalesReport');

//         var article = document.createElement('article');
//         parentElement.appendChild(article);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.location;
//         article.appendChild(h2);

//         var ul = document.createElement('ul');
//         article.appendChild(ul);

//         for(var i = 0; i < this.opningTime.length; i++) {

//             var li = document.createElement('li');

//             this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
//             this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);
//             li.textContent = this.opningTime[i] + ' : ' + this.numberPerHour * Math.floor(this.avgCookies) + ' Cookies';
//             ul.appendChild(li);
//         }

//         var totlaLi = document.createElement('li');
//         totlaLi.textContent = 'Total : ' + this.totalCookies + ' Cookies';
//         ul.appendChild(totlaLi);
//     }
// };

// Lima.renderedArray();

function generateRandomeCookies(min, max) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (max - min + 1)) + min;
}

