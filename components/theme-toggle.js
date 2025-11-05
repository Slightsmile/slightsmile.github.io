/**
 * Custom Theme Toggle Web Component - Optimized Version
 * Provides light/dark theme switching with localStorage persistence
 */
class CustomThemeToggle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
        this.updateIcon();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .toggle-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.5rem 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease;
                }
                
                .toggle-btn:hover {
                    transform: scale(1.1);
                }
                
                .icon {
                    width: 1.2rem;
                    height: 1.2rem;
                    color: var(--text-primary);
                    transition: color 0.3s ease;
                }
            </style>
            <button class="toggle-btn" title="Toggle dark/light mode" aria-label="Toggle theme">
                <span class="icon" id="theme-icon"></span>
            </button>
        `;
    }

    setupEventListeners() {
        const button = this.shadowRoot.querySelector('.toggle-btn');
        button.addEventListener('click', () => this.toggleTheme());
        
        // Listen for theme changes from other toggle instances
        window.addEventListener('theme-changed', () => this.updateIcon());
    }

    getCurrentTheme() {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setTheme(theme) {
        document.body.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
        this.updateIcon();
        
        // Notify other toggle instances
        window.dispatchEvent(new CustomEvent('theme-changed', { 
            detail: { theme } 
        }));
    }

    toggleTheme() {
        const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    updateIcon() {
        const icon = this.shadowRoot.getElementById('theme-icon');
        if (!icon) return;
        
        const isDark = document.body.classList.contains('dark');
        icon.innerHTML = isDark
            ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
            : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
    }
}

// Initialize theme on page load
(function initializeTheme() {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme || (prefersDark ? 'dark' : 'light');
    
    document.body.classList.toggle('dark', theme === 'dark');
    
    if (!storedTheme) {
        localStorage.setItem('theme', theme);
    }
})();

customElements.define('custom-theme-toggle', CustomThemeToggle);
