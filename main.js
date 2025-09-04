const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".main-nav");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

// ===== HAMBURGER TOGGLE =====
hamburger.addEventListener("click", () => {
	nav.classList.toggle("active");
	hamburger.classList.toggle("open");
	document.body.classList.toggle("nav-open"); // optional scroll lock
});

// ===== CLOSE MENU ON LINK CLICK =====
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		nav.classList.remove("active");
		hamburger.classList.remove("open");
		document.body.classList.remove("nav-open");
	});
});

// ===== SCROLLSPY =====
window.addEventListener("scroll", () => {
	const top = window.scrollY;
	let current = "";

	sections.forEach((sec) => {
		const offset = sec.offsetTop - 120; // add breathing room
		const height = sec.offsetHeight;
		if (top >= offset && top < offset + height) {
			current = sec.id;
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");
		if (current && link.getAttribute("href").includes(current)) {
			link.classList.add("active");
		}
	});
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", (e) => {
		e.preventDefault();
		const target = document.querySelector(anchor.getAttribute("href"));
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	});
});
