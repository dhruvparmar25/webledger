const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.sliderbanner');
let currentIndex = 0;

function moveSlider() {
  currentIndex = (currentIndex + 1) % slides.length;
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(moveSlider, 3000);
