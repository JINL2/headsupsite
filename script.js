// Show header logo on scroll
window.addEventListener('scroll', function() {
    const logoSmall = document.querySelector('.logo-small');
    const heroLogo = document.querySelector('.hero-logo');
    
    if (heroLogo) {
        const heroLogoBottom = heroLogo.getBoundingClientRect().bottom;
        
        if (heroLogoBottom < 100) {
            logoSmall.classList.add('visible');
        } else {
            logoSmall.classList.remove('visible');
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Slider functionality
let slideIndexRed = 1;
let slideIndexBlue = 1;
let autoSlideRed;
let autoSlideBlue;

function showSlides(n, slider) {
    let slides, dots, slideIndex;
    
    if (slider === 'red') {
        slides = document.querySelectorAll('#redSlider .slide');
        dots = document.querySelectorAll('#redDots .dot');
        slideIndex = slideIndexRed;
    } else {
        slides = document.querySelectorAll('#blueSlider .slide');
        dots = document.querySelectorAll('#blueDots .dot');
        slideIndex = slideIndexBlue;
    }
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Update the appropriate slide index
    if (slider === 'red') {
        slideIndexRed = slideIndex;
    } else {
        slideIndexBlue = slideIndex;
    }
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

function currentSlide(n, slider) {
    if (slider === 'red') {
        clearInterval(autoSlideRed);
        slideIndexRed = n;
        showSlides(n, 'red');
        autoSlideShowRed();
    } else {
        clearInterval(autoSlideBlue);
        slideIndexBlue = n;
        showSlides(n, 'blue');
        autoSlideShowBlue();
    }
}

function autoSlideShowRed() {
    autoSlideRed = setInterval(() => {
        slideIndexRed++;
        showSlides(slideIndexRed, 'red');
    }, 4000);
}

function autoSlideShowBlue() {
    autoSlideBlue = setInterval(() => {
        slideIndexBlue++;
        showSlides(slideIndexBlue, 'blue');
    }, 4000);
}

// Start auto-sliding when page loads
document.addEventListener('DOMContentLoaded', function() {
    autoSlideShowRed();
    autoSlideShowBlue();
});