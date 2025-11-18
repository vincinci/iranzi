// TypeScript Portfolio Application
import { ParticleSystem } from './particles.js';
import { ThemeManager } from './theme.js';
import { TypingAnimation } from './typing.js';
import { ResumeGenerator } from './resume.js';
import { AnimationController } from './animations.js';

class PortfolioApp {
    private themeManager: ThemeManager;
    private typingAnimation: TypingAnimation;
    private resumeGenerator: ResumeGenerator;
    private animationController: AnimationController;
    private hamburger: HTMLElement | null;
    private navMenu: HTMLElement | null;

    constructor() {
        this.themeManager = new ThemeManager();
        this.typingAnimation = new TypingAnimation();
        this.resumeGenerator = new ResumeGenerator();
        this.animationController = new AnimationController();
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        
        this.init();
    }

    private init(): void {
        // Hide loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loadingScreen = document.getElementById('loadingScreen');
                if (loadingScreen) {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }
            }, 1000);
        });

        // Initialize particle system
        const canvas = document.getElementById('particles') as HTMLCanvasElement;
        if (canvas) {
            new ParticleSystem(canvas);
            console.log('✓ Particle system initialized');
        }

        // Setup event listeners
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupBackToTop();
        this.setupProjectCards();
        
        // Initialize components
        this.themeManager.init();
        this.typingAnimation.init();
        this.resumeGenerator.init();
        this.animationController.init();

        console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #2563eb; font-size: 18px; font-weight: bold;');
    }

    private setupNavigation(): void {
        // Mobile menu toggle
        this.hamburger?.addEventListener('click', () => {
            this.navMenu?.classList.toggle('active');
            this.hamburger?.classList.toggle('active');
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu?.classList.remove('active');
                this.hamburger?.classList.remove('active');
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(
                    (anchor as HTMLAnchorElement).getAttribute('href') || ''
                );
                if (target) {
                    const offsetTop = (target as HTMLElement).offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    private setupScrollEffects(): void {
        const navbar = document.querySelector('.navbar') as HTMLElement;
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');

        window.addEventListener('scroll', () => {
            // Navbar background on scroll
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                navbar.style.backgroundColor = 'var(--nav-bg)';
            } else {
                navbar.style.boxShadow = 'var(--shadow-sm)';
                navbar.style.backgroundColor = 'var(--nav-bg)';
            }

            // Active navigation link
            let current = '';
            sections.forEach(section => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id') || '';
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href')?.slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
    }

    private setupBackToTop(): void {
        const backToTopBtn = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn?.classList.add('visible');
            } else {
                backToTopBtn?.classList.remove('visible');
            }
        });

        backToTopBtn?.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    private setupProjectCards(): void {
        document.querySelectorAll('.project-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const card = (e.target as HTMLElement).closest('.project-card');
                const title = card?.querySelector('h3')?.textContent || 'Project';
                
                // Create modal or show notification
                this.showProjectModal(title);
            });
        });
    }

    private showProjectModal(title: string): void {
        // Simple alert for now - can be replaced with a proper modal
        const message = `Viewing details for: ${title}\n\nThis feature can be expanded to show full project details, screenshots, and live demos.`;
        alert(message);
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});
