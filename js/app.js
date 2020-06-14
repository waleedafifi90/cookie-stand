var opningTime = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var Seattle = {
    location: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    opningTime: opningTime,
    totalCookies: 0,
    numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
    renderedArray: function() {
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
    }
};

Seattle.renderedArray();


var Tokyo = {
    location: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    opningTime: opningTime,
    totalCookies: 0,
    numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
    renderedArray: function() {
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
    }
};

Tokyo.renderedArray()

function generateRandomeCookies(min, max) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (max - min + 1)) + min;
}

