const mainSlider = new Swiper(".main-slider__swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: false,
	// autoplay: {
	//   delay: 5000,
	//   disableOnInteraction:false
	// },
	// If we need pagination
	pagination: {
		el: ".main-slider__pgn",
		clickable: true,
	},
});

const swiper = new Swiper(".services-swiper", {
	loop: false,
	spaceBetween: 25,
	freeMode: true,
	watchSlidesProgress: true,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 15,
		},
		// when window width is >= 1280px
		1280: {
			slidesPerView: 6,
		},
	},
	pagination: {
		el: ".services-slider__pgn",
		clickable: true,
	},
});

const swiper2 = new Swiper(".services-swiper2", {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
});

// add id for each block
let countriesList = [...document.querySelectorAll(".countries__pgn span")];
let countrySlides = [...document.querySelectorAll(".countries__slide")];

countrySlider(countrySlides, countriesList);

let scrollDown = document.querySelector(".scroll-down");
let servicies = document.getElementById("services");
if (scrollDown) {
	scrollDown.addEventListener("click", (e) => {
		e.preventDefault();
		servicies.scrollIntoView();
	});
}

// let countriesPgn = document.querySelectorAll(
// 	".countries__pgn .swiper-pagination-bullet"
// );

// if (window.innerWidth > 1280) {
// 	countriesPgn.forEach((element) => {
// 		if (element.innerText == "France" || element.innerText == "france") {
// 			element.style.order = -1;
// 			element.click();
// 		}
// 	});
// }
