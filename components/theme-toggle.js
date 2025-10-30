class CustomThemeToggle extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .toggle-btn {
                    display: flex;
                    align-items: center;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 1.2rem;
                    color: var(--text-primary);
                    padding: 0.5rem 1rem;
                    border-radius: 9999px;
                    transition: background 0.2s;
                }
                .toggle-btn:hover {
                    background: var(--bg-secondary);
                }
                .icon {
                    font-size: 1.2rem;
                }
            </style>
            <button class="toggle-btn" title="Toggle dark/light mode">
                <span class="icon" id="theme-icon">🌙</span>
            </button>
        `;
        this.updateButton();
        this.shadowRoot.querySelector('.toggle-btn').addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    getCurrentTheme() {
        if (localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        // System preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setTheme(theme) {
        document.body.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
        this.updateButton();
    }

    toggleTheme() {
        const current = this.getCurrentTheme();
        const next = current === 'dark' ? 'light' : 'dark';
        this.setTheme(next);
        // Dispatch event for other components if needed
        window.dispatchEvent(new CustomEvent('theme-changed', { detail: { theme: next } }));
    }

    updateButton() {
    const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const icon = theme === 'dark' ? '☀️' : '🌙';
    this.shadowRoot.getElementById('theme-icon').textContent = icon;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // Set theme on load
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.body.classList.toggle('dark', theme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
    }
});

window.addEventListener('theme-changed', () => {
    // Update all theme toggles
    document.querySelectorAll('custom-theme-toggle').forEach(el => {
        if (typeof el.updateButton === 'function') el.updateButton();
    });
});

customElements.define('custom-theme-toggle', CustomThemeToggle);
