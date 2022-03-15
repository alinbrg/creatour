const conceptNames = document.querySelectorAll(".concept__names a"),
	showConceptNames = document.querySelector(".see-all"),
	conceptNamesBlock = document.querySelector(".concept__names ul"),
	mobMenu = document.querySelector("aside"),
	mobMenuBtn = document.querySelector(".header__burger"),
	otherContent = document.querySelectorAll("header, section, footer"),
	body = document.querySelector("body"),
	contactScrollDown = document.querySelector(".main-contact__scroll-down"),
	customerCare = document.getElementById("customer-care"),
	contactForm = document.getElementById("contact-form"),
	scrollToBottom = document.querySelector(".scroll-to-bottom"),
	countryListMob = document.querySelector("li.country__list > a");

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

if (countryListMob) {
	countryListMob.addEventListener("click", (e) => {
		e.preventDefault();
		e.target.parentElement.classList.toggle("active");
	});
}
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
