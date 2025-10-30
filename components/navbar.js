class CustomNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.shadowRoot.innerHTML = `
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
                .nav-link:hover::after {
                    width: 100%;
                }
                .nav-link.active {
                    color: var(--primary);
                }
                .nav-link.active::after {
                    width: 100%;
                }
                .mobile-menu-btn {
                    background: none;
                    border: none;
                    border-radius: 0;
                    cursor: pointer;
                    color: var(--text-primary);
                    width: auto;
                    height: auto;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                    display: none;
                }
                    .mobile-theme-toggle {
                        display: none;
                    }
                    .desktop-theme-toggle {
                        display: flex;
                        align-items: center;
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
                    .mobile-menu-btn {
                        display: block;
                    }
                        .mobile-theme-toggle {
                            display: flex !important;
                            margin: 0 1rem;
                            align-items: center;
                        }
                        .desktop-theme-toggle {
                            display: none !important;
                        }
                        .nav-container {
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                        }
                        .logo {
                            margin-right: 0.5rem;
                        }
                }
            </style>
            <nav>
                <div class="nav-container">
                    <a href="#home" class="logo flex items-center gap-2 theme-heading">
                        <i data-feather="code"></i>
                        mohi!
                    </a>
                        <div class="nav-links">
                            <a href="#home" class="nav-link">Home</a>
                            <a href="#skills" class="nav-link">Skills</a>
                            <a href="#experience" class="nav-link">Experience</a>
                            <a href="#education" class="nav-link">Education</a>
                            <a href="#projects" class="nav-link">Projects</a>
                            <a href="#contact" class="nav-link">Contact</a>
                        </div>
                        <custom-theme-toggle class="desktop-theme-toggle"></custom-theme-toggle>
                        <custom-theme-toggle class="mobile-theme-toggle"></custom-theme-toggle>
                        <button class="mobile-menu-btn">
                            <span class="hamburger-icon">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="6" width="28" height="3" rx="1.5" fill="var(--hamburger-color)" />
                                        <rect y="13" width="28" height="3" rx="1.5" fill="var(--hamburger-color)" />
                                        <rect y="20" width="28" height="3" rx="1.5" fill="var(--hamburger-color)" />
                                    </svg>
                            </span>
                        </button>
                </div>
            </nav>
        `;
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
        this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 768) navLinks.classList.remove('active');
            });
        });
    }
}
customElements.define('custom-navbar', CustomNavbar);