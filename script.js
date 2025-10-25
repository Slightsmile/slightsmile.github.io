// Initialize Typed.js
document.addEventListener('DOMContentLoaded', function() {
    const typed = new Typed('#typed', {
        strings: [
            'Data Analyst',
            'Software Developer',
            'Machine Learning Enthusiast',
            'Problem Solver',
            'Tech Explorer'
        ],
typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Populate skills as 3 centered rows, 7 logos per row
    const skillsContainer = document.getElementById('skills-logos');
    const skills = [
        { name: 'C', icon: 'c' },
        { name: 'C++', icon: 'cpp' },
        { name: 'Java', icon: 'java' },
        { name: 'Python', icon: 'python' },
        { name: 'HTML5', icon: 'html' },
        { name: 'CSS', icon: 'css3' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Dart', icon: 'dart' },
        { name: 'Flutter', icon: 'flutter' },
        { name: 'FastAPI', icon: 'fastapi' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'Git', icon: 'git' },
        { name: 'Arduino', icon: 'arduino' },
        { name: 'Cisco', icon: 'cisco' },
        { name: 'Ubuntu', icon: 'ubuntu' },
        { name: 'Notion', icon: 'notion' },
        { name: 'Latex', icon: 'latex' },
        { name: 'Figma', icon: 'figma' },
        { name: 'Canva', icon: 'canva' },
        { name: 'Capcut', icon: 'capcut' }
    ];
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div');
        row.className = 'flex flex-row justify-center items-center gap-8';
        for (let j = 0; j < 7; j++) {
            const idx = i * 7 + j;
            if (idx >= skills.length) break;
            const skill = skills[idx];
            const logo = document.createElement('a');
            logo.href = 'https://skills.syvixor.com';
            logo.target = '_blank';
            logo.rel = 'noopener';
            logo.title = skill.name;
            logo.innerHTML = `<img src="https://skills.syvixor.com/api/icons?i=${skill.icon}" alt="${skill.name} icon" style="width:72px;height:64px;object-fit:contain;"/>`;
            row.appendChild(logo);
        }
        skillsContainer.appendChild(row);
    }

    // Populate experience
    const experienceContainer = document.querySelector('.timeline');
    const experiences = [
        {
            title: 'Project Associate',
            company: 'Prospect Engine',
            period: 'Sep 2024 – Nov 2024',
            description: 'Data Analysis, Project Monitoring, Client Interaction',
            position: 'right'
        },
        {
            title: 'Scriptwriter',
            company: 'PC Builder Bangladesh',
            period: 'Aug 2023 – Oct 2023',
            description: 'Video Conceptualization, Content Research',
            position: 'left'
        },
        {
            title: 'Store Manager & Computer Operator',
            company: 'ShopUP',
            period: 'Aug 2021 – Oct 2021',
            description: 'Store & Maintenance Management, Auditing',
            position: 'right'
        },
        {
            title: 'Salesperson',
            company: 'Shwapno',
            period: 'Apr 2019 – Jun 2019',
            description: 'Sales Management, Customer relationship management',
            position: 'left'
        }
    ];

    experiences.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = `timeline-item ${exp.position} bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md slide-up`;
        expItem.innerHTML = `
            <div class="timeline-content">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white">${exp.title}</h3>
                <h4 class="text-lg text-indigo-600 dark:text-indigo-400">${exp.company}</h4>
                <p class="text-gray-500 dark:text-gray-400">${exp.period}</p>
                <p class="text-gray-600 dark:text-gray-300 mt-2">${exp.description}</p>
            </div>
        `;
        experienceContainer.appendChild(expItem);
    });

    // Populate projects
    const projectsContainer = document.querySelector('#projects > div');
    const projects = [
        {
            title: 'Gallbladder Cancer Detection',
            description: 'Built a CNN-based model to classify ultrasound images.',
            technologies: ['Deep Learning', 'Python', 'TensorFlow'],
            image: './images/5.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Gallblader-Cancer-Detection-DL' }
            ]
        },
        {
            title: 'Library Management System',
            description: 'Developed a CRUD-based desktop application for managing book borrowing/returns.',
            technologies: ['Python'],
            image: './images/3.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Library-MS-Project' }
            ]
        },
        {
            title: 'Bus Management System',
            description: 'Developed system for managing bus tickets and schedules.',
            technologies: ['Java'],
            image: './images/1.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Bus-MS-Project' }
            ]
        },
        {
            title: 'Morse Decoder',
            description: 'Hardware project decoding Morse code into text.',
            technologies: ['Arduino', 'C'],
            image: './images/8.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/Morse-Decoder-Arduino-Project' }
            ]
        },
        {
            title: 'DIU Transport',
            description: 'A modern, minimal, responsive website for DIU transport schedules.',
            technologies: ['HTML', 'CSS', 'JS'],
            image: './images/14.png',
            links: [{ label: 'Live', url: 'https://slightsmile.github.io/DIU-Transport/' }]
        },
        {
            title: 'University Network Simulator',
            description: 'Implementing a scalable network for a university for simulation and configuration.',
            technologies: ['Cisco'],
            image: './images/15.png',
            links: [
                { label: 'Github', url: 'https://github.com/Slightsmile/University-Network-Simulator' }
            ]
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
    projectCard.className = 'project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md slide-up relative flex flex-col';
    // Ensure all cards have the same minimum height for consistency
    projectCard.style.minHeight = '420px';
        // Technologies: two rows, items wrap if needed
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">${project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-2" style="flex-wrap: wrap; max-height: 48px; overflow: visible;">
                        ${project.technologies.map(tech => 
                            `<span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
                ${project.links && project.links.length > 0 ? `
                    <div class="flex gap-2 mt-4">
                        ${project.links.map(link => {
                            let icon = '';
                            if (link.label.toLowerCase() === 'github') {
                                icon = '<i data-feather="github"></i>';
                            } else if (link.label.toLowerCase() === 'live') {
                                icon = '<i data-feather="external-link"></i>';
                            }
                            return `<a href="${link.url}" target="_blank" class="flex items-center gap-1 px-2 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium shadow hover:bg-indigo-800 transition-all duration-300 whitespace-nowrap" style="min-width:56px;">${icon}<span class='px-3 py-1'>${link.label}</span></a>`;
                        }).join('')}
                    </div>
                ` : ''}
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Populate education
    const educationContainer = document.querySelector('#education > div');
    educationContainer.classList.add('timeline');
    const education = [
        {
            degree: 'BSc. in CSE',
            institution: 'Daffodil International University',
            period: '2022 - present',
            description: 'GPA: 3.48/4.0',
            position: 'right'
        },
        {
            degree: 'HSC (Science)',
            institution: 'Mohammadpur Preparatory School and College',
            period: '2019 - 2021',
            description: 'GPA: 5.0/5.0',
            position: 'left'
        },
        {
            degree: 'SSC (Science)',
            institution: 'Dhanmondi Govt. Boys High School',
            period: '2009 - 2019',
            description: 'GPA: 4.67/5.0',
            position: 'right'
        }
    ];

    education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = `timeline-item ${edu.position} bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md slide-up`;
        eduItem.innerHTML = `
            <div class="timeline-content">
                <h3 class="text-xl font-semibold text-gray-800 dark:text-white">${edu.degree}</h3>
                <h4 class="text-lg text-indigo-600 dark:text-indigo-400">${edu.institution}</h4>
                <p class="text-gray-500 dark:text-gray-400">${edu.period}</p>
                <p class="text-gray-600 dark:text-gray-300 mt-2">${edu.description}</p>
            </div>
        `;
        educationContainer.appendChild(eduItem);
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});
