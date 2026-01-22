"use strict";

let slicearr = () => {
	let users = [
		"raju",
		"kaju",
		"bhaju",
		"naju",
		"david",
		"decosta",
		"ola",
		"priya",
		"",
	];
	let slicedarray = users.slice(5, 9);
	console.log(`Sliced array = ${slicedarray}`);
	// slice() method considers 1st index to be taken but it does not consider 2nd index to be taken which is given inside the brackets of slice. Ex- slice(2,6); Here, 2 is taken but 6 will be 6-1 = 5;

	let sliceStartOnly = users.slice(2);
	console.log(sliceStartOnly);
	// when we provide only 1 index to slice, it will cut the stat of given index and  return rest of the elements of thar array.

	console.log(users.slice(users.length - 1));
	// This will return last emelent of the array.
};

slicearr();
