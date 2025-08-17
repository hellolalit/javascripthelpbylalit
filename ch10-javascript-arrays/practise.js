"use strict";

// Arrays are created by the 2 ways shows below-
let employees = ["John", "Riya", "Lisa", "Nastiya", "Ms. Rimpa"];
let emp_ID = new Array(5);
emp_ID = [1, 2, 3, 4, 5];

// Programs to practise Javascript Arrays -

// push() -
const arrayInput = [];
let submitInputValue = document.querySelector("#submitArrayInput");
console.log(submitInputValue);
function storeInput() {
    const inputElement = document.querySelector("#arrayInput");
    const inputArrayValue = document.querySelector("#arrayInput").value.trim(); // .trim() removes extra spaces;
    console.log(inputArrayValue);
    if (inputArrayValue) { // only push if not empty
        arrayInput.push(inputArrayValue);
        console.log(arrayInput);
    }
    if (arrayInput != "") {
        alert("Value added successfully");
    }

    // clear the input field
    inputElement.value = "";
    inputElement.focus(); // optional: keeps cursor ready in the box
}


submitInputValue.addEventListener('click', storeInput);