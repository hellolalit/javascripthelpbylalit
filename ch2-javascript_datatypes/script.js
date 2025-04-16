"use strict"; // my name is sabita

// DATA TYPES IN JAVASCRIPT -

// What is Data Types in Javascript?
// Data types describe the different types or kinds of data that we're gonna be working with
// and storing in variables. In Javascript, there are five basic, or primitive, types of data.
// The five most basic types of data are strings, numbers, booleans, undefined, and null.

// In Javascript, we exclusively do not define the data type of the variable seperately.
// It is because it can automatically determine the data type of a variable.
// Which can be a problem for a begonner to understand and in some cases for the experienced developer too.
// So, there is a typeof() operator in JavaScript which determins the data type of a variable.

//example -
// const prompt_age = prompt(" Please Enter Your Age = "); // we used prompt() to take input from the user in the browser.
// const age = parseInt(prompt_age); // Converted prompt_age to interger using parseInt().

const age = 32;

// The entire course documented is from Thapa technical Javascript Video and it either follows ES20 or ES21.

if (typeof age === "number") {
	console.log(" Your Data Type is number!");
} else {
	console.log(" Your Data Type is not number!");
}

// ***** PRIMITIVE Data Types *****

// There are 6 Data Types in JavaScript which are primitive types-
// *undefined : typeof instance === "undefined"
// *Boolean : typeof instance === "boolean"
// *Number : typeof instance === "number"
// *String : typeof instance === "string"
// *BigInt : typeof instance === "bigint"
// *Symbol : typeof instance === "Symbol"

// Let's Take a look at the datatypes one by one -
// Undefined Data Types -
let houseowner;
console.log(houseowner);
console.log(typeof houseowner);
// We can clearly see that upon printing the variable, it returns undefined and the typeof
// operator does the same thing. It is because there is no value assigned to the variable.

// Boolean Data Types -
const chair = true;
console.log(chair);
console.log(typeof chair);
// We can clearly see that upon printing the variable, it returns true and the typeof
// operator returns undefined. It is because there is no value assigned to the variable.
// And the condition matches whicb is true.

// Number Data Types -
const student_class = 12;
console.log(student_class);
console.log(typeof student_class);
// We can clearly see that upon printing the variable, it returns undefined and the typeof
// operator does the same thing. It is because there is no value assigned to the variable.

// String Data Types -
const founder = "binod";
console.log(founder);
console.log(typeof founder);
// We can clearly see that upon printing the variable, it returns undefined and the typeof
// operator does the same thing. It is because there is no value assigned to the variable.

// BigInt Data Types -
let biginteger = 212121212121212121212121212121212;
console.log(biginteger);
console.log(typeof biginteger);
// We can clearly see that upon printing the variable, it returns undefined and the typeof
// operator does the same thing. It is because there is no value assigned to the variable.

// Symbol Data Types -
let dimbol = "dimboll";
console.log(dimbol);
console.log(typeof dimboll);
// We can clearly see that upon printing the variable, it returns undefined and the typeof
// operator does the same thing. It is because there is no value assigned to the variable.

// *** Important ***

// When you add any number with any string then it will concatenate and display but in case of
// substracted, it will do the mathematical operation. Example -

console.log(9 + "6"); // The output is concatinated string
console.log(9 + "Car"); // The output is concatinated string

// But when we do substraction with a number inside "" which makes it string, it works and does the mathematical operation and it is a bug is Javascript-
console.log(200 - "12"); // The output is mathematical operation which is 118.
console.log(200 - "raju"); // The output is NaN which means not a number.
// This is because (maybe) when javascript tried to substract, it fould it not a number and returned NaN.

// Whe you add " " (which is a black single space) with any number and try to print then
// That blank space (be it single or moe than one) will be printed along with the number in a concatinated Form.
// Example -
console.log(" " + 12);

// Now, let's look at some interview Questions -

// 1) What is the difference between null and undefined in javascript?
//=> Answer - Undefined means a variable has been declared but has yet not been assigned a value.
// Null is an assignment value. It can be assigned to a variable as a representation of no value.

// 2) What is NaN in javascript?
// => Answer - NaN is a property of the global object. In other words, it is a variable in global scope. In modern browsers,
// NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.
// the initial value of NaN is Not a Number.
// Demostration -
const myNumber = 6270897643;
const muName = "Lila Raju";
console.log(isNaN(myNumber)); // Printing the variable result with isNaN() method to check the result.
console.log(isNaN(muName));
// Note - 1:09:52 hour is a doubt I could not understand in thapa technical.
console.log("str".isNaN() === NaN);

// ***** NON PRIMITIVE Data Types ******
// Objects are non primitive data types in Javascript.

// Arrays-

// What is an Array in Javascript?
// JavaScript Array is a single variable that is used to store elements of different data types. JavaScript arrays are zero-indexed. The Javascript Arrays are not associative in nature. Arrays are used when we have a list of items.

// Example -
let arr1 = [1, 2, 55, 67, 34];
console.log(typeof arr1);

// difference between index.js and script.js?

let z = 12;
let d = 12;
console.log("is z =12 ?", z == d);
