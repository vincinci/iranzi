// Animation Controller for scroll-based animations
export class AnimationController {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
    }
    init() {
        this.setupIntersectionObserver();
        this.setupParallaxEffects();
        this.setupCounterAnimations();
    }
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                    // Add stagger delay for multiple elements
                    const delay = element.getAttribute('data-aos-delay');
                    if (delay) {
                        element.style.transitionDelay = delay + 'ms';
                    }
                }
            });
        }, this.observerOptions);
        // Observe elements with data-aos attribute
        document.querySelectorAll('[data-aos]').forEach(el => {
            const element = el;
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.project-image');
        window.addEventListener('scroll', () => {
            parallaxElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const scrollPercent = rect.top / window.innerHeight;
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const overlay = element.querySelector('.project-overlay');
                    if (overlay) {
                        overlay.style.transform = `translateY(${scrollPercent * 20}px)`;
                    }
                }
            });
        });
    }
    setupCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        const animateCounter = (element) => {
            const target = parseInt(element.getAttribute('data-target') || '0');
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    element.textContent = Math.ceil(current).toString();
                    requestAnimationFrame(updateCounter);
                }
                else {
                    element.textContent = target.toString();
                }
            };
            updateCounter();
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });
        counters.forEach(counter => observer.observe(counter));
    }
}
//# sourceMappingURL=animations.js.map