class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
                
            <style>
                nav {
                    background: transparent;
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

                nav.scrolled {
                    background: rgba(17, 24, 39, 0.7); /* dark bg-gray-900 with opacity */
                    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
                    border-bottom: 1px solid rgba(0,0,0,0.15);
                }

                :host-context(.dark) nav {
                    background: transparent;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                }

                :host-context(.dark) nav.scrolled {
                    background: rgba(17, 24, 39, 0.85); /* dark bg-gray-900 with more opacity */
                    border-bottom: 1px solid rgba(255,255,255,0.10);
                }
.nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff !important;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
.nav-links {
                    display: flex;
                    gap: 1.5rem;
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
                    color: #4f46e5;
                }
                
                .dark .nav-link:hover {
                    color: #818cf8;
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #4f46e5;
                    transition: width 0.3s ease;
                }
                
                .dark .nav-link::after {
                    background-color: #818cf8;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .nav-link.active {
                    color: #4f46e5;
                }
                
                .dark .nav-link.active {
                    color: #818cf8;
                }
                
                .nav-link.active::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    background: none;
                    border: none;
                    border-radius: 0;
                    cursor: pointer;
                    color: #fff !important;
                    width: auto;
                    height: auto;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                    display: none;
                }
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: flex !important;
                    }
                }
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: flex;
                    }
                }
                
                .dark .mobile-menu-btn {
                    color: #fff !important;
                }
                
                @media (max-width: 768px) {
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
                }
            </style>
            
            <nav>
                <div class="nav-container">
                    <a href="#home" class="logo flex items-center gap-2">
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
                        <custom-theme-toggle></custom-theme-toggle>
                    </div>
                    
                    <button class="mobile-menu-btn">
                        <span class="hamburger-icon">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="6" width="28" height="3" rx="1.5" fill="#fff" />
                                <rect y="13" width="28" height="3" rx="1.5" fill="#fff" />
                                <rect y="20" width="28" height="3" rx="1.5" fill="#fff" />
                            </svg>
                        </span>
                    </button>
                </div>
            </nav>
        `;
        
        // Initialize mobile menu
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optionally animate or toggle hamburger to X here if desired
        });
        
        // Highlight active section & navbar scroll effect
        const sections = document.querySelectorAll('section');
        const navItems = this.shadowRoot.querySelectorAll('.nav-link');
        const nav = this.shadowRoot.querySelector('nav');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 300) {
                    current = section.getAttribute('id');
                }
            });
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });

            // Add/remove scrolled class for navbar background
            if (window.scrollY > 10) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
        
        // Close mobile menu when clicking a link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);