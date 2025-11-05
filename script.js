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
function renderProjects() {
    const projectsContainer = document.querySelector('#projects > div');
    const loadMoreBtn = document.getElementById('load-more-projects');
    if (!projectsContainer || !loadMoreBtn) return;
    
    let showingAllProjects = false;
    
    const createProjectCard = (project) => {
        const card = document.createElement('div');
        card.className = 'project-card theme-card-bg theme-text rounded-xl overflow-hidden shadow-md slide-up relative flex flex-col';
        card.style.minHeight = '420px';
        card.setAttribute('role', 'listitem');
        
        const techBadges = project.technologies.map(tech => `<span class="px-3 py-1 theme-chip text-sm rounded-full">${tech}</span>`).join('');
        const linkButtons = project.links && project.links.length > 0
            ? project.links.map(link => {
                const icon = link.label.toLowerCase() === 'github' ? '<i data-feather="github" aria-hidden="true"></i>' : '<i data-feather="external-link" aria-hidden="true"></i>';
                return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 px-2 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow hover:bg-indigo-800 transition-all duration-300 whitespace-nowrap" style="min-width:56px;" aria-label="${link.label}">${icon}<span class='px-3 py-1'>${link.label}</span></a>`;
            }).join('')
            : '';
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover" loading="lazy">
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-semibold theme-heading mb-2">${project.title}</h3>
                    <p class="theme-desc mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-2" style="flex-wrap: wrap; max-height: 48px; overflow: visible;">${techBadges}</div>
                </div>
                ${linkButtons ? `<div class="flex gap-2 mt-4">${linkButtons}</div>` : ''}
            </div>
        `;
        return card;
    };
    
    const renderProjectsGrid = (showAll = false) => {
        projectsContainer.innerHTML = '';
        const count = showAll ? DATA.projects.length : CONSTANTS.INITIAL_PROJECTS_COUNT;
        DATA.projects.slice(0, count).forEach(project => projectsContainer.appendChild(createProjectCard(project)));
        if (typeof feather !== 'undefined') feather.replace();
    };
    
    renderProjectsGrid(false);
    loadMoreBtn.addEventListener('click', () => {
        showingAllProjects = !showingAllProjects;
        renderProjectsGrid(showingAllProjects);
        loadMoreBtn.textContent = showingAllProjects ? 'Collapse' : 'Load More';
    });
}
