"use strict";

// Program  1 - Check if a number is positive, negative, or zero.

// let n = 0;
// n = parseFloat(prompt("Please Enter a Number ="));

// if (n < 0) {
//     document.write(`<br/><br/> ${n} is Negative number`);
// }
// else if (n == 0) {
//     document.write(`<br/><br/> ${n} is Zero`);
// } else if (n > 0) {
//     document.write(`<br/><br/> ${n} is Positive number`);
// } else {
//     alert(`Invalid Entry! Please Try again.`);
// }

// bug = if the starting is number (ex-1e), it takes 1 as input and gives result which is invalid!

// Optimized Version 1 -

/*let n = Number(prompt(`Please Enter a Number =`));
if (isNaN(n) == true) {
    alert(`Invalid Entry! Please Try again.`);
} else if (n < 0) {
    document.write(`<br/><br/> ${n} is Negative number`);
}
else if (n == 0) {
    document.write(`<br/><br/> ${n} is Zero`);
} else {
    document.write(`<br/><br/> ${n} is Positive number`);
}*/

/*
Program 2-
💻 Task: Ask user to enter a character (a-z, A-Z) and display:

    If it's a vowel or consonant

    But use only switch-case (not if/else).

Sample Output:

Enter a single letter: A
Output: Vowel

Enter a single letter: b
Output: Consonant

Enter a single letter: 3
Output: Invalid input
*/

let input = prompt(`Please Enter a character =`);

switch (input) {
    case a || e || i || o || u:
        alert(`${input} is a Vowel`);
        break;

    case b || c || d || f || g || h || j || k || l || m || n || p || q || r || s || t || v || w || x || y || z:
        alert(`${input} is a Consonants`);
        break;

    default:
        alert(`Invalid Entry! Please Try again...`);
        break;
}

/*
    got error - Uncaught ReferenceError: a is not defined
    <anonymous> http://127.0.0.1:5500/ch6-javascript-condition/practise.js:58
*/