const submitButton = document.querySelector(".btn-submit");

const mainCard = document.getElementById("mainCard");
const thankYouCard = document.getElementById("thank-you-card");

const list = document.querySelectorAll(".btn-rating");
const rating = document.getElementById("rating");

list.forEach((item) => {
	item.addEventListener("click", (e) => {
		list.forEach((item) => {
			item.classList.remove("active");
		});

		e.target.classList.add("active");
		rating.innerHTML = item.innerHTML;
		submitButton.removeAttribute("disabled");
	});
});

submitButton.addEventListener("click", (e) => {
	mainCard.classList.add("hidden");
	thankYouCard.classList.remove("hidden");
});
