"use strict";

// Javascript DOM (Document Object Model) -

// Practical examples -

// content taken from - https://www.youtube.com/watch?v=b1JpH4dz4SQ&list=PLMMMqnAjMvAX9nCd85ePmuQVWkIbjSc5i&index=10  GeekStack youtube channel. Video name - "JavaScript DOM Full Course | Document Object Model JavaScript Complete Course"

/*
Selecting Elements -
Direct Selection -
*/

// getElementById() selects by ID in html. Example-
let name = document.getElementById("name").innerHTML;
console.log(`getelementbyName = ` + name); // if same id is used on multiple html tags then only the 1st one will work.

// getElementByName() selects by Name attribute of html in <input /> tag. Example-
const selectedbtn = document.getElementsByName(`language`);
console.log(`getelementbyName =` + selectedbtn);
console.log(selectedbtn);

// getElementByTagName() selects by html tag in html. And returns multiple selected tags (here p tag) as the the <p> tag are selected in that html document.Example-
const tagname = document.getElementsByTagName(`p`);
console.log(`getelementbyTagName =`);
console.log(tagname); // This will return multiple p tags as the the <p> are selected in that html document.

// Indirect Selection -
// parentElement -
let child_list_item = document.querySelector("#html");
let parent_list = child_list_item.parentElement;
console.log("Parent Element =", parent_list);