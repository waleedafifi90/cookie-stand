var opningTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var article = document.createElement('article');
var table = document.createElement('table');
var tbody = document.createElement('tbody');

var locationName = [];
var totalCookiesArray = [];

function Store(location, minCustomer, maxCustomer, avgCookies, opningTime, totalCookies, address, phone) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgCookies = avgCookies;
    this.opningTime = opningTime;
    this.numberPerHour = 0;
    this.totalCookies = totalCookies;
    this.cookiesPerHour = [];
    this.address = address;
    this.phone = phone;
    locationName.push(this);
}

Store.prototype.renderedArray = function () {
    var parentElement = document.getElementById('SalesReport');

    parentElement.appendChild(article);
    article.appendChild(table);

    var tr = document.createElement('tr');
    table.appendChild(tbody);
    tbody.appendChild(tr);

    var tdLocationName = document.createElement('td');
    tdLocationName.textContent = this.location;
    tr.appendChild(tdLocationName);

    for (var i = 0; i < this.opningTime.length; i++) {

        var td = document.createElement('td');

        this.numberPerHour = generateRandomeCookies(this.minCustomer, this.maxCustomer);
        this.totalCookies += Math.floor(this.numberPerHour * (this.avgCookies));

        this.cookiesPerHour.push(Math.floor(this.numberPerHour * (this.avgCookies)));

        td.textContent = Math.floor(this.numberPerHour * (this.avgCookies));
        tr.appendChild(td);
    }

    this.cookiesPerHour.push(this.totalCookies);
    totalCookiesArray.push(this.cookiesPerHour);
    var totlaLi = document.createElement('td');
    totlaLi.textContent = this.totalCookies;
    tr.appendChild(totlaLi);
};


var Seattle = new Store('Seattle', 23, 65, 6.3, opningTime, 0, 'House no.45 second floor, 5th cross', '+1 213 44335544');
Seattle.renderedArray();

var Tokyo = new Store('Tokyo', 3, 24, 1.2, opningTime, 0, 'House no.45 second floor, 5th cross', '+1 213 44335544');
Tokyo.renderedArray();

var Dubai = new Store('Dubai', 11, 38, 3.7, opningTime, 0, 'House no.45 second floor, 5th cross', '+1 213 44335544');
Dubai.renderedArray();

var Paris = new Store('Paris', 20, 28, 2.3, opningTime, 0, 'House no.45 second floor, 5th cross', '+1 213 44335544');
Paris.renderedArray();

var Lima = new Store('Lima', 2, 16, 4.6, opningTime, 0, 'House no.45 second floor, 5th cross', '+1 213 44335544');
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

    for (var i = 0; i < this.opningTime.length; i++) {
        var td = document.createElement('td');
        td.textContent = opningTime[i];
        tr.appendChild(td);
    }


    var b = [];

    for (i = 0; i < totalCookiesArray[0].length; i++) {
        count = 0;
        for (j = 0; j < totalCookiesArray.length; j++) {
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
    this.opningTime.shift('');


}

function generateRandomeCookies(min, max) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (max - min + 1)) + min;
}


var cookiesForm = document.getElementById('cookiesForm');
cookiesForm.addEventListener('submit', addNewBranch);

function addNewBranch(event) {
    event.preventDefault();

    var branchName = event.target.branchName.value;
    var minCustomer = event.target.minCustomer.value;
    var maxCustomer = event.target.maxCustomer.value;
    var avgCookies = event.target.avgCookies.value;

    var newStore = new Store(branchName, parseInt(minCustomer), parseInt(maxCustomer), avgCookies, opningTime, 0, '', '');
    newStore.renderedArray();
    // createTable();

    console.log(event.target.branchName.value);

}


// function indexStoreInformation() {
//     var parentElement = document.getElementById('ClassInformation');

//     console.log(locationName);
//     for(var i = 0; i < this.locationName.length; i++) {
//         var div1 = document.createElement('div');
//         parentElement.appendChild(div1);

//         var div2 = document.createElement('div');
//         div2.setAttribute('class', 'container');
//         div1.appendChild(div2);

//         var h2 = document.createElement('h2');
//         h2.textContent = this.locationName[i].location;
//         div2.appendChild(h2);

//         var div3 = document.createElement('div');
//         div2.appendChild(div3);

//         var p1 = document.createElement('p');
//         p1.textContent = 'Opening Time';
//         div3.appendChild(p1);

//         var p2 = document.createElement('p');
//         p2.textContent = '';
//         div3.appendChild(p2);

//         var p3 = document.createElement('p');
//         p3.textContent = this.locationName[i].address;
//         div2.appendChild(p3);

//         var img = document.createElement('img');
//         p3.appendChild(img);

//         var p4 = document.createElement('p');
//         p4.textContent = this.locationName[i].phone;
//         div2.appendChild(p4);

//         var img1 = document.createElement('img');
//         p4.appendChild(img1);

//     }
// }
// indexStoreInformation();