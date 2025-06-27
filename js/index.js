"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const goBtn = document.querySelector(".go-btn");
	goBtn.addEventListener("click", redirect);
});

function redirect(event) {
	event.preventDefault();

	const selectElement = document.getElementById("chapter");
	const selectedValue = selectElement.value.trim();

	if (selectedValue !== "Select Chapter") {
		// redirect to ../foldername/index.html
		window.location.href = `../${selectedValue}/index.html`;
	} else {
		alert("Please select a chapter.");
	}
}
