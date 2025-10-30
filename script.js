// --- Optimized and cleaned code below ---

document.addEventListener('DOMContentLoaded', () => {
    // Typed.js animation
    new Typed('#typed', {
        strings: [
            'Data Analyst',
            'Software Developer',
            'Designer',
            'Machine Learning Enthusiast',
            'Tech Explorer'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // GSAP section animations
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        const show = window.pageYOffset > 300;
        backToTopButton.classList.toggle('opacity-0', !show);
        backToTopButton.classList.toggle('invisible', !show);
        backToTopButton.classList.toggle('opacity-100', show);
        backToTopButton.classList.toggle('visible', show);
    });
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Skills rendering
    const skillsContainer = document.getElementById('skills-logos');
    const skills = [
        { name: 'C', icon: 'c' }, { name: 'C++', icon: 'cpp' }, { name: 'Java', icon: 'java' }, { name: 'Python', icon: 'python' },
        { name: 'HTML5', icon: 'html' }, { name: 'CSS', icon: 'css3' }, { name: 'JavaScript', icon: 'javascript' }, { name: 'Dart', icon: 'dart' },
        { name: 'Flutter', icon: 'flutter' }, { name: 'FastAPI', icon: 'fastapi' }, { name: 'MySQL', icon: 'mysql' }, { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Git', icon: 'git' }, { name: 'Arduino', icon: 'arduino' }, { name: 'Cisco', icon: 'cisco' }, { name: 'Ubuntu', icon: 'ubuntu' },
        { name: 'Notion', icon: 'notion' }, { name: 'Latex', icon: 'latex' }, { name: 'Figma', icon: 'figma' }, { name: 'Canva', icon: 'canva' }, { name: 'Capcut', icon: 'capcut' }
    ];
    function renderSkillsRows() {
        skillsContainer.innerHTML = '';
        const isMobile = window.innerWidth <= 768;
        const perRow = isMobile ? 5 : 7;
        for (let i = 0; i < skills.length; i += perRow) {
            const row = document.createElement('div');
            row.className = 'flex flex-row flex-wrap justify-center items-center gap-4 w-full';
            for (let j = i; j < i + perRow && j < skills.length; j++) {
                const skill = skills[j];
                const logo = document.createElement('a');
                logo.href = 'https://skills.syvixor.com';
                logo.target = '_blank';
                logo.rel = 'noopener';
                logo.title = skill.name;
                logo.innerHTML = `<img src="https://skills.syvixor.com/api/icons?i=${skill.icon}" alt="${skill.name} icon" style="width:72px;height:64px;object-fit:contain;"/>`;
                logo.className = 'skill-box';
                row.appendChild(logo);
            }
            skillsContainer.appendChild(row);
        }
    }
    renderSkillsRows();
    window.addEventListener('resize', () => {
        renderSkillsRows();
    });

    // Experience rendering
    const experienceContainer = document.querySelector('.timeline');
    const experiences = [
        { title: 'Project Associate', company: 'Prospect Engine', period: 'Sep 2024 – Nov 2024', description: 'Data Analysis, Project Monitoring, Client Interaction', position: 'right' },
        { title: 'Scriptwriter', company: 'PC Builder Bangladesh', period: 'Aug 2023 – Oct 2023', description: 'Video Conceptualization, Content Research', position: 'left' },
        { title: 'Store Manager & Computer Operator', company: 'ShopUP', period: 'Aug 2021 – Oct 2021', description: 'Store & Maintenance Management, Auditing', position: 'right' },
        { title: 'Salesperson', company: 'Shwapno', period: 'Apr 2019 – Jun 2019', description: 'Sales Management, Customer relationship management', position: 'left' }
    ];
    experiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = `timeline-item ${exp.position} theme-card-bg theme-text p-6 rounded-lg shadow-md slide-up`;
        expItem.innerHTML = `
            <div class="timeline-content">
                <h3 class="text-xl font-semibold theme-heading">${exp.title}</h3>
                <h4 class="text-lg theme-subheading">${exp.company}</h4>
                <p class="theme-meta">${exp.period}</p>
                <p class="theme-desc mt-2">${exp.description}</p>
            </div>
        `;
        experienceContainer.appendChild(expItem);
    });

    // Projects rendering
    const projectsContainer = document.querySelector('#projects > div');
    const loadMoreBtn = document.getElementById('load-more-projects');
    const projects = [
        {
            title: 'Gallbladder Cancer Detection',
            description: 'Built a CNN-based model to classify ultrasound images.',
            technologies: ['Deep Learning', 'Python', 'PyTorch'],
            image: './images/disease.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Gallblader-Cancer-Detection-DL' }
            ]
        },
        {
            title: 'Morse Decoder',
            description: 'Hardware project decoding Morse code into text.',
            technologies: ['Arduino UNO', 'C'],
            image: './images/morse.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Morse-Decoder-Arduino-Project' }
            ]
        },
        {
            title: 'DIU Transport',
            description: 'A modern, minimal, responsive website for DIU transport schedules.',
            technologies: ['HTML', 'CSS', 'JS'],
            image: './images/diubus.png',
            links: [{ label: 'Live', url: 'https://slightsmile.github.io/DIU-Transport/' }]
        },
        {
            title: 'University Network Simulator',
            description: 'Implementing a scalable network for a university for simulation and configuration.',
            technologies: ['Cisco'],
            image: './images/network.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/University-Network-Simulator' }
            ]
        },
        {
            title: 'Subtext',
            description: 'A secure multi-platform chat app',
            technologies: ['Flutter','Dart','Firebase'],
            image: './images/subtext.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Subtext' }
            ]
        },
        {
            title: 'Classmate+',
            description: 'Student productivity app design combining tasks and organization to boost motivation and success.',
            technologies: ['Figma'],
            image: './images/classmate.png',
            links: [
                { label: 'Live', url: 'https://www.google.com/url?q=https%3A%2F%2Fwww.figma.com%2Fproto%2FNkYm8rT7KbCRHIadk5NKIP%2FClassMate-%3Fnode-id%3D2-702%26starting-point-node-id%3D7%253A835%26t%3DizewGxjNkBLrDTdA-1&sa=D&sntz=1&usg=AOvVaw1szct3YA0-tdQ-hxRX3tSM' }
            ]
        },
        {
            title: 'Mini SQL Interpreter',
            description: 'A lightweight SQL-like interpreter for querying CSV files',
            technologies: ['C','FLex','Bison'],
            image: './images/sql.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Mini-Sql-Interpreter' }
            ]
        },
        {
            title: 'MemSim',
            description: 'Explore operating system memory management through interactive simulations and visualization.',
            technologies: ['HTML','CSS','JS'],
            image: './images/memsim.png',
            links: [
                { label: 'Live', url: 'https://slightsmile.github.io/MemSim/' }
            ]
        },
        {
            title: 'Digital Door Lock',
            description: 'A smart digital door lock built using Arduino Nano for secure home or office access control.',
            technologies: ['Arduino Nano'],
            image: './images/lock.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/DoorLock-Arduino-Project' }
            ]
        },
        {
            title: 'Covid-19 Prediction',
            description: 'Predicts COVID-19 from symptoms using machine learning and compares models for accuracy.',
            technologies: ['Machine Learning','Python','Scikit-learn'],
            image: './images/disease.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Covid-Prediction-ML' }
            ]
        },
        {
            title: 'Library Management System',
            description: 'Developed a CRUD-based desktop application for managing book borrowing/returns.',
            technologies: ['Python','Tkinter','PyMySQL'],
            image: './images/library.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Library-MS-Project' }
            ]
        },
        {
            title: 'Bus Management System',
            description: 'Developed system for managing bus tickets and schedules.',
            technologies: ['Java','Java Swing','MySQL'],
            image: './images/bus.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Bus-MS-Project' }
            ]
        }
    ];
    let showingAllProjects = false;
    function renderProjects(showAll = false) {
        projectsContainer.innerHTML = '';
        const count = showAll ? projects.length : 3;
        for (let i = 0; i < count && i < projects.length; i++) {
            const project = projects[i];
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card theme-card-bg theme-text rounded-xl overflow-hidden shadow-md slide-up relative flex flex-col';
            projectCard.style.minHeight = '420px';
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="p-6 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 class="text-xl font-semibold theme-heading mb-2">${project.title}</h3>
                        <p class="theme-desc mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-2" style="flex-wrap: wrap; max-height: 48px; overflow: visible;">
                            ${project.technologies.map(tech => `<span class="px-3 py-1 theme-chip text-sm rounded-full">${tech}</span>`).join('')}
                        </div>
                    </div>
                    ${project.links && project.links.length > 0 ? `
                        <div class="flex gap-2 mt-4">
                            ${project.links.map(link => {
                                let icon = '';
                                if (link.label.toLowerCase() === 'github') icon = '<i data-feather="github"></i>';
                                else if (link.label.toLowerCase() === 'live') icon = '<i data-feather="external-link"></i>';
                                return `<a href="${link.url}" target="_blank" class="flex items-center gap-1 px-2 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow hover:bg-indigo-800 transition-all duration-300 whitespace-nowrap" style="min-width:56px;">${icon}<span class='px-3 py-1'>${link.label}</span></a>`;
                            }).join('')}
                        </div>
                    ` : ''}
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        }
        feather.replace();
    }
    renderProjects(false);
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            showingAllProjects = !showingAllProjects;
            renderProjects(showingAllProjects);
            loadMoreBtn.textContent = showingAllProjects ? 'Collapse' : 'Load More';
        });
    }

    // Education rendering
    const educationContainer = document.querySelector('#education > div');
    educationContainer.classList.add('timeline');
    const education = [
        { degree: 'BSc. in CSE', institution: 'Daffodil International University', period: '2022 - present', description: 'GPA: 3.48/4.0', position: 'right' },
        { degree: 'HSC (Science)', institution: 'Mohammadpur Preparatory School and College', period: '2019 - 2021', description: 'GPA: 5.0/5.0', position: 'left' },
        { degree: 'SSC (Science)', institution: 'Dhanmondi Govt. Boys High School', period: '2009 - 2019', description: 'GPA: 4.67/5.0', position: 'right' }
    ];
    education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = `timeline-item ${edu.position} theme-card-bg theme-text p-6 rounded-lg shadow-md slide-up`;
        eduItem.innerHTML = `
            <div class="timeline-content">
                <h3 class="text-xl font-semibold theme-heading">${edu.degree}</h3>
                <h4 class="text-lg theme-subheading">${edu.institution}</h4>
                <p class="theme-meta">${edu.period}</p>
                <p class="theme-desc mt-2">${edu.description}</p>
            </div>
        `;
        educationContainer.appendChild(eduItem);
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});
