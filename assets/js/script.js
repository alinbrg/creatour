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

function countrySlider(countries, pgn) {
	pgn[0].classList.add("active");
	pgn[1].classList.add("next");
	pgn[2].classList.add("next-next");

	pgn.forEach((country, index) => {
		country.addEventListener("click", () => {
			countries.forEach((el) => {
				el.style.position = `relative`;
				el.style.opacity = `0`;
				el.style.left = `unset`;
				el.style.top = `unset`;
				el.style.transform = `translateX(100%)`;
			});
			countries[index].style.position = `absolute`;
			countries[index].style.left = `0`;
			countries[index].style.top = `0`;
			countries[index].style.opacity = `1`;
			countries[index].style.transform = `translateX(0%)`;

			clearClassList(pgn);
			country.classList.add("active");
			if (pgn[index - 2]) {
				pgn[index - 2].classList.add("prev-prev");
			}
			if (pgn[index - 1]) {
				pgn[index - 1].classList.add("prev");
			}
			if (pgn[index + 1]) {
				pgn[index + 1].classList.add("next");
			}
			if (pgn[index + 2]) {
				pgn[index + 2].classList.add("next-next");
			}
		});
	});

	function clearClassList(arr) {
		arr.forEach((element) => {
			element.classList.remove(
				"active",
				"next",
				"prev",
				"next-next",
				"prev-prev"
			);
		});
	}

	let startAngle = Math.PI / pgn.length,
		angle = startAngle / 2,
		radius = 100,
		offset = window.innerWidth / 2;

	// console.log(pgn[0].parentElement.classList);
	if (
		pgn[0].parentElement.classList.contains("countries__pgn") &&
		window.innerWidth < 1280
	) {
		return;
	}
	for (var i = 0; i < pgn.length; i++) {
		let span = pgn[i];
		// span.style.left = radius * Math.cos(angle) + offset + "px";

		span.style.marginLeft = radius * Math.sin(angle) + "px";
		angle += startAngle;
	}
}
