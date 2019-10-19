var readlineSync = require('readline-sync')
var input = readlineSync.question("How many digits of FooBar shall I produce: ");

for (var i = 1; i <= Number(input); i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FooBar");
  }
  else if (i % 3 === 0) {
    console.log("Foo");
  }
  else if (i % 5 === 0) {
    console.log("Bar");
  }
  else {
    console.log(i);
  }
}
