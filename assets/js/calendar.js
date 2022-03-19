let calendar = document.querySelector(".calendar");

const month_names = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

isLeapYear = (year) => {
	return (
		(year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
		(year % 100 === 0 && year % 400 === 0)
	);
};

getFebDays = (year) => {
	return isLeapYear(year) ? 29 : 28;
};

generateCalendar = (month, year) => {
	let calendar_days = calendar.querySelector(".calendar-days");

	let days_of_month = [
		31,
		getFebDays(year),
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31,
	];

	calendar_days.innerHTML = "";

	let currDate = new Date();
	if (!month) month = currDate.getMonth();
	if (!year) year = currDate.getFullYear();

	let curr_month = `${month_names[month]}`;
	month_picker.innerHTML = curr_month;

	// get first day of month

	let first_day = new Date(year, month, 1);

	for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
		let day = document.createElement("div");
		if (i % 3 === 0) {
			day.classList.add("filled");
		}
		if (i >= first_day.getDay()) {
			day.innerHTML = i - first_day.getDay() + 1;
			if (day.classList.contains("filled")) {
				day.innerHTML += `<span>filled</span>`;
			} else {
				day.innerHTML += `<span>Available</span>`;
			}
		}
		calendar_days.appendChild(day);
	}
};

let month_picker = calendar.querySelector("#month-picker");

let currDate = new Date();

let curr_month = { value: currDate.getMonth() };
let curr_year = { value: currDate.getFullYear() };

generateCalendar(curr_month.value, curr_year.value);

let calendarDays = [
	...document.querySelectorAll(
		".calendar-section .calendar .calendar-body .calendar-days div"
	),
];
let bookTourSection = document.querySelector(".book-tour");
let daysToBook = calendarDays.filter((day) => day.textContent !== "");
// console.log(daysToBook);
daysToBook.forEach((day) => {
	day.addEventListener("click", () => {
		if (day.classList.contains("filled")) {
			bookTourSection.classList.remove("active");
			return;
		}
		if (!bookTourSection.classList.contains("active")) {
			bookTourSection.classList.add("active");
			bookTourSection.scrollIntoView({
				behavior: "smooth",
			});
		} else {
			bookTourSection.classList.remove("active");
			bookTourSection.classList.add("active");
			bookTourSection.scrollIntoView({
				behavior: "smooth",
			});
		}
	});
});
