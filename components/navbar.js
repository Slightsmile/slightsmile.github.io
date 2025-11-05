/**
 * Custom Navbar Web Component - Optimized Version
 * Provides responsive navigation with theme toggle integration
 */
class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            ${this.getStyles()}
            ${this.getTemplate()}
        `;
    }

    getStyles() {
        return `
            <style>
                nav {
                    background-color: var(--nav-bg);
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    padding: 1rem 2rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    transition: background 0.3s, box-shadow 0.3s, border-bottom 0.3s;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                }
                
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 1rem;
                }
                
                .logo {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                    justify-content: center;
                    flex: 1;
                }
                
                .nav-link {
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-weight: 500;
                    padding: 0.5rem 0;
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .nav-link:hover {
                    color: var(--primary);
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--primary);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after,
                .nav-link.active::after {
                    width: 100%;
                }
                
                .nav-link.active {
                    color: var(--primary);
                }
                
                .mobile-menu-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--text-primary);
                    width: auto;
                    height: auto;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                }
                
                .desktop-theme-toggle {
                    display: flex;
                    align-items: center;
                }
                
                .mobile-theme-toggle {
                    display: none;
                }
                
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: flex !important;
                    }
                    
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background-color: var(--bg-primary);
                        padding: 1rem;
                        gap: 0;
                    }
                    
                    .nav-links.active {
                        display: flex;
                    }
                    
                    .nav-link {
                        padding: 0.75rem 1rem;
                    }
                    
                    .mobile-theme-toggle {
                        display: flex !important;
                        margin: 0 1rem;
                        align-items: center;
                    }
                    
                    .desktop-theme-toggle {
                        display: none !important;
                    }
                    
                    .logo {
                        margin-right: 0.5rem;
                    }
                }
            </style>
        `;
    }

    getTemplate() {
        const navLinks = [
            { href: '#home', text: 'Home' },
            { href: '#skills', text: 'Skills' },
            { href: '#experience', text: 'Experience' },
            { href: '#education', text: 'Education' },
            { href: '#projects', text: 'Projects' },
            { href: '#contact', text: 'Contact' }
        ];

        return `
            <nav>
                <div class="nav-container">
                    <a href="#home" class="logo flex items-center gap-2 theme-heading" aria-label="Home">
                        <i data-feather="code" aria-hidden="true"></i>
                        mohi!
                    </a>
                    <div class="nav-links" role="navigation" aria-label="Main navigation">
                        ${navLinks.map(link => `<a href="${link.href}" class="nav-link">${link.text}</a>`).join('')}
                    </div>
                    <custom-theme-toggle class="desktop-theme-toggle"></custom-theme-toggle>
                    <custom-theme-toggle class="mobile-theme-toggle"></custom-theme-toggle>
                    <button class="mobile-menu-btn" aria-label="Toggle mobile menu" aria-expanded="false">
                        <span class="hamburger-icon">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <rect y="6" width="28" height="3" rx="1.5" fill="var(--hamburger-color)" />
                                <rect y="13" width="28" height="3" rx="1.5" fill="var(--hamburger-color)" />
                                <rect y="20" width="28" height="3" rx="1.5" fill="var(--hamburger-color)" />
                            </svg>
                        </span>
                    </button>
                </div>
            </nav>
        `;
    }

    setupEventListeners() {
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const linkElements = this.shadowRoot.querySelectorAll('.nav-link');

        // Mobile menu toggle
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                const isExpanded = navLinks.classList.toggle('active');
                mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
            });
        }

        // Close mobile menu on link click
        linkElements.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);