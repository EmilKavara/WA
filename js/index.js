let slideIndex = 0;
let slideshowInterval;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    slideshowInterval = setTimeout(showSlides, 2000);
}

function plusSlides(n) {
    clearTimeout(slideshowInterval);
    showSlides();
}

showSlides();
