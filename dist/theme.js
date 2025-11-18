// Theme Manager for Dark/Light Mode
export class ThemeManager {
    constructor() {
        this.toggleBtn = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
    }
    init() {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateToggleIcon();
        // Setup toggle listener
        this.toggleBtn?.addEventListener('click', () => this.toggleTheme());
    }
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateToggleIcon();
        this.animateThemeTransition();
    }
    updateToggleIcon() {
        const icon = this.toggleBtn?.querySelector('i');
        if (icon) {
            icon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
    animateThemeTransition() {
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
}
//# sourceMappingURL=theme.js.map