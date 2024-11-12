const testimonialContainer = document.getElementById('testimonialContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const testimonials = testimonialContainer.children;
let currentSlide = 0;

function updateSlider() {
    testimonialContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonials.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
    updateSlider();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);