// script.js - Modular and commented JavaScript for functionality

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active'); // Toggle visibility
        });
    }

    // Smooth Scroll to Sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get section ID
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Smooth scrolling effect
                });
            }
        });
    });

    // Active Link Highlighting on Scroll
    window.addEventListener('scroll', () => {
        let currentSection = ''; // Track the current section
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop; // Top position of section
            const sectionHeight = section.clientHeight; // Height of section
            if (window.scrollY >= sectionTop - 50) { // 50px offset for better UX
                currentSection = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active'); // Remove active class from all links
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active'); // Add active class to the current link
            }
        });
    });
});

// script.js - Modular and commented JavaScript for functionality

document.addEventListener('DOMContentLoaded', () => {
    // Existing code for mobile menu toggle remains the same
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
    }

    // Existing code for smooth scrolling remains the same
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Existing code for active link highlighting remains the same
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // New: Carousel Functionality for Technical Skills
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = carouselContainer ? carouselContainer.children : [];
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let slideIndex = 0;
    let autoPlayInterval;

    if (slides.length > 0) {
        const totalSlides = slides.length;

        function showSlide(index) {
            if (index >= totalSlides) index = 0;  // Loop to first slide
            if (index < 0) index = totalSlides - 1;  // Loop to last slide
            carouselContainer.style.transform = `translateX(-${index * (100 / getSlidesPerView())}%)`;
            slideIndex = index;
        }

        function getSlidesPerView() {
            // Determine how many slides to show based on screen size
            if (window.innerWidth >= 768) return 3;  // 3 slides on desktop
            return 1;  // 1 slide on mobile
        }

        function nextSlide() {
            showSlide(slideIndex + 1);
        }

        function prevSlide() {
            showSlide(slideIndex - 1);
        }

        // Auto-play: Move to next slide every 3 seconds
        autoPlayInterval = setInterval(nextSlide, 3000);

        // Manual navigation
        if (prevButton) prevButton.addEventListener('click', () => {
            prevSlide();
            clearInterval(autoPlayInterval);  // Reset auto-play on manual interaction
            autoPlayInterval = setInterval(nextSlide, 3000);  // Restart auto-play
        });

        if (nextButton) nextButton.addEventListener('click', () => {
            nextSlide();
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(nextSlide, 3000);
        });

        // Initial slide
        showSlide(slideIndex);
    }
});