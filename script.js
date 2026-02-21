// Typed Text Effect for Hero
const typedStrings = ['Java Developer', 'Full-Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
let typedIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typedSpeed = 100;

function typeEffect() {
    const typedEl = document.getElementById('typedText');
    if (!typedEl) return;

    const current = typedStrings[typedIndex];

    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typedSpeed = 50;
    } else {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typedSpeed = 100;
    }

    if (!isDeleting && charIndex === current.length) {
        typedSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typedIndex = (typedIndex + 1) % typedStrings.length;
        typedSpeed = 500;
    }

    setTimeout(typeEffect, typedSpeed);
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Back to Top Button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Education Timeline Animation
function showEducation(id) {
    document.querySelectorAll('.timeline-content').forEach(content => {
        content.classList.remove('active');
    });
    const selectedContent = document.getElementById(id);
    if (selectedContent) selectedContent.classList.add('active');
}

// Show first education item by default
document.addEventListener('DOMContentLoaded', function() {
    showEducation('btech');
    setTimeout(typeEffect, 500);
});

// Intersection Observer for timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const content = entry.target.querySelector('.timeline-content');
            if (content) content.classList.add('active');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});
