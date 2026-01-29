"use strict";

/*
Javascript Arrays.

What is Javascript Array ?
JavaScript Array is a single variable that is used to store
elements of different data types. JavaScript arrays are zero-indexed.
The Javascript Arrays are not associative in nature.
Arrays are used when we have a list of items annd we need to store then in one variable.
*/

// Syntax -

// let arrayName = [value1, value2, ...];

let testArray = ["name1", "name2", "name3"];

// using new keyword -

// I need to take a deep dive in this concept of array for new keyword because I forgot this everytime.
let arrName = new Array(3);

arrName[0] = 10;
arrName[1] = "12";
arrName[2] = 15;

console.log(`Name of array = ${arrName}`);

// or

let arrName2 = new Array(12, 15, "lalu");

console.log(`Name of 2nd array = ${arrName2}`);

// Interview Question -
// Why Javascript cannot take array input from the user directly?
// Example -
// let arr = [];
// alert("You are about to give input of elements of an array.");
// for (let i = 0; i < 3; i++) {
// 	arr = String(
// 		prompt(`Please enter the elements of the array one by one = `)
// 	);
// 	debugger;
// }
// console.log(`the elements of the array are: ${arr}`);
// Why the above code will take the last value and not input all the elements from the loop in arr[] ?
// Answer -
// It's because Javascript by default cannot take elements input directly. It required push() method tp do so.

// Understanding the basics of array -

let myFriends = ["vinod", "swati", "komal", "raju"]; // declared an array named "myFrineds[]";
// now, the data inside the array are called elements. Which means 'vinod', 'swati' are one single elements.
// The First Element 'vinod' is called Lower Index/Lower Boundary
// And Last Element 'raju' is called Upper Index/Upper Boundary.
// Index in Array starts from 0 so indexof(vinod) is 0.

// to check the length of an array
// We check the length of an array using length() method in javascript. Example -

let ene = ["poulov", "suman", "sneha", "aslesha", "brg"];

console.log(`Total length of the array is = ${ene.length}`);

// Increase and decrease the length of an array

// We can increase and decrease the length of an array using the Javascript’s length property.

const courses = ["HTML", "CSS", "Javascript"];
courses.length = 5; // Increasing array length to 5
console.log("Array after increased length: ", courses);
courses.length = 2; // Decreasing array length to 2
console.log("Array after decreased length: ", courses);

// Output

// Array after increased length:  [ 'HTML', 'CSS', 'Javascript', <2 empty items> ]
// Array after decreased length:  [ 'HTML', 'CSS' ]

// to know more visit - https://www.geeksforgeeks.org/javascript-arrays/. (taken from outside source)

// First element of an array is called Lower Inder or Lower Boundary.
// Last element of an array is called Upper Inder or Upper Boundary.

// Array always start eith 0 index.

// Traversal Array -  Instead of having to perform an action for each item in an array individually,
// loops allow us to repeat the action a selected number of times. example -

console.log(`One of my ene = ${ene[2]}`);

// Adding elements to the array. Also, adding last element to the array-

ene.push("abhi"); // this will add the element to the array.
// This is the same process for adding the last element to the array.

console.log("New array =");
console.log(ene);
// So, push is used to add the element to the array.

// *** Javascript Methods which are used in array ***

// Adding elements to the start index of the array -
ene.unshift("John Watson");
console.log("New array =");
console.log(ene);
// So, unshift is used to add the element at the start index of the array.

//  Removing the 1st element from the array -
ene.shift();
console.log(`New array with first element removed =`);
console.log(ene);
// By using shift(), we can remove the first element from the array.

// Removing last element from the array -
ene.pop();
console.log(`New array with last element removed = `);
console.log(ene);
//  By using pop(), we can remove the last element from the array.

// to check if the variable data type is array or not -
console.log(Array.isArray(ene));

// Exact words from string as an array -
let newString = "This is a string going to be convered.";
let extractedArray = newString.split(" "); // We removed the spaces from the string and extracted the remaning words as array.
console.log(extractedArray);

// Now, extracting words using a single character-
let newArray2 = newString.split("s");
console.log(newArray2);

// ****** Multi Dimensional Array ******
// There are multi-dimensional arrays in Javascript. A multidimensional array is an array of arrays. Multidimensional arrays are useful when you want to store data as a tabular form, like a table with rows and columns.

// This is how multi-dimensional array is created in javascript -

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
// In th main array, 1st array contains user names, Inside it Surname are there,
// 2nd array contains is user is logged in? true or false,
// 3rd array contains user age.

// Accessing the multi-dimensional array -

const surName = usersInfo[0];
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
// Output is not as expected. Will troubleshoot later.

// Challange time-
// Add 'Dec'at the end of an array, then what is the return value of "splice method?", then update 'march' to 'March' and Delete 'June' from that array.
// here is the array = months = [Jan, Mar, Apr, Jun, Jul,].

const months = ["Jan", "Mar", "Apr", "Jun", "Jul"];
months.splice(5, 0, "Dec");
console.log(months);
months.splice(1, 1, "March");
console.log(months);
months.splice(3, 1);
console.log(months);

// indexOf method -
// This method is used to find the index of a string or element in the array.
// Example -

// Searching for a substring in a string: You can use indexOf() to find the first occurrence of a substring within a string. For example, the following code finds the first occurrence of the substring "world" in the string "Hello, world!":

const str2 = "Hello, world!";
const indexx = str2.indexOf("world");
console.log(indexx); // Output: 7

//     Checking if a value exists in an array: You can use indexOf() to check if a value exists in an array. If the value is found, indexOf() will return the index of the first occurrence of the value. If the value is not found, indexOf() will return -1. For example, the following code checks if the number 3 exists in the array [1, 2, 3, 4, 5]:

const numbers = [1, 2, 3, 4, 5];
const indexx2 = numbers.indexOf(3);
console.log(indexx2); // Output: 2

// Finding the position of a character in a string: You can use indexOf() to find the position of a character in a string. For example, the following code finds the position of the first occurrence of the character 'l' in the string "Hello":

const str = "Hello";
const index = str.indexOf("l");
console.log(index); // Output: 2

// Check programs folders for chalenge.

// Callback functions for forEach() -
// A callback function in programming is a function that is passed as an argument to another function, and it is intended to be executed after a specific task or event occurs. It's a way to provide a piece of code (the callback) that will be called back later, often asynchronously.

// In simpler terms, imagine you're asking someone to do a task for you, and you provide them with specific instructions on what to do once they finish. In programming, the task is an operation or an event, and the instructions are the callback function.

// Here's a basic example in JavaScript:

function performTask(task, callback) {
	// Perform the task
	console.log("Performing task: " + task);

	// After the task is done, execute the callback
	callback();
}

// Define a callback function
function callbackFunction() {
	console.log("Task completed!");
}

// Use performTask with the callback
performTask("A", callbackFunction);

// In this example:

//     performTask is a function that takes a task and a callback function as parameters.
//     It performs the specified task (in this case, just logging a message) and then calls the provided callback function.

// The callbackFunction is the callback passed to performTask. It gets executed after the task is completed.

// This pattern is commonly used in scenarios like asynchronous operations, event handling, and functions that require some time to complete. The callback allows you to specify what should happen next once a particular task or event is finished.

// *****  forEach method *****
// The forEach method is an array method in JavaScript that allows you to iterate over the elements of an array. It executes a provided function once for each array element in ascending order. The purpose of forEach is to simplify the process of iterating over arrays and applying a function to each element.

// Here's the basic syntax of forEach:

// array.forEach(function(element, index, array) {
// Code to be executed for each element
// });

//     element: The current element being processed in the array.
//     index: The index of the current element being processed.
//     array: The array on which forEach was called.

// Here's a simple example:

let num = [1, 2, 3, 4];

num.forEach(function (element, index) {
	console.log(`Element at index ${index}: ${element}`);
});

// Output:

// mathematica

// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
// Element at index 3: 4

// In this example, the forEach method is used to iterate over the numbers array. The callback function provided to forEach is executed for each element, logging the element and its index to the console.

// Key points about forEach:

//     Simplicity: It simplifies the process of iterating over arrays compared to using traditional for loops.

//     Readability: The use of forEach can make your code more readable and expressive, especially when the logic inside the loop is concise.

//     Avoiding Manual Indexing: You don't need to manually manage array indices; forEach takes care of it for you.

//     Return Value: The forEach method doesn't return a new array. It always returns undefined. If you want to create a new array based on the original one, you might consider using methods like map.

// Here's an example demonstrating the use of forEach to double each element in an array:

let num3 = [1, 2, 3, 4];
let doubledNumbers = [];

num3.forEach(function (element) {
	doubledNumbers.push(element * 2);
});

console.log(doubledNumbers);
// Output: [2, 4, 6, 8]

// In this case, the callback function is used to double each element and push the result into a new array (doubledNumbers).

// *** Javascript Arrray of Objects ***

// What is Javascript Objects ?

// In JavaScript, an onject is standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

const books = [
	{
		id: "9781593275846",
		title: "Eloquent JavaScript, Second Edition",
		subtitle: "A Modern Introduction to Programming",
		author: "Marijn Haverbeke",
		published: "2014-12-14T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 472,
		description:
			"JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
		website: "http://eloquentjavascript.net/",
	},
	{
		id: "9781449331818",
		title: "Learning JavaScript Design Patterns",
		subtitle: "A JavaScript and jQuery Developer's Guide",
		author: "Addy Osmani",
		published: "2012-07-01T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 254,
		description:
			"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
		website:
			"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
	},
	{
		id: "9781449365035",
		title: "Speaking JavaScript",
		subtitle: "An In-Depth Guide for Programmers",
		author: "Axel Rauschmayer",
		published: "2014-02-01T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 460,
		description:
			"Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
		website: "http://speakingjs.com/",
	},
	{
		id: "9781491950296",
		title: "Programming JavaScript Applications",
		subtitle:
			"Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
		author: "Eric Elliott",
		published: "2014-07-01T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 254,
		description:
			"Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
		website: "http://chimera.labs.oreilly.com/books/1234000000262/index.html",
	},
	{
		id: "9781593277574",
		title: "Understanding ECMAScript 6",
		subtitle: "The Definitive Guide for JavaScript Developers",
		author: "Nicholas C. Zakas",
		published: "2016-09-03T00:00:00.000Z",
		publisher: "No Starch Press",
		pages: 352,
		description:
			"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
		website: "https://leanpub.com/understandinges6/read",
	},
	{
		id: "9781491904244",
		title: "You Don't Know JS",
		subtitle: "ES6 & Beyond",
		author: "Kyle Simpson",
		published: "2015-12-27T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 278,
		description:
			'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the "You Don’t Know JS" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.',
		website:
			"https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond",
	},
	{
		id: "9781449325862",
		title: "Git Pocket Guide",
		subtitle: "A Working Introduction",
		author: "Richard E. Silverman",
		published: "2013-08-02T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 234,
		description:
			"This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
		website: "http://chimera.labs.oreilly.com/books/1230000000561/index.html",
	},
	{
		id: "9781449337711",
		title: "Designing Evolvable Web APIs with ASP.NET",
		subtitle: "Harnessing the Power of the Web",
		author: "Glenn Block, et al.",
		published: "2014-04-07T00:00:00.000Z",
		publisher: "O'Reilly Media",
		pages: 538,
		description:
			"Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.",
		website: "http://chimera.labs.oreilly.com/books/1234000001708/index.html",
	},
];

console.log(books); // printing the books.

// Now, we will learn Javascript Methods form arrays and objects -

console.log("\n\n Javascript Methods arrays and objects -");

// Javascript filter() method -

let published = books.filter(
	(bookData) => bookData.publisher === "O'Reilly Media",
);

console.log("Book Publisher =", published);

// Javascript filter method practise scanario based problems -

// Easy Questions :

// 1) Filter Books Published by a Specific Publisher:
// Filter the books that are published by "O'Reilly Media."

// Answer -
console.log("\n\n\n 1) Books that are published by O'Reilly Media are = ");

let publisher = books.filter((item) => {
	if (item.publisher === "O'Reilly Media") {
		return item.publisher;
	}
});

console.log(publisher);

// 2) Filter Books Published After a Certain Year:
// Filter the books that were published after the year 2015.

// Answer -
console.log("\n\n\n 1) Books that are published after 2015 = ");

const after2015 = books.filter((item) => {
	const date = new Date(item.published);
	const year = date.getFullYear();
	return year > 2015;
});

console.log(after2015);

// Medium:

// 3) Filter Books with a Certain Keyword in the Description:
// Filter the books that have the word "JavaScript" in their description.

// Answer -
console.log("\n\n\n 1) Books that have Jacascript in their description = ");

const keyword = "JavaScript";

const booksWithJavaScript = books.filter((book) => {
	// Convert both the description and the keyword to lowercase for case-insensitive comparison
	const lowercasedDescription = book.description.toLowerCase();
	const lowercasedKeyword = keyword.toLowerCase();

	// Check if the lowercased description includes the lowercased keyword
	return lowercasedDescription.includes(lowercasedKeyword);
});

console.log(booksWithJavaScript);

console.log("\n\n\n Javascript map() iterative method -");

// JavaScript Map iterative method -
// map() is such a type of method that loops (iterate) over a array/string variables.
// To undstand in details, Please see the example below -

const arrayOfNumbers = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
// declared an array named "arrayOfNumbers" whose length is 20.

// Now, we want to see only those numbers which are greater than 5 and less than equals to 12. So, let's see whoe we can achive this using map()-

const newNumberArray = arrayOfNumbers
	.map((number, indexOfArray, newNumberArray) => {
		if (number > 5 && number < 14) {
			return (number, indexOfArray, newNumberArray);
		}
	})
	.filter((number) => number !== undefined); // filter is used to remove undefined values.

console.log(newNumberArray);
