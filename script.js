
// DOM Elements
const header = document.getElementById('header');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const menu = document.querySelector('.menu');
const typingElement = document.querySelector('.typing');
const scrollToTopBtn = document.getElementById('scrollToTop');
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('.nav-link');

// Typing effect
const texts = ["Développeur.", "Designer.", "Freelance."];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
const typingDelay = 1500;

// Initialize typing animation
function typeText() {
    const currentText = texts[textIndex];
    
    if (!isDeleting) {
        // Typing
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        // If word is complete
        if (charIndex === currentText.length) {
            // Pause before deleting
            isDeleting = true;
            typingSpeed = 50; 
            setTimeout(typeText, typingDelay);
            return;
        }
    } else {
        // Deleting
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        // If word is deleted
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 100;
        }
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation
typeText();

// Sticky header
function handleScroll() {
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 0';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '1rem 0';
        header.style.boxShadow = 'none';
    }
    
    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
    
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    menu.classList.toggle('show');
}

// Smooth scroll for anchor links
function smoothScroll(e) {
    if (this.hash !== '') {
        e.preventDefault();
        
        const hash = this.hash;
        const targetElement = document.querySelector(hash);
        
        if (targetElement) {
            // Close mobile menu if open
            if (menu.classList.contains('show')) {
                toggleMobileMenu();
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
}

// Initialize animations for elements as they come into view
function initAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .hobby-card, .timeline-card, .glass-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fade-in 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        // Reset animation
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// Event Listeners
window.addEventListener('scroll', handleScroll);
scrollToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Apply smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active link
    handleScroll();
    
    // Initialize animations
    initAnimations();
    
    // Form validation and submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form validation logic would go here
            // This is just a placeholder, actual validation would be more robust
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        });
    }
});
