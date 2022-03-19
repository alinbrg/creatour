const ageArrowButtons = document.querySelectorAll(".arrow-icons img");

const infoBlocks = document.querySelectorAll(".info-block");

const infoSelectors = document.querySelectorAll(".profile__selectors ul li");

infoSelectors.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		btn.parentElement.querySelector(".active").classList.remove("active");
		btn.classList.add("active");
		infoBlocks.forEach((element) => {
			element.classList.remove("active");
		});
		infoBlocks[i].classList.add("active");
	});
});

ageArrowButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		if (e.target.classList.contains("arrow-up")) {
			if (
				e.target.parentElement.parentElement.querySelector("#user-age").value >=
				17
			) {
				e.target.parentElement.parentElement.querySelector("#user-age").value++;
			} else {
				e.target.parentElement.parentElement.querySelector(
					"#user-age"
				).value = 17;
			}
		} else {
			if (
				e.target.parentElement.parentElement.querySelector("#user-age").value >
				17
			) {
				e.target.parentElement.parentElement.querySelector("#user-age").value--;
			}
		}
	});
});
