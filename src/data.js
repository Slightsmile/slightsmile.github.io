export const NAV_ITEMS = [
  { href: '/', label: 'Home', type: 'route' },
  { href: '/#about', label: 'About', type: 'anchor' },
  { href: '/experience', label: 'Experience', type: 'route' },
  { href: '/projects', label: 'Projects', type: 'route' },
  { href: '/#skills', label: 'Skills', type: 'anchor' },
];

export const TYPED_WORDS = ['Full-Stack Developer', 'Data Analyst', 'Machine Learning Enthusiast', 'Designer', 'Tech Explorer'];

export const TIMELINE_DATA = [
  { type: 'WORK', period: 'May 2026 — Present', title: 'AI Solution Developer', org: 'Daffodil Computers PLC', desc: 'Project management, software design and programming for internal AI solutions.' },
  { type: 'WORK', period: 'Jan — Apr 2026', title: 'Intern, Designing & Content', org: 'Daffodil Computers PLC', desc: 'Website management, ODOO (ERP) administration, graphics design, and video editing.' },
  { type: 'EDU', period: '2022 — 2026', title: 'BSc, Computer Science & Engineering', org: 'Daffodil International University · GPA 3.52/4.0', desc: 'Research & Innovation Project: 16-model deep-learning ensemble for gallbladder cancer detection.' },
  { type: 'WORK', period: 'Aug — Oct 2023', title: 'Scriptwriter', org: 'PC Builder Bangladesh', desc: 'Video conceptualization and content research for a tech media outlet.' },
  { type: 'WORK', period: 'Aug — Oct 2021', title: 'Store Manager & Computer Operator', org: 'ShopUp', desc: 'Store and maintenance management, auditing.' },
  { type: 'EDU', period: '2019 — 2021', title: 'HSC (Science)', org: 'Mohammadpur Preparatory School and College · GPA 5.0/5.0', desc: 'Higher secondary certificate, science track.' },
  { type: 'WORK', period: 'Apr — Jun 2019', title: 'Salesperson', org: 'Shwapno', desc: 'Sales management and customer relationship management.' },
  { type: 'EDU', period: '2009 — 2019', title: 'SSC (Science)', org: 'Dhanmondi Govt. Boys High School · GPA 4.67/5.0', desc: 'Secondary school certificate, science track.' },
];

export const PROJECTS_DATA = [
  { id: 'aihr', category: 'ai', title: 'AIHR', desc: 'A multi-tenant AI-powered HR platform covering recruitment and CV matching, video interview intelligence, attrition-risk prediction, bias-aware performance management, workforce forecasting, and an HR self-service chatbot, all on tenant-isolated databases with on-premise AI inference and enterprise-grade RBAC.', tags: ['FastAPI', 'Python', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Ollama', 'Whisper', 'PyTorch', 'Docker', 'Terraform', 'CUDA'], image: '/images/aihr.png', githubUrl: null, liveUrl: 'https://aihr.daffodilglobal.ai/' },
  { id: 'barighor', category: 'web', title: 'Barighor', desc: 'A digital rent notebook SaaS for landlords in Bangladesh: manage multiple buildings from one dashboard, auto-generate monthly invoices, track dues and vacancies, send building-wide notices, and give tenants their own portal for rent status and payment history.', tags: ['Next.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'Supabase', 'Prisma', 'Tailwind CSS'], image: '/images/barighor.png', githubUrl: null, liveUrl: 'https://barighor.vercel.app/' },
  { id: 'subtext', category: 'web', title: 'Subtext', desc: 'A privacy-first, end-to-end encrypted chat app built around "Infinity Space," a hidden password-locked chat environment users can switch into instantly, so sensitive conversations stay concealed even if someone else unlocks the phone. No account signup or ad tracking required.', tags: ['Flutter', 'Dart', 'Firebase'], image: '/images/subtext.png', githubUrl: 'https://github.com/Slightsmile/Subtext', liveUrl: 'https://subtext-bd.vercel.app/' },
  { id: 'gbc', category: 'ai', title: 'Gallbladder Cancer Detection', desc: 'A 16-model deep-learning ensemble (ResNet, EfficientNet, MobileNet, DenseNet, GBCNet, RadFormer, and more) classifying gallbladder ultrasound images into 5 classes. Individual models ranged 60.64% to 86.30% accuracy; the ensemble reached 87.17% on the held-out test set.', tags: ['Deep Learning', 'Python', 'PyTorch', 'Transfer Learning'], image: '/images/disease.png', githubUrl: 'https://github.com/Slightsmile/Gallblader-Cancer-Detection-DL', liveUrl: null },
  { id: 'grameenpest', category: 'web', title: 'Grameen Pest Control', desc: 'A full-stack marketing website with a built-in CMS admin panel for a Dhaka-based pest control business, covering nine service lines (termite, bed bug, rodent, mosquito, and more), tiered service packages, and a project gallery.', tags: ['Node.js', 'HTML', 'CSS', 'JS'], image: '/images/grameenpest.png', githubUrl: null, liveUrl: 'https://grameenpestbd.com/' },
  { id: 'morse', category: 'systems', title: 'Morse Decoder', desc: 'An IR-remote-driven Morse code decoder: an Arduino Uno times each button press to distinguish dots from dashes, then decodes the sequence into readable text on a live I2C 16x2 LCD display.', tags: ['Arduino UNO', 'C', 'Embedded'], image: '/images/morse.png', githubUrl: 'https://github.com/Slightsmile/Morse-Decoder-Arduino-Project', liveUrl: null },
  { id: 'diutransport', category: 'web', title: 'DIU Transport', desc: 'A modern, minimal, responsive schedule lookup site for Daffodil International University shuttle routes, with filters for regular, mid-term, final, and Ramadan calendars plus a Friday-only schedule toggle.', tags: ['HTML', 'CSS', 'JS'], image: '/images/diubus.png', githubUrl: null, liveUrl: 'https://mohi-uddin.me/DIU-Transport/' },
  { id: 'meetsplit', category: 'web', title: 'MeetSplit', desc: 'Find a date that works for everyone and split trip expenses automatically, no signup required, fully anonymous sessions shareable by link.', tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'], image: '/images/meetsplit.png', githubUrl: null, liveUrl: 'https://meetsplit.vercel.app' },
  { id: 'network', category: 'systems', title: 'University Network Simulator', desc: 'A Cisco Packet Tracer simulation of a university network spanning four departments (CSE, EEE, BBA, Pharmacy) and a central server room, using VLSM to carve 192.168.10.0/24 into 15 subnets, with OSPF routing, DHCP, and dedicated DNS/web servers.', tags: ['Cisco', 'Networking', 'OSPF'], image: '/images/network.png', githubUrl: 'https://github.com/Slightsmile/University-Network-Simulator', liveUrl: null },
  { id: 'classmate', category: 'design', title: 'Classmate+', desc: 'Student productivity app design combining tasks and organization to boost motivation and success.', tags: ['Figma', 'UI/UX'], image: '/images/classmate.png', githubUrl: null, liveUrl: 'https://www.figma.com/proto/NkYm8rT7KbCRHIadk5NKIP/ClassMate-?node-id=2-702&starting-point-node-id=7%3A835' },
  { id: 'sql', category: 'systems', title: 'Mini SQL Interpreter', desc: 'A lightweight SQL-like interpreter for querying plain CSV files, hand-built with Flex for lexical analysis and Bison for parsing, no database engine required.', tags: ['C', 'Flex', 'Bison'], image: '/images/sql.png', githubUrl: 'https://github.com/Slightsmile/Mini-Sql-Interpreter', liveUrl: null },
  { id: 'memsim', category: 'systems', title: 'MemSim', desc: 'An interactive visualizer for six classic OS memory-management strategies, First Fit, Best Fit, Next Fit, Worst Fit, Paging, and Segmentation, showing allocation, deallocation, and fragmentation in real time.', tags: ['HTML', 'CSS', 'JS'], image: '/images/memsim.png', githubUrl: null, liveUrl: 'https://mohi-uddin.me/MemSim/' },
  { id: 'doorlock', category: 'systems', title: 'Digital Door Lock', desc: 'A password-protected physical door lock built on an Arduino Nano with a 4x4 keypad, an SG90 servo actuator, and an I2C LCD for real-time access feedback.', tags: ['Arduino Nano', 'C++', 'Embedded'], image: '/images/lock.png', githubUrl: 'https://github.com/Slightsmile/DoorLock-Arduino-Project', liveUrl: null },
  { id: 'covid', category: 'ai', title: 'Covid-19 Prediction', desc: 'Predicts COVID-19 likelihood from reported symptoms, comparing Logistic Regression, KNN, Random Forest, SVM, and Naive Bayes with label encoding, class-balancing undersampling, and ROC/AUC evaluation.', tags: ['Machine Learning', 'Python', 'Scikit-learn'], image: '/images/disease.png', githubUrl: 'https://github.com/Slightsmile/Covid-Prediction-ML', liveUrl: null },
  { id: 'library', category: 'web', title: 'Library Management System', desc: 'A CRUD-based desktop application for managing book borrowing, returns, and borrower records with a Tkinter GUI over a MySQL backend.', tags: ['Python', 'Tkinter', 'PyMySQL'], image: '/images/library.png', githubUrl: 'https://github.com/Slightsmile/Library-MS-Project', liveUrl: null },
  { id: 'bus', category: 'web', title: 'Bus Management System', desc: 'A desktop system for managing bus ticket sales and route schedules with authenticated users, built with Java Swing over a MySQL backend.', tags: ['Java', 'Java Swing', 'MySQL'], image: '/images/bus-management.png', githubUrl: 'https://github.com/Slightsmile/Bus-MS-Project', liveUrl: null },
];

export const SKILLS_DATA = [
  { id: 'programming', name: 'Programming', icon: 'Code', color: '#3B82F6', skills: [
    { name: 'Python', slug: 'python' }, { name: 'JavaScript', slug: 'javascript' }, { name: 'TypeScript', slug: 'typescript' },
    { name: 'C', slug: 'c' }, { name: 'C++', slug: 'cplusplus' }, { name: 'Java', slug: 'openjdk' }, { name: 'SQL', slug: null },
    { name: 'HTML5', slug: 'html5' }, { name: 'CSS3', slug: 'css' }, { name: 'Dart', slug: 'dart' }, { name: 'Flutter', slug: 'flutter' },
  ] },
  { id: 'frontend', name: 'Frontend', icon: 'Layout', color: '#22D3EE', skills: [
    { name: 'React.js', slug: 'react' }, { name: 'Next.js', slug: 'nextdotjs' }, { name: 'Tailwind CSS', slug: 'tailwindcss' },
    { name: 'Material UI (MUI)', slug: 'mui' }, { name: 'Framer Motion', slug: 'framer' }, { name: 'Vite', slug: 'vite' },
  ] },
  { id: 'backend', name: 'Backend', icon: 'Database', color: '#34D399', skills: [
    { name: 'FastAPI', slug: 'fastapi' }, { name: 'Node.js', slug: 'nodedotjs' }, { name: 'Express.js', slug: 'express' },
    { name: 'REST APIs', slug: null }, { name: 'Authentication', slug: null }, { name: 'API Integration', slug: null },
  ] },
  { id: 'ai', name: 'Artificial Intelligence', icon: 'Brain', color: '#F472B6', skills: [
    { name: 'Machine Learning', slug: null }, { name: 'Deep Learning', slug: null }, { name: 'Generative AI', slug: null },
    { name: 'Large Language Models (LLMs)', slug: null }, { name: 'AI Agents', slug: null }, { name: 'Prompt Engineering', slug: null },
    { name: 'RAG', slug: null }, { name: 'Speech-to-Text', slug: null },
  ] },
  { id: 'ai-frameworks', name: 'AI Frameworks', icon: 'Robot', color: '#FB923C', skills: [
    { name: 'TensorFlow', slug: 'tensorflow' }, { name: 'PyTorch', slug: 'pytorch' }, { name: 'Scikit-learn', slug: 'scikitlearn' },
    { name: 'Hugging Face Transformers', slug: 'huggingface' }, { name: 'Ollama', slug: 'ollama' }, { name: 'Whisper', slug: null },
  ] },
  { id: 'databases', name: 'Databases', icon: 'HardDrives', color: '#A78BFA', skills: [
    { name: 'PostgreSQL', slug: 'postgresql' }, { name: 'MySQL', slug: 'mysql' }, { name: 'SQLite', slug: 'sqlite' },
    { name: 'SQLAlchemy', slug: 'sqlalchemy' }, { name: 'Prisma', slug: 'prisma' }, { name: 'Supabase', slug: 'supabase' },
  ] },
  { id: 'devops', name: 'Cloud & DevOps', icon: 'CloudArrowUp', color: '#4ADE80', skills: [
    { name: 'Git', slug: 'git' }, { name: 'GitHub', slug: 'github' }, { name: 'Docker', slug: 'docker' },
    { name: 'Linux (Ubuntu)', slug: 'linux' }, { name: 'Vercel', slug: 'vercel' }, { name: 'GitHub Actions', slug: 'githubactions' }, { name: 'CI/CD', slug: null },
    { name: 'Nginx', slug: 'nginx' }, { name: 'systemd', slug: null },
  ] },
  { id: 'tools', name: 'Tools', icon: 'Wrench', color: '#FBBF24', skills: [
    { name: 'Figma', slug: 'figma' }, { name: 'Canva', slug: null }, { name: 'CapCut', slug: null }, { name: 'LaTeX', slug: 'latex' },
    { name: 'Arduino', slug: 'arduino' }, { name: 'Cisco', slug: 'cisco' }, { name: 'Notion', slug: 'notion' },
    { name: 'Google Workspace', slug: 'googledocs' }, { name: 'Microsoft Office', slug: null },
  ] },
];

export const SKILLS_MARQUEE_ROW_1 = [
  { name: 'Python', slug: 'python' }, { name: 'JavaScript', slug: 'javascript' }, { name: 'TypeScript', slug: 'typescript' },
  { name: 'React.js', slug: 'react' }, { name: 'Next.js', slug: 'nextdotjs' }, { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'FastAPI', slug: 'fastapi' }, { name: 'Node.js', slug: 'nodedotjs' }, { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'MySQL', slug: 'mysql' }, { name: 'Docker', slug: 'docker' }, { name: 'Git', slug: 'git' },
  { name: 'GitHub', slug: 'github' }, { name: 'Vercel', slug: 'vercel' }, { name: 'Figma', slug: 'figma' },
];
export const SKILLS_MARQUEE_ROW_2 = [
  { name: 'TensorFlow', slug: 'tensorflow' }, { name: 'PyTorch', slug: 'pytorch' }, { name: 'Scikit-learn', slug: 'scikitlearn' },
  { name: 'Hugging Face', slug: 'huggingface' }, { name: 'Ollama', slug: 'ollama' }, { name: 'C++', slug: 'cplusplus' },
  { name: 'Java', slug: 'openjdk' }, { name: 'Docker Compose', slug: 'docker' }, { name: 'JWT', slug: 'jsonwebtokens' },
  { name: 'GitHub', slug: 'github' }, { name: 'Linux', slug: 'linux' }, { name: 'NLTK', slug: null },
  { name: 'RAG / PGVector', slug: 'postgresql' }, { name: 'DeepFace', slug: null }, { name: 'PostgreSQL', slug: 'postgresql' },
];

export const AI_FOCUS_DATA = [
  { icon: 'Scan', title: 'Medical Imaging / CV', desc: '16-model ensemble for gallbladder cancer classification from ultrasound, 87.17% test accuracy.', status: 'SHIPPED' },
  { icon: 'Dna', title: 'HR Automation with LLMs', desc: 'CV Matcher and Performance Management tooling built on local LLMs.', status: 'IN PRODUCTION' },
  { icon: 'ChatCircleText', title: 'LLMs & RAG', desc: 'Applying retrieval-augmented generation patterns to internal tooling and research assistants.', status: 'ACTIVE FOCUS' },
  { icon: 'GraphIcon', title: 'Vector Databases', desc: 'Studying embedding retrieval and vector search as a foundation for agentic systems.', status: 'LEARNING' },
  { icon: 'Robot', title: 'Agents', desc: 'Exploring tool-using LLM agents as part of a 12-month applied-AI roadmap.', status: 'LEARNING' },
  { icon: 'Wrench', title: 'Fine-Tuning (LoRA/QLoRA)', desc: 'Next up on the roadmap: parameter-efficient fine-tuning and RLHF fundamentals.', status: 'NEXT UP' },
];

export const ACHIEVEMENTS_DATA = [
  { icon: 'Trophy', title: 'Research & Innovation Project', desc: 'DIU-sponsored deep-learning research on gallbladder cancer detection, 87.17% ensemble accuracy.' },
  { icon: 'GitPullRequest', title: 'GitHub Pull Shark x2', desc: 'Recognized twice for merged pull requests across public repositories.' },
  { icon: 'UsersThree', title: 'Pair Extraordinaire x2', desc: 'GitHub recognition for co-authored commits and collaborative development.' },
  { icon: 'ScrollIcon', title: 'MIT-Licensed Open Source', desc: 'Mini SQL Interpreter released publicly under the MIT license.' },
  { icon: 'Star', title: '8 Starred Repositories', desc: 'Across 24 public repos on github.com/Slightsmile.' },
];

export const GITHUB_STATS = [ { value: '24', label: 'Public Repos' }, { value: '8', label: 'Repo Stars' }, { value: '6', label: 'Followers' }, { value: '5+', label: 'GitHub Badges' } ];

export const GALLERY_DATA = [
  { type: 'certificate', title: 'AI+ Prompt Engineer Level 1', org: 'AI CERTs®', period: null, image: '/images/aicert.jpg' },
  { type: 'certificate', title: 'Unlock The Algorithm', org: 'Daffodil International University (DIU)', period: 'Spring 2024', image: '/images/uta.jpg' },
  { type: 'certificate', title: 'Prompt Battle: Prompt Engineering Contest', org: 'Daffodil International University (DIU)', period: 'Summer 2025', image: '/images/promptbattle.jpg' },
  { type: 'competition', title: 'DIU Accelerator Cup 2023', org: 'Team CashON', period: '2023', desc: 'Competed as a contestant in DIU’s startup accelerator competition.', image: '/images/accelatorcup1.jpg' },
  { type: 'competition', title: 'DIU Accelerator Cup 2023', org: 'Team CashON', period: '2023', desc: 'Competed as a contestant in DIU’s startup accelerator competition.', image: '/images/accelatorcup2.jpeg' },
  { type: 'video', title: 'Scripted video for PC Builder Bangladesh', org: 'PC Builder Bangladesh', period: null, videoUrl: 'https://youtu.be/FqKBsxinaWk?si=WnCJrpPYY0lyvl0r', image: 'https://img.youtube.com/vi/FqKBsxinaWk/hqdefault.jpg' },
  { type: 'video', title: 'Scripted video for PC Builder Bangladesh', org: 'PC Builder Bangladesh', period: null, videoUrl: 'https://www.youtube.com/watch?v=ffIEsYUYw18', image: 'https://img.youtube.com/vi/ffIEsYUYw18/hqdefault.jpg' },
  { type: 'video', title: 'Scripted short for PC Builder Bangladesh', org: 'PC Builder Bangladesh', period: null, videoUrl: 'https://youtube.com/shorts/owNya2KeoLQ?si=fqo_29gNm6p57XuM', image: 'https://img.youtube.com/vi/owNya2KeoLQ/hqdefault.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/637508891_1233863005601663_3586567500686506301_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/656013611_1255431110111519_6000395366174136010_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/671299250_1275047561483207_209380165228994969_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/674168309_1280729290915034_4225332457441598441_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/684274899_1288342460153717_8682306748961300513_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/686913014_1291595316495098_2999053344788378678_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/690766998_1295939426060687_7703397043019040202_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/698347322_1299895148998448_2087454943523023928_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/618129247_1205973805057250_4798613587463326390_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/655676519_1458680756045333_5784993688275940815_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/663364179_1471130074800401_1134588438869335439_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/669848345_1478596057387136_4175126338146835881_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/674933626_1482935450286530_7698389778671299519_n.jpg' },
  { type: 'design', title: 'Design work', org: null, period: null, image: '/images/designs/684547816_1491986409381434_2426408680291708157_n.jpg' },
];

export const GALLERY_ROWS = [
  { type: 'certificate', label: 'Certificates', desc: 'Courses and contests completed, credentials earned.' },
  { type: 'competition', label: 'Competitions', desc: 'Participated in DIU Accelerator Cup as a contestant.' },
  { type: 'video', label: 'Scriptwritten Videos', desc: 'Wrote scripts for and appeared in PC Builder Bangladesh videos.' },
  { type: 'design', label: 'Designed Professionally', desc: 'Graphics and visual design work.' },
];

export const ABOUT_FACTS = [
  { label: 'Education', value: 'BSc CSE, DIU (2022–2026)' },
  { label: 'Based in', value: 'Dhaka, Bangladesh' },
  { label: 'Current role', value: 'AI Solution Developer' },
  { label: 'Focus', value: 'Healthcare AI · LLMs' },
];

export const CONTACT_LINKS = [
  { icon: 'EnvelopeSimple', label: 'Email', value: 'akibh987@gmail.com', href: 'mailto:akibh987@gmail.com' },
  { icon: 'WhatsappLogo', label: 'WhatsApp', value: '+880 1326 561196', href: 'https://wa.me/8801326561196' },
  { icon: 'GithubLogo', label: 'GitHub', value: 'github.com/Slightsmile', href: 'https://github.com/Slightsmile' },
  { icon: 'LinkedinLogo', label: 'LinkedIn', value: 'linkedin.com/in/mohi28', href: 'https://linkedin.com/in/mohi28' },
  { icon: 'FacebookLogo', label: 'Facebook', value: 'facebook.com/slight.smile.28', href: 'https://www.facebook.com/slight.smile.28' },
  { icon: 'TelegramLogo', label: 'Telegram', value: 't.me/Slightsmile', href: 'https://t.me/Slightsmile' },
  { icon: 'ArticleNyTimes', label: 'Dev.to', value: 'dev.to/slightsmile', href: 'https://dev.to/slightsmile' },
  { icon: 'FigmaLogo', label: 'Figma', value: 'figma.com/@mohi28', href: 'https://figma.com/@mohi28' },
];

export const DOCK_LINKS = [
  { icon: 'GithubLogo', label: 'GitHub', href: 'https://github.com/Slightsmile' },
  { icon: 'LinkedinLogo', label: 'LinkedIn', href: 'https://linkedin.com/in/mohi28' },
  { icon: 'EnvelopeSimple', label: 'Email', href: 'mailto:akibh987@gmail.com' },
];

export const PALETTE_ITEMS = [
  { tag: 'NAV', label: 'Go to Home', href: '/' },
  { tag: 'NAV', label: 'Go to About', href: '/#about' },
  { tag: 'NAV', label: 'Go to Skills', href: '/#skills' },
  { tag: 'NAV', label: 'Go to Contact', href: '/#contact' },
  { tag: 'NAV', label: 'Go to Projects', href: '/projects' },
  { tag: 'NAV', label: 'Go to Experience', href: '/experience' },
  { tag: 'NAV', label: 'Go to Education', href: '/experience' },
  { tag: 'NAV', label: 'Go to AI Focus', href: '/experience#ai-focus' },
  { tag: 'NAV', label: 'Go to Gallery', href: '/experience#gallery' },
  { tag: 'LINK', label: 'Open GitHub profile', href: 'https://github.com/Slightsmile' },
  { tag: 'LINK', label: 'Open LinkedIn', href: 'https://linkedin.com/in/mohi28' },
  { tag: 'PROJECT', label: 'AIHR', href: 'https://aihr.daffodilglobal.ai/' },
  { tag: 'PROJECT', label: 'Gallbladder Cancer Detection', href: 'https://github.com/Slightsmile/Gallblader-Cancer-Detection-DL' },
  { tag: 'PROJECT', label: 'Barighor', href: 'https://barighor.vercel.app/' },
  { tag: 'ACTION', label: 'Email Akib', href: 'mailto:akibh987@gmail.com' },
];

export const HERO_STATS = [
  { display: '4+', label: 'Years coding' },
  { display: '24', label: 'GitHub repos' },
];

export const PROJECT_FILTERS = ['all', 'ai', 'web', 'systems', 'design'];
export const FILTER_LABELS = { all: 'All', ai: 'AI / ML', web: 'Web Apps', systems: 'Systems', design: 'Design' };

export const GALLERY_TYPE_LABELS = { certificate: 'Certificate', competition: 'Competition', design: 'Design', video: 'Video' };
export const GALLERY_TYPE_ICONS = { certificate: 'Certificate', competition: 'Medal', design: 'Image', video: 'PlayCircle' };

export function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
