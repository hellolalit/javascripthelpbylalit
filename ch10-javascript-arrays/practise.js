"use strict";

// Arrays are created by the 2 ways shows below-
let employees = ["John", "Riya", "Lisa", "Nastiya", "Ms. Rimpa"];
let emp_ID = new Array(5);
emp_ID = [1, 2, 3, 4, 5];

// Programs to practise Javascript Arrays -

// push() -
const arrayInput = [];
const len = parseInt(prompt("Please Enter the length of the Array: "));
for (let i = 0; i < len; i++) {
    let val = prompt("Please Enter a Value =");
    arrayInput.push(val);
}
console.log("Vale of ArrayInput = ", arrayInput);