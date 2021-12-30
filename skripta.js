const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const parallax = document.getElementsByClassName("parallax");

toggleButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
});

// parallax pozadina

Array.from(parallax).forEach((element) => {
	window.addEventListener("scroll", function () {
		let offset = window.scrollY;
		element.style.backgroundPositionY = offset * 0.8 + "px";
	});
});

//slideshow

const myslide = document.querySelectorAll(".myslide"),
	dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	let i;
	for (i = 0; i < myslide.length; i++) {
		myslide[i].style.display = "none";
	}
	for (i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(" active", "");
	}
	if (n > myslide.length) {
		counter = 1;
	}
	if (n < 1) {
		counter = myslide.length;
	}
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
