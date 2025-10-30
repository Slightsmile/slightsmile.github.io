class CustomThemeToggle extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
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
                }
                .icon {
                    width: 1.2rem;
                    height: 1.2rem;
                    color: var(--text-primary);
                }
            </style>
            <button class="toggle-btn" title="Toggle dark/light mode">
                <span class="icon" id="theme-icon"></span>
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
    const icon = theme === 'dark' 
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
    this.shadowRoot.getElementById('theme-icon').innerHTML = icon;
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
