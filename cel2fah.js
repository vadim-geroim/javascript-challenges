var readlineSync = require('readline-sync');
var degrees = readlineSync.question('Enter degrees in Celsius: ');
var degreesNum = Number(degrees);
degreesFahrenheit = 1.8 * degreesNum + 32;
console.log('It is ' + degreesFahrenheit + '!');