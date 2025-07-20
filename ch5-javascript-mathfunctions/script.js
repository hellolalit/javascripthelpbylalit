"use strict";

// *** taken from tutorial point ***

// Javascript Math Objects-
// The math objects provides you properties and methods for mathematical constants and functions. Unlike other global objects, Math is not a constructor. All properties and methods of Math are static and can be called by using Math as an object without creating it.

// Thus, you refer to the constant pi as Math.PI and you call the sine function as Math.sin(x), where x is the method's argument.

// Syntax
// The syntax to call the properties and methods of Math are as follows

var pi_val = Math.PI;
var sine_val = Math.sin(30);
console.log(`Pi Value = ${pi_val} \n Sine Vale = ${sine_val}`);

/* 
 Math Properties
 Here is a list of all the properties of Math and their description.

 Sr.No.	Property &  Description
 1	    E \         Euler's constant and the base of natural logarithms, approximately 2.718.

 2	    LN2         Natural logarithm of 2, approximately 0.693.

 3	    LN10        Natural logarithm of 10, approximately 2.302.

 4	    LOG2E       Base 2 logarithm of E, approximately 1.442.

 5	    LOG10E      Base 10 logarithm of E, approximately 0.434.

 6	    PI          Ratio of the circumference of a circle to its diameter, approximately 3.14159.

 7	    SQRT1_2     Square root of 1/2; equivalently, 1 over the square root of 2, approximately 0.707.

 8	    SQRT2       Square root of 2, approximately 1.414.

 In the following sections, we will have a few examples to demonstrate the usage of Math properties. */

/*
Math Methods
Here is a list of the methods associated with Math object and their description

Sr.No.	Method & Description
1	abs()
Returns the absolute value of a number.

2	acos()
Returns the arccosine (in radians) of a number.

3	asin()
Returns the arcsine (in radians) of a number.

4	atan()
Returns the arctangent (in radians) of a number.

5	atan2()
Returns the arctangent of the quotient of its arguments.

6	ceil()
Returns the smallest integer greater than or equal to a number.

7	cos()
Returns the cosine of a number.

8	exp()
Returns EN, where N is the argument, and E is Euler's constant, the base of the natural logarithm.

9	floor()
Returns the largest integer less than or equal to a number.

10	log()
Returns the natural logarithm (base E) of a number.

11	max()
Returns the largest of zero or more numbers.

12	min()
Returns the smallest of zero or more numbers.

13	pow()
Returns base to the exponent power, that is, base exponent.

14	random()
Returns a pseudo-random number between 0 and 1.

15	round()
Returns the value of a number rounded to the nearest integer.

16	sin()
Returns the sine of a number.

17	sqrt()
Returns the square root of a number.

18	tan()
Returns the tangent of a number.

19	toSource()
Returns the string "Math". */

// In the following sections, we will have a few examples to demonstrate the usage of the methods associated with Math.

// Let's see some examples -

// Finding the value of PI -

let Pivalue = Math.PI;
console.log(Pivalue); // we saw what is the value of PI.

// Now, let's try to pass something inside PI() -

// let Pivalue2 = Math.PI(13);
// console.log(Pivalue2); this throws an error BECAUSE Math.PI is not a function.

// Now, let's find round of any number -

let number = 12.04474839;
let num2 = 1.89373;
let num3 = 12.5;
console.log(` \n\n Round of ${number} = ${Math.round(number)}`);
console.log(` Round of ${num2} = ${Math.round(num2)}`);
console.log(` Round of ${num3} = ${Math.round(num3)}`);

// Now, let's find power(outcome of how many times that number gets multiplied) any number -

let n = 12;
console.log(` \n\nPower of ${n} = ${Math.pow(n, 12)}`);
console.log(`Power of ${n} using "**" operator= ${n ** 12}`);
console.log("Both outputs the same result! ");

// Now, let's find square root of any number -
let n2 = 25;
console.log(`\n\nSquare root of ${n2} = ${Math.sqrt(n2)}`);
console.log(`Square root of ${45} = ${Math.sqrt(45)}`);

// Now, let's find absolute (converts any -sign no to +sign no) of any number -
console.log(`\n\nAbsolute of -56.34679 = ${Math.abs(-56.34679)}`);
console.log(`Absolute of -58 = ${Math.abs(-58)}`);

// *** Important ***
// How to find maximum number using Math.max() method ?
// We can easily find the maximum number using math function instead of using any loop and comparing the values. Example -

let num = [12, -10, 11, 15, 16, -0.6, -30, -25.65, 35, 99];
// console.log(`Maximum number in Array num = ${Math.max(num)}`);
// the above code will return NaN because Math.max() does not accepts array. We need "..." spread operator to brink out the elements of the array outside of that array container and this will put dim directly  as single single element. example -

console.log(`\n\nMaximum number in Array num = ${Math.max(...num)}`);
// in the above code, all the elements of the array came of of [] the array and got applied directly to the Math.max() method.

// Finding the minimum number using math.min() method -

console.log(`Maximum number in Array num = ${Math.min(...num)}`);
