const toggleActiveClasses = function (btn, className) {
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
		btn.closest(className).classList.toggle("active");
	});
};

const toursInfoBtns = document.querySelectorAll(".details-tabs li");

const dayScheduleBtn = document.querySelectorAll(
	".day-schedule .day-schedule__head .show-more-btn div"
);

const dailyScheduleBtn = document.querySelectorAll(
	".daily-schedule .daily-schedule__head div"
);

const tourInformationBlocks = [
	...document.querySelectorAll(".tour-information__plan"),
];

const tourInformationSelectors = document.querySelectorAll(".left-block ul li");

const stopsBtns = document.querySelectorAll(".stop-list .stop .stop__head div");

const stopsDetailsBtns = document.querySelectorAll(".stop__details ul li");

tourInformationSelectors.forEach((btn, i) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		if (btn.parentElement.querySelector(".active")) {
			btn.parentElement.querySelector(".active").classList.remove("active");
			btn.classList.add("active");
		}
		document
			.querySelector(".tour-information__details")
			.querySelector(".tour-information__plan.active")
			.classList.remove("active");

		tourInformationBlocks[i].classList.add("active");
	});
});

stopsDetailsBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
	});
});

stopsBtns.forEach((btn) => {
	toggleActiveClasses(btn, ".stop");
});

dayScheduleBtn.forEach((btn) => {
	toggleActiveClasses(btn, ".day-schedule");
});

dailyScheduleBtn.forEach((btn) => {
	toggleActiveClasses(btn, ".daily-schedule");
});

toursInfoBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.parentElement.querySelector(".active").classList.remove("active");
		btn.classList.add("active");
	});
});
