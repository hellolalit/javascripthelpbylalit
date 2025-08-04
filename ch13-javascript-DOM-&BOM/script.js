"use strict";

// content taken from "chai aur code youtube channel"

// Javascript DOM (Document Object Model) and BOM (Browser Object Model) -

// theory will be applied later on because of time restrictions. Practical examples -

// content taken from - https://www.youtube.com/watch?v=b1JpH4dz4SQ&list=PLMMMqnAjMvAX9nCd85ePmuQVWkIbjSc5i&index=10  GeekStack youtube channel. Video name - "JavaScript DOM Full Course | Document Object Model JavaScript Complete Course"

// manipulating the DOM -

// Selecting Elements -

// getElementById() selects by ID in html. Example-
let name = document.getElementById("name").innerHTML;
console.log(`getelementbyName = ` + name); // if same id is used on multiple html tags then only the 1st one will work.

// getElementByName() selects by Name attribute of html in <input /> tag. Example-
const selectedbtn = document.getElementsByName(`language`);
console.log(`getelementbyName =` + selectedbtn);
console.log(selectedbtn);

// getElementByTagName() selects by html tag in html. Example-
const tagname = document.getElementsByTagName(`p`);
console.log(`getelementbyTagName =`);
console.log(tagname); // This will return multiple p tags as the the <p> are selected in that html document.
