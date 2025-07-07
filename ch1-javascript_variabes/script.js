"use strict";

// Variables in javascript -

// What is variables in javascript? A JavaScript variable is simply a name of storage location.
// Variables are Containers for Storing Data, There are two
// types of variables in JavaScript : local variable and global variable.

// Variable declaration rules -
// 1) Variable names should start only with Letter or $ or _ (underscore). Anything other than that
// is not accepted.
// So var 12raj is invalid and raj12 is Valid.
// Example -
let $sam = true; // variable name starting with '$' is valid.
document.write(
  "<br /> Variable declaration with '$' works? " + $sam + "\n<br />",
);
const raj12 = true;
document.write(`Variable declaration with raj12 works? ${raj12}\n<br /><br />`);
// const 12raj = false;
// document.write(`Variable declaration with raj12 works? ${12raj}`); This dosen't works as this variable declaration is wrong.
// So, we have comment it.

// 2) Javascript is Case sensitive so myAge and myage is different.
// Example -
let myAge = 12;
let myage = 12;
document.write(`myAge == myage? ${myAge == myage}\n<br />`);
document.write(`myAge === myage? ${myAge === myage}\n<br /><br />`);

// 3)Variable name cannot have spaces.

// 4) There is no limit to the lenght of a variable while declaration.

// 5) Reserved Keyword in Javascript Cannot be used in variable declarations.

// 6) Var is such a variable declarer who is depratiated.
var namee = "Lal";

// Syntax for variable declaration for - var/let/const (which is variable declaration type) is -
// var/let/const variable_name = "value";
// example for string variable -> let/comst/var post = "engineer";
// example for integer variable -> let/const/var age = 12;
// example for boolean variable -> let/const/var result = true;

// 7) Let is mordern replacement of Var which is suggested to use instead of var.
// Let should be used only if the variable's data type is expected to be changed means integer
// string or string to boolean and vice versa.
let my_power = 12;

// 8) Const is another variable declarer which does not allows to change data type of variables and you cannot reassign the vaiable (ex- const lalu = "true"; lalu = 34).
// it should be the default variable declarer until let is required.
const my_age = 23;

document.write(
  namee +
    " power is " +
    my_power +
    "kg and his age is " +
    my_age +
    "<br /><br />",
);

const _power__12 = 14; // more than 1 underscore can be used to declare variable and it is valid but,
// let raju^%kalu = "sick"; special characters like % and ^ are not allowed for variable declarations and that is invalid.

// 9) Var allows to declare same variable 2 times with same name but let does not allows that.
// example -

var gigu = "avnish";
var gigu = "rajesh"; // but here gigu is reassigned by "rajesh" value.
document.write(gigu + "<br />");
document.write(gigu);
