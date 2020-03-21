
let slides = document.querySelectorAll('.slide');
const sliderSection = document.getElementById('slider');
let currentSlide = 0;
let isEnabled = true;
const chev_l = document.getElementById('chev_l');
const chev_r = document.getElementById('chev_r');
 
function changeCurrentSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
}
 
function hideSlide(direction) {
    isEnabled = false;
    slides[currentSlide].classList.add(direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
    });
}
 
function showSlide(direction) {
    slides[currentSlide].classList.add('next', direction);
    slides[currentSlide].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
}
 
function nextSlide(n) {
    hideSlide('to-right');
    changeCurrentSlide(n + 1);
    showSlide('from-left');
}
 
function previousSlide(n) {
    hideSlide('to-left');
    changeCurrentSlide(n - 1);
    showSlide('from-right');
}
 
function color_change(c, color, border) {
    sliderSection.classList.add(c);
    sliderSection.addEventListener('animationend', function() {
        this.classList.remove(c);
        this.style.backgroundColor = color;
        this.style.borderBottomColor = border;

    });
}
 
chev_r.addEventListener('click', () => {
    if (isEnabled) {
        previousSlide(currentSlide)
        if(slides[currentSlide].classList.contains('slide_2')) {
            color_change('to-blue', '#648bf0', '#96c5f2');
        }
        else {
            color_change('to-red', '#f06c64', '#ff8080');
        };
    }
})
 
chev_l.addEventListener('click', () => {
    if (isEnabled) {
        nextSlide(currentSlide)
        if(slides[currentSlide].classList.contains('slide_2')) {
            color_change('to-blue', '#648bf0', '#96c5f2');
        }
        else {
            color_change('to-red', '#f06c64', '#ff8080');
        };
    }    
})