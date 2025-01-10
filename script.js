// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    function toggleMenu() {
        navLinks.classList.toggle('active');
        const span = menuToggle.querySelector('span');
        span.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            const span = menuToggle.querySelector('span');
            if (span) span.textContent = '☰';
            document.body.style.overflow = '';
        }
    });

    // Handle logo click
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            navLinks.classList.remove('active');
            const span = menuToggle.querySelector('span');
            if (span) span.textContent = '☰';
        });
    }

    // Make toggleMenu available globally
    window.toggleMenu = toggleMenu;
});

// Add scroll event listener for navbar
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    // Add background opacity based on scroll position
    if (currentScroll > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'white';
        navbar.style.boxShadow = 'none';
    }
    
    // Hide/show navbar based on scroll direction
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

