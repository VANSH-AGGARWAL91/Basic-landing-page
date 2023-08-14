// JavaScript for Image Slider
let slideIndex = 1;

function showSlide(n) {
    const slides = document.getElementsByClassName("img-slider")[0].getElementsByTagName("img");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${100 * (slideIndex - 1)}%)`;
    }
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

showSlide(slideIndex);
