var readlineSync = require('readline-sync');
var degrees = readlineSync.question('Enter degrees in Fahrenheit: ');
var degreesNum = Number(degrees);
degreesCelsius = (degreesNum - 32) * 5/9
console.log('It is ' + degreesCelsius + '!');