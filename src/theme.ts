// Theme Manager for Dark/Light Mode
export class ThemeManager {
    private toggleBtn: HTMLElement | null;
    private currentTheme: string;

    constructor() {
        this.toggleBtn = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
    }

    public init(): void {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateToggleIcon();

        // Setup toggle listener
        this.toggleBtn?.addEventListener('click', () => this.toggleTheme());
    }

    private toggleTheme(): void {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateToggleIcon();
        this.animateThemeTransition();
    }

    private updateToggleIcon(): void {
        const icon = this.toggleBtn?.querySelector('i');
        if (icon) {
            icon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    private animateThemeTransition(): void {
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
}
