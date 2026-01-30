"use strict";

import { emp_data } from "./employee_data.js";
console.log("Employee Data = ", emp_data);

const table = document.querySelector(".search-table");
console.log(table);

let i,
	j,
	tablerow = table.querySelectorAll("tr");
console.log(tablerow);

for (i = 1; i < tablerow.length; i++) {
	console.log(tablerow[i]);
	let table_data = tablerow[i].getElementsByTagName("td");
	console.log(table_data);
}
