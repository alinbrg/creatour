const openModalButtonReg = document.querySelector(
	".authorization .have-account a"
);
const closeModalButtons = document.querySelectorAll(".form-block .reg-close");
const overlay = document.getElementById("overlay");
const openModalButtonsAuth = document.querySelectorAll(
	"header div.reg-auth, .registration .have-account a"
);
const ageArrowBtns = document.querySelectorAll(".arrow-icons img");

const userAgeMessageIcon = document.querySelector(
	".form-block .error-icon-block img"
);

userAgeMessageIcon.addEventListener("click", (e) => {
	e.target.parentElement.querySelector("span").classList.toggle("activeError");
});

ageArrowBtns.forEach((btn) => {
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

openModalButtonReg.addEventListener("click", (e) => {
	e.preventDefault();
	const authorization = document.querySelector(".authorization.form-block");
	authorization.classList.remove("active");
	const modal = document.querySelector(".registration.form-block");
	openModal(modal);
});

openModalButtonsAuth.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.preventDefault();
		const registration = document.querySelector(".registration.form-block");
		if (registration.classList.contains("active")) {
			registration.classList.remove("active");
		}
		const modal = document.querySelector(".authorization.form-block");
		openModal(modal);
	});
});

overlay.addEventListener("click", () => {
	const modals = document.querySelectorAll(".form-block.active");
	modals.forEach((modal) => {
		closeModal(modal);
	});
});

closeModalButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = button.closest(".form-block");
		closeModal(modal);
	});
});

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add("active");
	overlay.classList.add("active");
}

function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove("active");
	overlay.classList.remove("active");
}
