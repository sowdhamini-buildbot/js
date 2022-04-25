//string methods

var personName = "sowdhamini";
var age = 24;

//length - returns the lenth of string
console.log(personName.length);

//slice- extracts a part of a string and return the extracts the string
console.log(personName.slice(0, 5));
console.log(personName.slice(5));

//replace- replace the value with new string
console.log(personName.replace("sowdhamini", "john"));

//UpperCase - convert the string into uppercase letters
console.log(personName.toUpperCase());

//LowerCase - convert the string into lowercase letters
console.log(personName.toLowerCase("SOWDHAMINI"));

//concat - joins two or more strings
console.log(personName.concat(" ", age));

//charAt - returns the character of the specified index of the string
console.log(personName.charAt(8));

//charCodeAt - returns the unicodecharacter of the specified index of the string
console.log(personName.charCodeAt(0));

//number methods
var number = 3.678;

//tostring - returns the number to string
console.log(number.toString());
console.log(typeof number.toString());

//toFixed - returns the string ,with number of decimals
console.log(number.toFixed(1));

//toPrecision - returns the string ,with specified length
console.log(number.toPrecision(3));

//valueof -retuens the value as number
console.log(number.valueOf());

//parseint - parses a string returns a number
console.log(parseInt("-3.45"));

//maxvalue - returns the max value of the number
console.log(Number.MAX_VALUE);

//minvalue - returns the min value of the number
console.log(Number.MIN_VALUE);

//arraymethods
array = ["blue", "green", "red"];
//tostring - return to string
console.log(array.length);

//join - joins the estring
console.log(array.join("*"));

//pop - remove last element in the array return the element it removed
console.log(array.pop());

//push - add the last element in the array and it will show the length
console.log(array.push("yellow"));

//shift  - remove the first element in the array returns the shifted element
console.log(array.shift());

//unshift - remove the first element in the array anit will show the length
console.log(array.unshift("pink"));

//conact - joins two arrays ,return the new array
console.log(array.concat("", "black"));

//slice - returns the slected elements in the array in the new array
console.log(array.slice(0, 3));

//splice - adds or remove the elements
console.log(array.splice(2, 0, "violet", "indigo"));

//sort - sort the elements of the array
console.log(array.sort());

//reverse - reverse the elements of the array
console.log(array.reverse());

//valueof - returns the value
console.log(array.valueOf());

//map - creates new array
var array1 = [23, 34, 45, 55, 67];
var x = array1.map(function (a, i) {
  return a * 2;
});
console.log(x);

var multiplication = [34, 56, 78, 33];
var x = multiplication.map(function (a) {
  return a * 2;
});
console.log(x);

//math Object
//math.pi-returns pi value
console.log(Math.PI);

//math.SQRT2 - returns the square root of 2
console.log(Math.SQRT2);

//math.SQRT1_2 - returns the square root of 1/2
console.log(Math.SQRT1_2);

//math.ln2 -returns the natural logarithm of 2
console.log(Math.LN2);

//math methods
//mathround - returns x rounded to nearest integer
console.log(Math.round(4.6));

//math.ceil - returns x rounded up to nearest integer
console.log(Math.ceil(4.9));

//math.floor - returns x rounded down to its nearest integer
console.log(Math.floor(4.7));

//math.trunc - returns the integer part of x
console.log(Math.trunc(3.4));

//math.sign - returns the sign value
console.log(Math.sign(-4));
