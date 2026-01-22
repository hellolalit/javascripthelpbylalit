"use strict";

// ============================================
// THEME TOGGLE
// ============================================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Load saved theme preference
function loadTheme() {
	const savedTheme = localStorage.getItem('theme') || 'dark';
	if (savedTheme === 'light') {
		document.body.classList.add('light-mode');
		themeToggle.textContent = '🌙';
	} else {
		document.body.classList.remove('light-mode');
		themeToggle.textContent = '☀️';
	}
}

// Toggle theme
themeToggle.addEventListener('click', () => {
	const isLightMode = document.body.classList.toggle('light-mode');
	const theme = isLightMode ? 'light' : 'dark';
	localStorage.setItem('theme', theme);
	themeToggle.textContent = isLightMode ? '🌙' : '☀️';
});

// Load theme on page load
loadTheme();

alert(
	"This Weather App uses Open Weather API which says they collect your data. Lalit does not stores your personal data nor sells it in anyway.\n\nSince, Open Weather API is required to make this app work so, lalit has to use this API. Please review privacy policy of Open Weather API for more details."
);
