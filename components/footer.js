class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #f9fafb;
                    color: #4b5563;
                    padding: 4rem 2rem;
                    text-align: center;
                }
                
                .dark footer {
                    background-color: #111827;
                    color: #d1d5db;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 2rem;
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
                }
                
                .footer-links {
                    display: flex;
                    gap: 1.5rem;
                }
                
                .footer-link {
                    color: #4b5563;
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
            </style>
            
            <footer>
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
                        <a href="#projects" class="footer-link">Projects</a>
                        <a href="#education" class="footer-link">Education</a>
                       {"ok":false,"message":"Request timeout: The AI model took too long to respond. Please try again with a simpler prompt or try a different model."}