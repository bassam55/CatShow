let slideIndex = 0;
let slides = document.querySelectorAll("#slideshow img");
let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");

function showSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

setInterval(nextSlide, 3000);
