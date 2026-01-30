"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Existing Redirect Logic
    const goBtn = document.querySelector(".go-btn");
    if (goBtn) {
        goBtn.addEventListener("click", redirect);
    }

    // 2. Mouse Tracking Glow Effect for Bento Cards
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // 3. Intersection Observer for Scroll Animations
    // We use a CSS-first approach: elements are visible by default, 
    // and we only animate them if the observer is supported and working.
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Only observe sections and larger blocks for reveal
    // We DON'T set opacity to 0 here; instead we let the animation handle it
    // or use a class that we remove/add safely.
    document.querySelectorAll('section, .cta-card, .bento-grid').forEach(el => {
        el.classList.add('prepare-reveal');
        observer.observe(el);
    });
});

function redirect(event) {
	event.preventDefault();
	const selectElement = document.getElementById("chapter");
    if (!selectElement) return;
	const selectedValue = selectElement.value.trim();

	if (selectedValue !== "Select Chapter") {
		window.location.href = `../${selectedValue}/index.html`;
	} else {
		alert("Please select a chapter.");
	}
}
