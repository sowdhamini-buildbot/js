//primitivetypes
var name = "sowdhamini"; //string- A sequence of characters that may consists of letters,numbers or symbols
var age = 23; //number - represents numeric values
var valueChecked = true; //boolean -represents true or false
var personName; //undefines - no value
var colouredDress = null; //null-represents an empty or unknown value

//derivedtypes
//object
let person = {
  name: "sowdhamini",
  age: 24,
};
console.log(person);
//dot notation-access the property of an object
console.log(person.name);
//array notation
console.log(person["age"]);

//array-used to strore list of values
let employeeNames = ["raju", "rani", "sita"];
console.log(employeeNames);
console.log(employeeNames[0]);

//function-used to perform particular task
function add(x, y) {
  console.log(x + y);
}
add(8, 9);

//loops-used to perform repeated tasks based on condition
//forloop-loops through block of code number of times
var i = 0;
for (i = 0; i <= 5; i++) {
  console.log(i);
}

//whileloop-loops through when the specified condition is true
var j = 6;
while (j <= 10) {
  console.log(j);
  j++;
}
//dowhileloop - if will execute the code once,before the condition
var s = 12;
do {
  console.log(s);
  s++;
} while (s < 12);

//break-jumps out of a loop
var h = 10;
for (h = 10; h <= 20; h++) {
  if (h == 15) break;
  console.log(h);
}
//continue - jumps over one iteration in the loop
var k = 0;
for (k = 0; k <= 5; k++) {
  if (k == 3) continue;
  console.log(k);
}

//forof- loops through values of an iterable object
let array = ["cars", "bikes"];
for (key of array) {
  console.log(key);
}
//forin -- loops over the properties of an array

const employeeDetails = {
  name: "john",
  name1: "raju",
};
for (key in employeeDetails) {
  console.log(key);
}

//ifstatement-specify the block of code if the specific condition is true
var ageLimit = 18;
if (ageLimit >= 18) {
  console.log("license allowed");
} else {
  console.log("not allowed");
}

//elseif-

var eligibleForLoan = 35;
if (eligibleForLoan > 18) {
  console.log("required documents");
} else if (eligibleForLoan > 45) {
  console.log("elgible for loan");
} else console.log("not eligible");

//switch - specify many alternatives block of code to be executed
var number = 5;
switch (number) {
  case 5:
    console.log("number5");
    break;
  case 10:
    console.log("number10");
    break;
  default:
    console.log("error");
}
