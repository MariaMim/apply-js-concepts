function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches infeet:', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadiInches infeet:', feet);

var naniInches = 156;
var feet = naniInches / 12;
console.log('naniInches infeet:', feet);

var nanaInches = 168;
var feet = nanaInches / 12;
console.log('nanaInches infeet:', feet);


//mile to km
function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilometer(26.2);
console.log('marathon in km:', marathon);