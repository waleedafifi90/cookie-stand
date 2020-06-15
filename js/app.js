var opningTime = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var article = document.createElement('article');
var table = document.createElement('table');
var tbody = document.createElement('tbody');

var locationName = [];
var totalCookiesArray = [];

function Store(location, minCustomer, maxCustomer, avgCookies, opningTime, totalCookies) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.opningTime = opningTime;
    this.numberPerHour = 0;
    this.totalCookies = totalCookies;
    this.cookiesPerHour = [];
    locationName.push(this);
}

Store.prototype.renderedArray = function() {
    var parentElement = document.getElementById('SalesReport');

    parentElement.appendChild(article);
    article.appendChild(table);

    var tr = document.createElement('tr');
    table.appendChild(tbody);
    tbody.appendChild(tr);

    var tdLocationName = document.createElement('td');
    tdLocationName.textContent = this.location;
    tr.appendChild(tdLocationName);

    for(var i = 0; i < this.opningTime.length; i++) {

        var td = document.createElement('td');

        this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
        this.totalCookies += this.numberPerHour * Math.floor(this.avgCookies);

        this.cookiesPerHour.push(this.numberPerHour * Math.floor(this.avgCookies));

        td.textContent = this.numberPerHour * Math.floor(this.avgCookies);
        tr.appendChild(td);
    }

    this.cookiesPerHour.push(this.totalCookies);
    totalCookiesArray.push(this.cookiesPerHour);
    var totlaLi = document.createElement('td');
    totlaLi.textContent = this.totalCookies;
    tr.appendChild(totlaLi);
};


var Seattle = new Store('Seattle', 23, 65, 6.3, opningTime, 0);
Seattle.renderedArray();

var Tokyo = new Store('Tokyo', 3, 24, 1.2, opningTime, 0);
Tokyo.renderedArray();

var Dubai = new Store('Dubai', 11, 38, 3.7, opningTime, 0);
Dubai.renderedArray();

var Paris = new Store('Paris', 20, 28, 2.3, opningTime, 0);
Paris.renderedArray();

var Lima = new Store('Lima', 2, 16, 4.6, opningTime, 0);
Lima.renderedArray();

createTable();

function createTable() {
    
    // console.log(this.locationName.length);

    this.opningTime.unshift('');
    
    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    var tfoot = document.createElement('tfoot');
    table.appendChild(tfoot);

    var footerRow = document.createElement('tr');
    tfoot.appendChild(footerRow);

    for(var i = 0; i < this.opningTime.length; i++) {
        var td = document.createElement('td');
        td.textContent = opningTime[i];
        tr.appendChild(td);
    }


    var b = [];
     	
    for(i = 0; i < totalCookiesArray[0].length; i++){						
        count = 0;
        for(j = 0; j < totalCookiesArray.length; j++){				
            count += totalCookiesArray[j][i];
        }
        b.push(count);
    }		
    console.log(b);

    b.unshift('Totals');
    for (var y = 0; y < b.length; y++) {
            var tdFoot = document.createElement('td');
            tdFoot.textContent = b[y];
            footerRow.appendChild(tdFoot);
    }

    console.log(totalCookiesArray);
    var totalTD = document.createElement('td');
    totalTD.textContent = "Daily Location Total";
    tr.appendChild(totalTD);

 
}

function generateRandomeCookies(min, max) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (max - min + 1)) + min;
}

