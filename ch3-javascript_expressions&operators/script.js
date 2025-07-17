"use strict";

// EXPRESSIONS AND OPERATORS IN JAVASCRIPT -

// What is Expressions in JavaScript ?
// JavaScript's expression is a valid set of literals, variables, operators, and expressions
// that evaluate a single value that is an expression.
// This single value can be a number, a string, or a logical value depending on the expression.


// What is operators in JavaScript ?
// Operators are used to assign values, compare values, perform arithmetic operations, and more.
// There are different types of JavaScript operators: Arithmetic Operators. Assignment Operators.

//example -
5 + 20;
// here 5 is operand, + is operator and 20 is operand.
// and combination of operator and operand are called expressions.

// To use " or ' quotations together which writing a string, we can use \ back slash.
// example -
let job = "i don't have"; // this is allowed.
let luck = 'does not favour'; // this is also allowed.
// but,
// let opportunities = "Are "not coming!!""; // this is not allowed.
//So, to fix this issue, use can use \ or `` backticks shown below -
let opportunities = `Finally, "Came !!!"`;
document.write(`opportunities? ${opportunities}`);

/*
    There are 7 types of Operators in JavaScript-

    1.Arithmetic Operators
    2.Assignment Operators
    3.Comparison Operators
    4.Logical Operators
    5.Bitwise Operators
    6.String Operators
    7.Miscellaneous Operators

*/


// *****  1) Assignment Operator -  *****
// Assignment Operator is used to assign a value to the left operand based on the value of right operand. 

// Example -
const x = 5;
//   x is left operand, = is assignment operator, 5 is right operand.
const y = 5;

// If you want to use === or == operator to compare x and y values then it will only work when they are not concatenated with anyone and is printed seperately. 

//Example -
console.log("Is x " + x + " equals to y " + y + "? " + (x === y)); // it returns false and does not prints the string in console.log which should not happen.This is happening because it is comparing the enrire string with y.
console.log(x === y); // it returns true.
console.log(x == y); // it returns true.
// Solution is use `` to solve the issue. Example:
console.log(`Is x and y are equal? ${x === y} \n\n\n`);
// We saw above that how the assignment operator '=', '==', and '===' works.


// *****  2) Arithmetic Operator -  *****
// Arithmetic Operators takes numerical values (either literals or variables) as their operands and
// returns a single numeric value.

console.log("3+3? " + 3 + 3); // here '+' is addition operator.
console.log(`3-3? ${3 - 3}`); // here '-' is substraction operator.
console.log("12/3? " + 12 / 3); // here '/' is division operator.
console.log("3*3? " + 3 * 3); // here '*' is multiplication operator.
console.log("3%3? " + (3 % 3) + "\n\n\n"); // here '%' is remainder operator. '%' is also called "modular operator".

// *** Important ***
// Increment and Decrement operator -
// Increment operator is used to increase the value of the operand either bt 1 or more. Example -
let xz = 5;
let numze = 12;
++xz; // prefix operator.
numze++; // postfix operator.
console.log(`Postfix and Prefix operators - `);
console.log(`Increased Valued prefix of xz = ${xz}`);
console.log(`Increased postfix value of numze = ${numze} \n\n`);

// There are 2 types of increment and decrement operators -
// postfix - operand++ / operand-- (example xz++ or xz--)
// prefix - ++operand / --operand (example ++xz or --xz)

// postfix is not clear as of now so will  add later
// prefix changes the value of the operand immediately when the increment or decreament operator is applied.

// *****  3) Comparison Operator -  *****
// Comparison operators are used in logical statements to determine equality or difference between variables or values. or
// Comparison operator compares it's operands and returns a logicaal value on
// weather the comparison is true or false.

const ab = 12;
const bc = "12";
const cc = 32;

console.log(`12 is equals to 12? ${12 == 12}`); // here '==' is quality operator. which check weather 2 operand are qeual or not.
console.log(`12's data type is equals to "12"s datatype?  ${12 === "12"}`); // here '===' is strict equality operator operator check weather the datatype of the operands are equal or not.
console.log('"12" is not equals to 32?' + bc != cc); // here '!=' is inequality operator.
// why "" does not work with above console.log()s?

console.log(`Is 12 greater than 11? ${12 > 11}`); //here '>' is greater than operator and '<' is lessthan.
console.log(`Is 12 greater than equals to 11? ${12 >= 11}`); // here '>=' is greater than equals to than operator and '<=' is less than equals to than operator.
console.log(`Is 12 less than 11? ${12 < 11}`); //here '<' is less than operator and '<' is lessthan.
console.log(`Is 12 less than equals to 11? ${12 <= 11} \n\n\n`); // here '<=' is greater than equals to than operator.

// *****  4) Logical Operator -  *****
// Logical operators are typically used with Boolean (logical/true/false) values.
// they return a boolean value.

let aa = 22;
let bf = 21;

// 1) Logical AND (&&) operator -
//  The Logical AND (&&) operator (Logicl Conjuction) is used to check if the set of operands is
// true including all of it's operands is true else it returns false. Example -

console.log(`is aa > bf and bf > 0? ${aa > bf && bf > 0}`); // it returns true because both the comparision is true.
console.log(`is aa > bf and bf > 0? ${aa > bf && bf < 0} \n\n`); // it returns false because one of the comparision is  invalid/false.

// 2) Logical OR (||) operator -
//  The Logical OR (||) operator (Logicl disjuction) is used to check if the set of operands is
// true including only one of it's operands is true else it returns false when all of the condition/comparision is false. Example -

console.log(`is aa > bf or bf >= 0? ${aa > bf || bf >= 0}`); // it returns true because both the comparision is true.
console.log(`is aa < bf or bf <= 0? ${aa < bf || bf <= 0}\n\n`); // it returns false because all of the comparision is  invalid/false.

// 3) Logical NOT (!) operator -
// Logical NOT (!) is used to check that the operands/conditios/ vise versa is not satisfing with the checking.
// it is also know as logical complememt/negation. Excample -

console.log(`is aa not equals to bf? ${aa != bf}`); // it returns true because the checking is satisfied.
console.log(`is aa not equals aa ${aa != aa}\n\n\n`); // it returns false because the checking is not satisfied.

// Challange time -

// What is output of 3**3?

console.log(`3**3? ${3 ** 3}`);
// here ** is to the power which is doing 3*9 or 3**3 = 27.

// what happens if we add a number with string?

console.log(`12 + "12" = ? ${12 + "12"}\n\n\n`);
// since the number is concatinated so we are getting 1212 ehich is a string.

// write a program to swap 2 numbers -
console.log(`Write a program to swap 2 numbers - `);
let num1 = 224;
let num2 = 443;
let thirdvar = num1; // 224;
num1 = num2; // 443;
num2 = thirdvar; // 224;

console.log(`num1 = ${num1}, num2 = ${num2}`);

// write a program to swap 2 numbers without usingthird variable -
console.log(`Write a program to swap 2 numbers without using 3rd variable - `);

let number = 112;
let number2 = 221;

number = number + number2;
number2 = number - number2;
number = number - number2;

console.log(`number1 = ${number}, number2 = ${number2}`);