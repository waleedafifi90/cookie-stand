var opningTime = [6,7,8,9,10,11,12,1,2,3,4,5,6,7];

var Seattle = {
    location: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    opningTime: opningTime,
    numberPerHour: generateRandomeCookies(this.minCustomer, this.maxCustomer),
    renderedArray: function() {
        for(var i = 0; i < this.opningTime.length; i++) {
            console.log(this.opningTime[i] + ':' + this.numberPerHour * Math.floor(this.avgCookies));
            this.numberPerHour = generateRandomeCookies(23, 65);
        }
    }
};

Seattle.renderedArray();

function generateRandomeCookies(min, max) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (max - min + 1)) + min;
}

