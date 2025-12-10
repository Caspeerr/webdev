// Select all sections for scroll-based color transitions
const sections = document.querySelectorAll('section, .hero-section');
const body = document.body;

// Color palette for each section - inspired by Microsoft AI design
// These colors create a smooth, professional transition as you scroll
const colors = [
    '#e0beb0', // Hero Section: Warm peach/beige
    '#dbd6b6', // About Section: Light cream/yellow
    '#b3c7ce', // Projects Section: Soft blue/cyan
    '#c8d3c5'  // Skills Section: Light sage/green
];

// Smooth scroll event listener with debouncing for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    // Clear previous timeout
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Loop through each section and check if it's in the viewport
        sections.forEach((sec, index) => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;

            // Check if the middle of the viewport is within the current section
            if (scrollY + windowHeight / 2 >= top && scrollY + windowHeight / 2 < top + height) {
                // Ensure the index is within the bounds of the colors array
                if (index < colors.length) {
                    // Apply smooth color transition
                    body.style.backgroundColor = colors[index];
                }
            }
        });
    }, 10); // Debounce delay of 10ms for smooth performance
});

// Optional: Add a subtle parallax effect to hero section
const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroContent = heroSection.querySelector('.hero-content');
        if (heroContent && scrollY < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrollY / (window.innerHeight * 1.5));
        }
    });
}

// Add smooth transitions for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Animate project cards on scroll into view
    const projectCards = document.querySelectorAll('.project-card');
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    projectCards.forEach(card => observer.observe(card));
    skillCards.forEach(card => observer.observe(card));
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
