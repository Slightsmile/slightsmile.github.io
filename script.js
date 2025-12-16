/**
 * Portfolio Script - Optimized Version
 * Handles animations, dynamic content rendering, and interactivity
 */

// Constants
const CONSTANTS = {
    SCROLL_THRESHOLD: 300,
    TYPE_SPEED: 50,
    BACK_SPEED: 30,
    GSAP_DURATION: 1,
    GSAP_Y_OFFSET: 50,
    SKILLS_PER_ROW_MOBILE: 5,
    SKILLS_PER_ROW_DESKTOP: 5,
    MOBILE_BREAKPOINT: 768,
    INITIAL_PROJECTS_COUNT: 3
};

// Data
const DATA = {
    skills: [
        { name: 'C', icon: 'c' }, { name: 'C++', icon: 'cpp' }, { name: 'Java', icon: 'java' }, { name: 'Python', icon: 'python' },
        { name: 'HTML5', icon: 'html' }, { name: 'CSS', icon: 'css3' }, { name: 'JavaScript', icon: 'javascript' }, { name: 'Dart', icon: 'dart' },
        { name: 'Flutter', icon: 'flutter' }, { name: 'FastAPI', icon: 'fastapi' }, { name: 'MySQL', icon: 'mysql' }, { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Nginx', icon: 'nginx' }, { name: 'Systemd', icon: 'systemd' }, { name: 'Git', icon: 'git' }, { name: 'Arduino', icon: 'arduino' },
        { name: 'Cisco', icon: 'cisco' }, { name: 'Ubuntu', icon: 'ubuntu' }, { name: 'Latex', icon: 'latex' }, { name: 'Notion', icon: 'notion' },
        { name: 'Figma', icon: 'figma' }, { name: 'Canva', icon: 'canva' }, { name: 'Capcut', icon: 'capcut' }, { name: 'Google Workspace', icon: 'googleworkspace' }, { name: 'Microsoft 365 Copilot', icon: 'microsoft365copilot' }
    ],
    experiences: [
        { title: 'Project Associate', company: 'Prospect Engine', period: 'Sep 2024 – Nov 2024', description: 'Data Analysis, Project Monitoring, Client Interaction', position: 'right' },
        { title: 'Scriptwriter', company: 'PC Builder Bangladesh', period: 'Aug 2023 – Oct 2023', description: 'Video Conceptualization, Content Research', position: 'left' },
        { title: 'Store Manager & Computer Operator', company: 'ShopUP', period: 'Aug 2021 – Oct 2021', description: 'Store & Maintenance Management, Auditing', position: 'right' },
        { title: 'Salesperson', company: 'Shwapno', period: 'Apr 2019 – Jun 2019', description: 'Sales Management, Customer relationship management', position: 'left' }
    ],
    education: [
        { degree: 'BSc. in CSE', institution: 'Daffodil International University', period: '2022 - present', description: 'GPA: 3.48/4.0', position: 'right' },
        { degree: 'HSC (Science)', institution: 'Mohammadpur Preparatory School and College', period: '2019 - 2021', description: 'GPA: 5.0/5.0', position: 'left' },
        { degree: 'SSC (Science)', institution: 'Dhanmondi Govt. Boys High School', period: '2009 - 2019', description: 'GPA: 4.67/5.0', position: 'right' }
    ],
    projects: [
        { title: 'Gallbladder Cancer Detection', description: 'Built a CNN-based model to classify ultrasound images.', technologies: ['Deep Learning', 'Python', 'PyTorch'], image: './images/disease.png', links: [{ label: 'Github', url: 'https://github.com/Slightsmile/Gallblader-Cancer-Detection-DL' }] },
        { title: 'Morse Decoder', description: 'Hardware project decoding Morse code into text.', technologies: ['Arduino UNO', 'C'], image: './images/morse.png', links: [{ label: 'Github', url: 'https://github.com/Slightsmile/Morse-Decoder-Arduino-Project' }] },
        { title: 'DIU Transport', description: 'A modern, minimal, responsive website for DIU transport schedules.', technologies: ['HTML', 'CSS', 'JS'], image: './images/diubus.png', links: [{ label: 'Live', url: 'https://slightsmile.github.io/DIU-Transport/' }] },
        { title: 'University Network Simulator', description: 'Implementing a scalable network for a university for simulation and configuration.', technologies: ['Cisco'], image: './images/network.png', links: [{ label: 'Github', url: 'https://github.com/Slightsmile/University-Network-Simulator' }] },
        { title: 'Subtext', description: 'A secure multi-platform chat app', technologies: ['Flutter', 'Dart', 'Firebase'], image: './images/subtext.png', links: [{ label: 'Github', url: 'https://github.com/Slightsmile/Subtext' }] },
        { title: 'Classmate+', description: 'Student productivity app design combining tasks and organization to boost motivation and success.', technologies: ['Figma'], image: './images/classmate.png', links: [{ label: 'Live', url: 'https://www.google.com/url?q=https%3A%2F%2Fwww.figma.com%2Fproto%2FNkYm8rT7KbCRHIadk5NKIP%2FClassMate-%3Fnode-id%3D2-702%26starting-point-node-id%3D7%253A835%26t%3DizewGxjNkBLrDTdA-1&sa=D&sntz=1&usg=AOvVaw1szct3YA0-tdQ-hxRX3tSM' }] },
        { title: 'Mini SQL Interpreter', description: 'A lightweight SQL-like interpreter for querying CSV files', technologies: ['C', 'FLex', 'Bison'], image: './images/sql.png', links: [{ label: 'Github', url: 'https://github.com/Slightsmile/Mini-Sql-Interpreter' }] },
        { title: 'MemSim', description: 'Explore operating system memory management through interactive simulations and visualization.', technologies: ['HTML', 'CSS', 'JS'], image: './images/memsim.png', links: [{ label: 'Live', url: 'https://slightsmile.github.io/MemSim/' }] },
        { title: 'Digital Door Lock', description: 'A smart digital door lock built using Arduino Nano for secure home or office access control.', technologies: ['Arduino Nano'], image: './images/lock.png', links: [{ label: 'Github', url: 'https://github.com/Slightsmile/DoorLock-Arduino-Project' }] },
        { title: 'Covid-19 Prediction', description: 'Predicts COVID-19 from symptoms using machine learning and compares models for accuracy.', technologies: ['Machine Learning', 'Python', 'Scikit-learn'], image: './images/disease.png', links: [{ label: 'Github', url: 'https://github.com/Slightsmile/Covid-Prediction-ML' }] },
        { title: 'Library Management System', description: 'Developed a CRUD-based desktop application for managing book borrowing/returns.', technologies: ['Python', 'Tkinter', 'PyMySQL'], image: './images/library.png', links: [{ label: 'Github', url: 'https://github.com/Slightsmile/Library-MS-Project' }] },
        { title: 'Bus Management System', description: 'Developed system for managing bus tickets and schedules.', technologies: ['Java', 'Java Swing', 'MySQL'], image: './images/bus.png', links: [{ label: 'Github', url: 'https://github.com/Slightsmile/Bus-MS-Project' }] }
    ]
};

// Utility Functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const toggleClasses = (element, classMap) => {
    Object.entries(classMap).forEach(([className, shouldAdd]) => {
        element.classList.toggle(className, shouldAdd);
    });
};

const isMobile = () => window.innerWidth <= CONSTANTS.MOBILE_BREAKPOINT;

const createTimelineItem = (item) => {
    const container = document.createElement('div');
    container.className = `timeline-item ${item.position} theme-card-bg theme-text p-6 rounded-lg shadow-md slide-up`;
    container.innerHTML = `
        <div class="timeline-content">
            <h3 class="text-xl font-semibold theme-heading">${item.title || item.degree}</h3>
            <h4 class="text-lg theme-subheading">${item.company || item.institution}</h4>
            <p class="theme-meta">${item.period}</p>
            <p class="theme-desc mt-2">${item.description}</p>
        </div>
    `;
    return container;
};

// Main Application
document.addEventListener('DOMContentLoaded', () => {
    initTypedAnimation();
    initScrollAnimations();
    initBackToTop();
    renderSkills();
    renderExperience();
    renderEducation();
    renderProjects();

    // Initialize feather icons after DOM manipulation
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

// Typed.js Animation
function initTypedAnimation() {
    if (typeof Typed === 'undefined') return;

    new Typed('#typed', {
        strings: ['Data Analyst', 'Developer', 'Designer', 'Machine Learning Enthusiast', 'Tech Explorer'],
        typeSpeed: CONSTANTS.TYPE_SPEED,
        backSpeed: CONSTANTS.BACK_SPEED,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// GSAP Scroll Animations
function initScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none none' },
            opacity: 0,
            y: CONSTANTS.GSAP_Y_OFFSET,
            duration: CONSTANTS.GSAP_DURATION
        });
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;

    const handleScroll = () => {
        const show = window.pageYOffset > CONSTANTS.SCROLL_THRESHOLD;
        toggleClasses(backToTopButton, {
            'opacity-0': !show,
            'invisible': !show,
            'opacity-100': show,
            'visible': show
        });
    };

    window.addEventListener('scroll', debounce(handleScroll, 100), { passive: true });
    backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Skills Rendering
function renderSkills() {
    const skillsContainer = document.getElementById('skills-logos');
    if (!skillsContainer) return;

    const renderSkillsGrid = () => {
        skillsContainer.innerHTML = '';
        const perRow = isMobile() ? CONSTANTS.SKILLS_PER_ROW_MOBILE : CONSTANTS.SKILLS_PER_ROW_DESKTOP;

        for (let i = 0; i < DATA.skills.length; i += perRow) {
            const row = document.createElement('div');
            row.className = 'flex flex-row flex-wrap justify-center items-center gap-4 w-full';
            row.setAttribute('role', 'listitem');

            DATA.skills.slice(i, i + perRow).forEach(skill => {
                const logo = document.createElement('a');
                logo.href = 'https://skills.syvixor.com';
                logo.target = '_blank';
                logo.rel = 'noopener noreferrer';
                logo.title = skill.name;
                logo.className = 'skill-box';
                logo.setAttribute('aria-label', skill.name);
                logo.innerHTML = `<img src="https://skills.syvixor.com/api/icons?i=${skill.icon}" alt="${skill.name} icon" style="width:72px;height:64px;object-fit:contain;" loading="lazy" />`;
                row.appendChild(logo);
            });

            skillsContainer.appendChild(row);
        }
    };

    renderSkillsGrid();
    window.addEventListener('resize', debounce(renderSkillsGrid, 250));
}

// Experience Rendering
function renderExperience() {
    const container = document.querySelector('#experience .timeline');
    if (!container) return;
    DATA.experiences.forEach(exp => container.appendChild(createTimelineItem(exp)));
}

// Education Rendering
function renderEducation() {
    const container = document.querySelector('#education .timeline');
    if (!container) return;
    DATA.education.forEach(edu => container.appendChild(createTimelineItem(edu)));
}

// Projects Rendering
// Projects Rendering - 3D Carousel
function renderProjects() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');

    if (!track || !dotsContainer) return;

    // State
    let current = 0;
    let startX = null;
    let isDragging = false;
    let isAutoRotating = true;
    let autoRotateInterval;
    const cards = [];

    // Create Cards
    DATA.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card-carousel theme-text select-none cursor-grab active:cursor-grabbing';

        // Image
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.className = 'w-full h-48 object-cover pointer-events-none';
        img.loading = 'lazy';

        // Content
        const content = document.createElement('div');
        content.className = 'p-6 flex-1 flex flex-col relative z-10';

        // Title & Desc
        content.innerHTML = `
            <h3 class="text-xl font-semibold theme-heading mb-2 pointer-events-none">${project.title}</h3>
            <p class="theme-desc mb-4 text-sm line-clamp-3 pointer-events-none">${project.description}</p>
        `;

        // Tags
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'flex flex-wrap gap-2 mb-4 pointer-events-none';
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'px-3 py-1 theme-chip text-xs rounded-full';
            span.textContent = tech;
            tagsDiv.appendChild(span);
        });
        content.appendChild(tagsDiv);

        // Links (Buttons)
        if (project.links && project.links.length > 0) {
            const linksDiv = document.createElement('div');
            linksDiv.className = 'flex gap-2 mt-auto';
            project.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                a.className = 'flex items-center gap-1 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow hover:bg-indigo-700 transition-colors pointer-events-auto z-20';

                const iconName = link.label.toLowerCase() === 'github' ? 'github' : 'external-link';
                a.innerHTML = `<i data-feather="${iconName}" class="w-4 h-4"></i> ${link.label}`;
                // Prevent drag on button click
                a.addEventListener('mousedown', (e) => e.stopPropagation());
                a.addEventListener('touchstart', (e) => e.stopPropagation());

                linksDiv.appendChild(a);
            });
            content.appendChild(linksDiv);
        }

        card.appendChild(img);
        card.appendChild(content);

        // Add subtle gradient overlay
        const gradient = document.createElement('div');
        gradient.className = 'absolute inset-0 bg-gradient-to-br from-blue-50/10 via-transparent to-amber-50/10 pointer-events-none';
        card.appendChild(gradient);

        track.appendChild(card);
        cards.push(card);
    });

    // Create Dots
    DATA.projects.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `w-2 h-2 rounded-full transition-all duration-500 bg-gray-300 hover:bg-gray-400`;
        dot.ariaLabel = `Go to project ${index + 1}`;
        dot.addEventListener('click', () => {
            current = index;
            resetAutoRotate();
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });

    const updateCarousel = () => {
        const total = cards.length;

        cards.forEach((card, index) => {
            const position = (index - current + total) % total;

            // Logic derived from React component
            // We need to map position index to transforms
            // The React logic maps specific relative positions (0, 1, 2...) to transforms
            // We need to find the "visual" position.

            // In React: position = (index - current + length) % length
            // If current is 0:
            // index 0 -> pos 0 (Center)
            // index 1 -> pos 1 (Right)
            // index 2 -> pos 2 (Far Right)
            // index 11 (last) -> pos 11 -> matches logic?
            // The React positions array has 8 entries. 
            // 0: Center
            // 1: Right
            // 2: Far Right
            // 3: Left
            // 4: Far Left
            // 5: Extra Far Right
            // 6: Extra Far Left
            // 7: Hidden

            // We need to map our simple circular index to these specific "slots".
            // Let's define visual slots relative to center.
            let visualPos = 7; // Default hidden
            let zIndex = 0;
            let opacity = 0;
            let transform = '';
            let pointerEvents = 'none';

            // Center
            if (position === 0) {
                visualPos = 0;
                zIndex = 50;
                opacity = 1;
                pointerEvents = 'auto'; // buttons clickable
                transform = 'translateX(0) scale(1) rotateY(0deg)';
                card.style.filter = 'none';
            }
            // Right 1
            else if (position === 1) {
                visualPos = 1;
                zIndex = 40;
                opacity = 0.8;
                transform = 'translateX(350px) scale(0.85) rotateY(-15deg)';
                card.style.filter = 'blur(1px)';
            }
            // Right 2
            else if (position === 2) {
                visualPos = 2;
                zIndex = 30;
                opacity = 0.6;
                transform = 'translateX(650px) scale(0.7) rotateY(-25deg)';
                card.style.filter = 'blur(2px)';
            }
            // Left 1 (last item)
            else if (position === total - 1) {
                visualPos = 3;
                zIndex = 40;
                opacity = 0.8;
                transform = 'translateX(-350px) scale(0.85) rotateY(15deg)';
                card.style.filter = 'blur(1px)';
            }
            // Left 2 (second to last)
            else if (position === total - 2) {
                visualPos = 4;
                zIndex = 30;
                opacity = 0.6;
                transform = 'translateX(-650px) scale(0.7) rotateY(25deg)';
                card.style.filter = 'blur(2px)';
            }
            // Fallback for others (hidden or far back)
            else {
                visualPos = 7;
                zIndex = 10;
                opacity = 0;
                transform = 'translateX(0) scale(0.3) rotateY(0deg)';
            }

            // Apply mobile adjustments
            if (window.innerWidth < 768) {
                // Adjust translateX values for smaller screens
                if (position === 1) transform = 'translateX(50px) scale(0.85) rotateY(-5deg) translateZ(-50px)';
                else if (position === 2) transform = 'translateX(100px) scale(0.7) rotateY(-10deg) translateZ(-100px)';
                else if (position === total - 1) transform = 'translateX(-50px) scale(0.85) rotateY(5deg) translateZ(-50px)';
                else if (position === total - 2) transform = 'translateX(-100px) scale(0.7) rotateY(10deg) translateZ(-100px)';

                // Stack effect for mobile
                if (position === 1 || position === total - 1) opacity = 0.5;
                if (position === 2 || position === total - 2) opacity = 0; // Hide further ones on mobile
            }

            card.style.transform = transform;
            card.style.zIndex = zIndex;
            card.style.opacity = opacity;
            card.style.pointerEvents = pointerEvents;
        });

        // Update dots
        const dots = dotsContainer.children;
        Array.from(dots).forEach((dot, idx) => {
            if (idx === current) {
                dot.classList.add('bg-indigo-600', 'w-8');
                dot.classList.remove('bg-gray-300');
            } else {
                dot.classList.remove('bg-indigo-600', 'w-8');
                dot.classList.add('bg-gray-300');
            }
        });

        // Re-init icons for new DOM elements if needed
        // Removed from loop for performance
    };

    const handleStart = (x) => {
        startX = x;
        isDragging = true;
        isAutoRotating = false;
        clearInterval(autoRotateInterval);
    };

    const handleMove = (x) => {
        if (!isDragging || startX === null) return;
        const diff = x - startX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swipe Right -> Prev
                current = (current - 1 + cards.length) % cards.length;
            } else {
                // Swipe Left -> Next
                current = (current + 1) % cards.length;
            }
            startX = null;
            isDragging = false;
            updateCarousel();
            // Debounce/Wait before resuming auto? 
            // Reset auto rotate logic
            resetAutoRotate();
        }
    };

    const handleEnd = () => {
        isDragging = false;
        startX = null;
        resetAutoRotate();
    };

    const resetAutoRotate = () => {
        clearInterval(autoRotateInterval);
        isAutoRotating = true;
        autoRotateInterval = setInterval(() => {
            if (isAutoRotating) {
                current = (current + 1) % cards.length;
                updateCarousel();
            }
        }, 5000);
    };

    // Event Listeners
    const container = document.querySelector('.carousel-container');
    container.addEventListener('mousedown', (e) => handleStart(e.clientX));
    container.addEventListener('mousemove', (e) => handleMove(e.clientX));
    container.addEventListener('mouseup', handleEnd);
    container.addEventListener('mouseleave', handleEnd);

    container.addEventListener('touchstart', (e) => handleStart(e.touches[0].clientX), { passive: true });
    container.addEventListener('touchmove', (e) => handleMove(e.touches[0].clientX), { passive: true });
    container.addEventListener('touchend', handleEnd);

    // Init
    updateCarousel();
    resetAutoRotate();
    if (typeof feather !== 'undefined') feather.replace();

    // Handle Window Resize
    window.addEventListener('resize', () => {
        updateCarousel();
    });
}
