"use strict";

// content taken from "chai aur code youtube channel"

// Javascript DOM (Document Object Model) and BOM (Browser Object Model) -

// theory will be applied later on because of time restrictions. Practical examples -

// content taken from - https://www.youtube.com/watch?v=b1JpH4dz4SQ&list=PLMMMqnAjMvAX9nCd85ePmuQVWkIbjSc5i&index=10  GeekStack youtube channel. Video name - "JavaScript DOM Full Course | Document Object Model JavaScript Complete Course"


// What is a window object?
// The Window object represents a the browser window (commonly know as browser tab) All global javascript objects, functions and variables automatically becomes member of window object.Global variables are properties of the window object. Global functions are methods of the window object.

// What do we see if we print window object with a delay of 2 seconds ? -

setTimeout(() => {
	console.log(window);
}, 2000);
// we see that there are multiple objects displayed in the console which says many things about that specific window. We later use that information based on our requirements.

// In the above example, we retrieved windows object but how we can retrieve/pull out document object from windows? Well, here an example -

setTimeout(() => {
	console.log(`\n${window.document}`);
}, 2099);
// The above example demonstrates how document object can be retrieved from windows object. It can also be done without writing "windows.".

// Let's understand HTML dom with the below diagram :
// please click on html dom image in this folder and see the image.

// manipulating the DOM -

// Selecting Elements -

// 1) Selecting element's ID bu getElementById() -
//  The getElementById() method returns an element with a specified value. The getElementById() method returns null if the element does not exist. The getElementById() method is one of the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element.

// getElementById() example-
let name = document.getElementById("name").innerHTML;
console.log(name); // if same id is used on multiple html tags then only the 1st one will work.

// getElementByName() example-
const selectedbtn = document.getElementsByName(`language`);
console.log(selectedbtn);


