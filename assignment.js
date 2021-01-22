// https://github.com/Ivynasreen/basic-javascript

// Problem1: Kilometer To Meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var distance = kilometerToMeter(15);
console.log(distance)
var distance1 = kilometerToMeter(-20);

// Problem2: Budget Calculator
function budgetCalculator(watch , phone , laptop) {
    var totalPrice = (watch * 50 + phone * 100 + laptop * 500);
    return totalPrice;
}
var amount = budgetCalculator(10 , 5 , 2);
console.log(amount);

//  Problem3: Hotel Cost
function hotelCost(days) {
    var cost = 0;
    if(days <=10) {
        cost = days * 100;
    }
    else if(days <=20) {
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        cost = firstTenDays + secondTenDays;
    }
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10  * 80;
        var remaining = days - 20;
        var lastDays = remaining * 50;
        cost = firstTenDays + secondTenDays + lastDays;
    }
    return cost;
}
var rent = hotelCost(32);
console.log(rent);

// Problem 4: Mega Friend
function megaFriend(name) {
    var largerName = "";
    for (var i = 0 ; i<=name.length ; i++) {
        var element = name[i];
        if(element > largerName) {
            largerName = element;
        }
    }
    return largerName;
}
var name = ['Sushmina' , 'Solaiman' , 'Mohibbul' , 'Minakshi' , 'Rokibul'];
var output = megaFriend(name);
console.log(output);

// Extra:Bonus
function kilometerToMeter(kilometre) {
    var metre = kilometre * 1000;
    if (metre < 0) {
        console.log(result , "This is error");
    }
    return metre;
}
var result = kilometerToMeter(-30);
console.log(result);