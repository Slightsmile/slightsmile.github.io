class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: var(--bg-primary);
                    color: var(--text-primary);
                    padding: 2rem 2rem;
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
            <footer>
                <div class="footer-content">
                    <div class="social-links">
                        <a href="https://github.com/mohi28" class="social-link" target="_blank" rel="noopener noreferrer"><i data-feather="github"></i></a>
                        <a href="https://linkedin.com/in/mohi28" class="social-link" target="_blank" rel="noopener noreferrer"><i data-feather="linkedin"></i></a>
                        <a href="https://twitter.com" class="social-link" target="_blank" rel="noopener noreferrer"><i data-feather="twitter"></i></a>
                        <a href="mailto:akibh987@gmail.com" class="social-link"><i data-feather="mail"></i></a>
                    </div>
                    <div class="footer-links">
                        <a href="#home" class="footer-link">Home</a>
                        <a href="#skills" class="footer-link">Skills</a>
                        <a href="#experience" class="footer-link">Experience</a>
                        <a href="#education" class="footer-link">Education</a>
                        <a href="#projects" class="footer-link">Projects</a>
                    </div>
                    <div class="copyright">&copy; 2025 MD. Mohiuddin Ahmed. All rights reserved.</div>
                </div>
            </footer>
        `;
        this.centerLastFooterLink();
    }

    centerLastFooterLink() {
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
        updateCentering();
        window.addEventListener('resize', updateCentering, { passive: true });
    }
}

customElements.define('custom-footer', CustomFooter);