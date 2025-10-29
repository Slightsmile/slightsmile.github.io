class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        const isDark = document.body.classList.contains('dark');
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #fafafa;
                    color: #111827;
                    padding: 4rem 2rem;
                    text-align: center;
                }
                    footer {
                        background-color: #111827;
                        color: #fff;
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
                    color: #4b5563;
                    transition: color 0.3s ease, transform 0.3s ease;
                }
                
                .dark .social-link {
                    color: #d1d5db;
                }
                
                .social-link:hover {
                    color: #4f46e5;
                    transform: translateY(-3px);
                }
                
                .dark .social-link:hover {
                    color: #818cf8;
                }
                
                .copyright {
                    font-size: 0.875rem;
                    color: #6b7280;
                }
                
                .footer-links {
                    display: flex;
                    gap: 1.5rem;
                        flex-wrap: wrap;
                        justify-content: center;
                }
                
                .footer-link {
                    color: #ffffffff;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                
                .dark .footer-link {
                    color: #d1d5db;
                }
                
                .footer-link:hover {
                    color: #4f46e5;
                }
                
                .dark .footer-link:hover {
                    color: #818cf8;
                }

                    .footer-link.centered-last {
                        flex-basis: 100%;
                        text-align: center;
                    }
            </style>
            
            <footer class="${isDark ? 'dark' : ''}">
                <div class="footer-content">
                    <div class="social-links">
                        <a href="https://github.com" class="social-link" target="_blank" rel="noopener noreferrer">
                            <i data-feather="github"></i>
                        </a>
                        <a href="https://linkedin.com" class="social-link" target="_blank" rel="noopener noreferrer">
                            <i data-feather="linkedin"></i>
                        </a>
                        <a href="https://twitter.com" class="social-link" target="_blank" rel="noopener noreferrer">
                            <i data-feather="twitter"></i>
                        </a>
                        <a href="mailto:example@example.com" class="social-link">
                            <i data-feather="mail"></i>
                        </a>
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
                <script>
                // Center last link if it wraps to a new row
                (() => {
                    const footerLinks = this.shadowRoot.querySelector('.footer-links');
                    if (!footerLinks) return;
                    const links = Array.from(footerLinks.children);
                    if (links.length < 2) return;
                    // Remove previous centering
                    links.forEach(link => link.classList.remove('centered-last'));
                    // Check if last link is on a new row
                    const lastLink = links[links.length - 1];
                    const prevLink = links[links.length - 2];
                    if (lastLink.offsetTop > prevLink.offsetTop) {
                        lastLink.classList.add('centered-last');
                    }
                    // Recheck on window resize
                    window.addEventListener('resize', () => {
                        links.forEach(link => link.classList.remove('centered-last'));
                        if (lastLink.offsetTop > prevLink.offsetTop) {
                            lastLink.classList.add('centered-last');
                        }
                    });
                })();
                </script>
            `;
        }
    }
    customElements.define('custom-footer', CustomFooter);