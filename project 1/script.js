// Select all sections for scroll-based color transitions
const sections = document.querySelectorAll('section, .hero-section');
const body = document.body;

const colors = [ '#e0beb0', '#e9b9aaff', '#b3c7ce', '#c29f88ff'  ];

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
    }, 120); // Debounce delay of 10ms for smooth performance
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

