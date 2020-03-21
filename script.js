/*const slides = document.querySelectorAll(' .slide');
const sliderSection = document.getElementById('slides');
const chev_l = document.getElementById('chev_l');
const chev_r = document.getElementById('chev_r');

let activeSlide = 0;

chev_l.addEventListener('click', () => {
    activeSlide = (activeSlide + 1) % slides.length;
    if(slides[activeSlide].classList.contains('slide_1')) { 
        sliderSection.style.backgroundColor = '#648bf0';
        sliderSection.style.borderBottomColor = '#adc5db';
        slides[activeSlide].classList.remove('active_slide_l');
        slides[activeSlide - 1].classList.add('active_slide_r');
    } 
    else { 
        sliderSection.style.backgroundColor = '#f06c64';
        sliderSection.style.borderBottomColor = '#ea676b';
        slides[activeSlide].classList.remove('active_slide_r');
        slides[activeSlide + 1].classList.add('active_slide_l');
    }
})
chev_r.addEventListener('click', () => {
    activeSlide = (activeSlide + 1) % slides.length;
    if(slides[activeSlide].classList.contains('slide_1')) { 
        sliderSection.style.backgroundColor = '#648bf0';
        sliderSection.style.borderBottomColor = '#96c5f2';
        slides[activeSlide].classList.remove('active_slide_l');
        slides[activeSlide - 1].classList.add('active_slide_r');
    } 
    else { 
        sliderSection.style.backgroundColor = '#f06c64';
        sliderSection.style.borderBottomColor = '#ea676b';
        slides[activeSlide].classList.remove('active_slide_r');
        slides[activeSlide + 1].classList.add('active_slide_l');
    }
})

*/

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

chev_r.addEventListener('click', () => {
    if (isEnabled) {
        nextSlide(currentSlide)
        if(slides[currentSlide].classList.contains('slide_2')) { 
        sliderSection.style.backgroundColor = '#648bf0';
        sliderSection.style.borderBottomColor = '#96c5f2';
    } 
    else { 
        sliderSection.style.backgroundColor = '#f06c64';
        sliderSection.style.borderBottomColor = '#ea676b';
    };
    }
    
    
})

chev_l.addEventListener('click', () => {
    if (isEnabled) {
        previousSlide(currentSlide)
        if(slides[currentSlide].classList.contains('slide_2')) { 
        sliderSection.style.backgroundColor = '#648bf0';
        sliderSection.style.borderBottomColor = '#96c5f2';
    } 
    else { 
        sliderSection.style.backgroundColor = '#f06c64';
        sliderSection.style.borderBottomColor = '#ea676b';
    };
    }
    
    
})


