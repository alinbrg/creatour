const toursMainBtns = document.querySelectorAll(
	".tours-inside-main__options .right-block li, .tours-inside-main__options .left-block li"
);

// const tourLeftBtns = document.querySelectorAll(
// 	".tours-inside-main__options .left-block li"
// );

const tabcontentsContainer = document.querySelector(".profilepage__contents");
const tabSwitcher = (el) => {
	[...document.querySelectorAll(".profilepage__tabs__item")].forEach((tab) => {
		tab.classList.remove("active");
	});
	el.classList.add("active");

	if (el.id === "tab_orderhistory") {
		tabcontentsContainer.classList.add("orders");
	} else {
		tabcontentsContainer.classList.remove("orders");
	}
};

[...document.querySelectorAll(".profilepage__tabs__item")].forEach((tab) => {
	tab.addEventListener("click", () => {
		tabSwitcher(tab);
	});
});

const tourVisualsThumbs = [
	...document.querySelectorAll(".mySwiper .swiper-slide"),
];

const showMoreBtns = document.querySelectorAll(
	".show-more-btn div, .daily-schedule__head div, .stop__head div, .stop__details li"
);
const hiddenContent = document.querySelectorAll(".day-schedule__details");

const toursInfoBtns = document.querySelectorAll(".details-tabs li");

toursInfoBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.parentElement.querySelector(".active").classList.remove("active");
		btn.classList.add("active");
	});
});

showMoreBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
	});
});

toursMainBtns.forEach((btn, i) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		if (btn.parentElement.querySelector(".active")) {
			btn.parentElement.querySelector(".active").classList.remove("active");
			btn.classList.add("active");
			// console.log(tourVisualsThumbs[i].id);
		}
	});
});

// calendar
