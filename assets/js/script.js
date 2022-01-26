const conceptNames = document.querySelectorAll(".concept__names a");
const showConceptNames = document.querySelector(".see-all");
const conceptNamesBlock = document.querySelector(".concept__names ul");
const mobMenu = document.querySelector("aside");
const mobMenuBtn = document.querySelector(".header__burger");
const otherContent = document.querySelectorAll("header, section, footer");
const body = document.querySelector("body");
const contactScrollDown = document.querySelector(".main-contact__scroll-down");
const customerCare = document.getElementById("customer-care");
const contactForm = document.getElementById("contact-form");

const scrollToBottom = document.querySelector(".scroll-to-bottom");

conceptNames.forEach((el) => {
	el.addEventListener("click", (e) => {
		e.preventDefault();
		changeClasses(e);
	});
});

if (showConceptNames) {
	showConceptNames.addEventListener("click", toggleConceptNames);
}

mobMenuBtn.addEventListener("click", (e) => {
	mobMenuBtn.classList.toggle("clicked");
	otherContent.forEach((section) => {
		section.classList.toggle("mob-menu-shown");
	});
	body.classList.toggle("mob-menu");
	mobMenu.classList.toggle("shown");
});

function changeClasses(event) {
	for (const aTag of document.querySelectorAll(".concept__names a.active")) {
		aTag.classList.remove("active");
	}
	event.currentTarget.classList.add("active");
}

function toggleConceptNames() {
	conceptNamesBlock.classList.toggle("show-all");
	this.classList.toggle("toggled");
}

if (contactScrollDown) {
	contactScrollDown.addEventListener("click", (e) => {
		e.preventDefault();
		customerCare.scrollIntoView();
	});
}
if (scrollToBottom) {
	scrollToBottom.addEventListener("click", (e) => {
		e.preventDefault();
		contactForm.scrollIntoView();
	});
}
