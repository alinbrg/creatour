const conceptNames = document.querySelectorAll(".concept__names a");
const showConceptNames = document.querySelector(".see-all");
const conceptNamesBlock = document.querySelector(".concept__names ul");

conceptNames.forEach((el) => {
	el.addEventListener("click", (e) => {
		e.preventDefault();
		changeClasses(e);
	});
});

showConceptNames.addEventListener("click", toggleConceptNames);

function changeClasses(event) {
	for (const aTag of document.querySelectorAll(".concept__names a.active")) {
		aTag.classList.remove("active");
	}
	event.currentTarget.classList.add("active");
}

function toggleConceptNames() {
	conceptNamesBlock.classList.toggle("show-all");
	this.classList.toggle("toggled");
	console.log(this.offsetTop);
}
