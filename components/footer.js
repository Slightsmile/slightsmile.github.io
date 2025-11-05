/**
 * Custom Footer Web Component - Optimized Version
 * Provides responsive footer with social links and navigation
 */
class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.resizeObserver = null;
    }

    connectedCallback() {
        this.render();
        this.setupResizeObserver();
    }

    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
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
                footer {
                    background-color: var(--bg-primary);
                    color: var(--text-primary);
                    padding: 2rem;
                    text-align: center;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1.5rem;
                }
                
                .social-link {
                    color: var(--text-secondary);
                    transition: color 0.3s, transform 0.3s;
                }
                
                .social-link:hover {
                    color: var(--primary);
                    transform: translateY(-3px);
                }
                
                .copyright {
                    font-size: 0.875rem;
                    color: var(--text-secondary);
                }
                
                .footer-links {
                    display: flex;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                
                .footer-link {
                    color: var(--text-primary);
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s;
                }
                
                .footer-link:hover {
                    color: var(--primary);
                }
                
                .footer-link.centered-last {
                    flex-basis: 100%;
                    text-align: center;
                }
            </style>
        `;
    }

    getTemplate() {
        const socialLinks = [
            { href: 'https://github.com/mohi28', icon: 'github', label: 'GitHub' },
            { href: 'https://linkedin.com/in/mohi28', icon: 'linkedin', label: 'LinkedIn' },
            { href: 'https://twitter.com', icon: 'twitter', label: 'Twitter' },
            { href: 'mailto:akibh987@gmail.com', icon: 'mail', label: 'Email' }
        ];

        const footerLinks = [
            { href: '#home', text: 'Home' },
            { href: '#skills', text: 'Skills' },
            { href: '#experience', text: 'Experience' },
            { href: '#education', text: 'Education' },
            { href: '#projects', text: 'Projects' }
        ];

        return `
            <footer>
                <div class="footer-content">
                    <div class="social-links" role="list" aria-label="Social media links">
                        ${socialLinks.map(link => `
                            <a href="${link.href}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${link.label}">
                                <i data-feather="${link.icon}" aria-hidden="true"></i>
                            </a>
                        `).join('')}
                    </div>
                    <div class="footer-links" role="navigation" aria-label="Footer navigation">
                        ${footerLinks.map(link => `
                            <a href="${link.href}" class="footer-link">${link.text}</a>
                        `).join('')}
                    </div>
                    <div class="copyright">&copy; ${new Date().getFullYear()} MD. Mohiuddin Ahmed. All rights reserved.</div>
                </div>
            </footer>
        `;
    }

    setupResizeObserver() {
        const footerLinks = this.shadowRoot.querySelector('.footer-links');
        if (!footerLinks) return;

        const links = Array.from(footerLinks.children);
        if (links.length < 2) return;

        const updateCentering = () => {
            links.forEach(link => link.classList.remove('centered-last'));
            
            const lastLink = links[links.length - 1];
            const prevLink = links[links.length - 2];
            
            if (lastLink.offsetTop > prevLink.offsetTop) {
                lastLink.classList.add('centered-last');
            }
        };

        // Use ResizeObserver for better performance
        this.resizeObserver = new ResizeObserver(updateCentering);
        this.resizeObserver.observe(footerLinks);
        
        // Initial update
        updateCentering();
    }
}

customElements.define('custom-footer', CustomFooter);