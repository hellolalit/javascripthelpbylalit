"use strict";

// Arrays are created by the 2 ways shows below-
// let employees = ["John", "Riya", "Lisa", "Nastiya", "Ms. Rimpa"];
// let emp_ID = new Array(5);
// emp_ID = [1, 2, 3, 4, 5];

// Programs to practise Javascript Arrays -

// push() -
// const arrayInput = [];
// const len = parseInt(prompt("Please Enter the length of the Array: "));
// for (let i = 0; i < len; i++) {
// 	let val = prompt("Please Enter a Value =");
// 	arrayInput.push(val);
// }
// console.log("Vale of ArrayInput = ", arrayInput);

// 3D Array demo-
let usersInfo = [
	[
		"Sneha",
		"Shreya",
		"Arup",
		"Priyanka",
		"Vinit",
		"Vanshika",
		"Olyvia",
		["Das", "Roy", "Ghosh", "Roy", "Kumar", "Jha", "Desuza"],
	],
	[true, false, true, true, false, true, false, true],
	[21, 29, 26, 23, 25, 19, 24],
];
// console.log(`User Info Array = ${usersInfo}`);
// In th main array, 1st array contains user names, Inside it Surname are there,
// 2nd array contains is user is logged in? true or false,
// 3rd array contains user age.

// Accessing the multi-dimensional array -

const surName = usersInfo[0][7];
let forthSurName = [];
console.log(`4th Surname = ${(forthSurName = usersInfo[0][7][3])}`);
console.log(`Surname = ${surName}`);

let i, j, k;
for (i = 0; i < usersInfo.length; i++) {
	// let count = 0;
	2; // count++;
	console.log(`Main external Array = ${usersInfo[i]}`);
	for (j = 0; j <= usersInfo.length; j++) {
		console.log(`2nd external Array = ${usersInfo[i][j]}`);
	}
}
