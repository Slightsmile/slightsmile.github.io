# Knowledge Base: MD. Mohiuddin Ahmed (Akib)

*Compiled from mohi-uddin.me, resume PDF, and GitHub (github.com/Slightsmile) — July 2026*

---

## 1. Identity & Contact

| Field | Detail |
|---|---|
| Full name | MD. Mohiuddin Ahmed |
| Goes by | Akib |
| Portfolio | [mohi-uddin.me](https://mohi-uddin.me/) |
| Email | akibh987@gmail.com |
| Phone / WhatsApp | +8801326561196 |
| GitHub | [github.com/Slightsmile](https://github.com/Slightsmile) (24 public repos, 6 followers, 11 following, 2 "Pull Shark" badges, "Pair Extraordinaire" x2, Quickdraw, YOLO achievements) |
| LinkedIn | [linkedin.com/in/mohi28](https://linkedin.com/in/mohi28) |
| Figma | figma.com/@mohi28 |
| Dev.to | dev.to/slightsmile |
| Facebook | facebook.com/slight.smile.28 |
| Telegram | t.me/Slightsmile |
| Location | Dhaka, Bangladesh |
| Self-description | "Data Analyst, Developer, and Designer. Crafting elegant solutions through code." |

---

## 2. Education

| Period | Institution | Program | Result |
|---|---|---|---|
| 2022–2026 | Daffodil International University | BSc in Computer Science and Engineering | GPA 3.52/4.0 |
| 2019–2021 | Mohammadpur Preparatory School and College | HSC (Science) | GPA 5.0/5.0 |
| 2009–2019 | Dhanmondi Govt. Boys High School | SSC (Science) | GPA 4.67/5.0 |

---

## 3. Work Experience

- **AI Solution Developer** — Daffodil Computers PLC (May 2026–Present): Project management, software design, programming.
- **Intern – Designing & Content** — Daffodil Computers PLC (Jan–Apr 2026): Website management, ODOO (ERP), graphics design, video editing.
- **Scriptwriter** — PC Builder Bangladesh (Aug–Oct 2023): Video conceptualization, content research.
- **Store Manager & Computer Operator** — ShopUp (Aug–Oct 2021): Store & maintenance management, auditing.
- **Salesperson** — Shwapno (Apr–Jun 2019): Sales management, customer relationship management.

---

## 4. Skills

- **Programming:** C, C++, Java, Python, HTML5, CSS, JavaScript, Dart, Flutter, FastAPI, MySQL, PostgreSQL
- **Tools:** Git, LaTeX, Arduino, Cisco (Packet Tracer), Ubuntu/Linux, Notion, MS Office, Google Workspace
- **Editing/Design:** Figma, Canva, CapCut
- **Domain interests (from prior work):** AI-based HR automation (CV Matcher, Performance Management using local LLMs), ML disease prediction, deep learning in medical imaging

---

## 5. Projects (Deep Dive)

### 🦠 Gallbladder Cancer Detection from Ultrasound Images (Deep Learning)
- **Repo:** [Gallblader-Cancer-Detection-DL](https://github.com/Slightsmile/Gallblader-Cancer-Detection-DL) · 2 stars · Jupyter Notebook
- Multi-model deep-learning ensemble to classify gallbladder ultrasound images (Normal, Benign, Malignant, Gallstone, Abnormal) using ResNet, EfficientNet, MobileNet, DenseNet, ShuffleNet, plus GBCNet, SqueezeNet, RadFormer — 16 models total.
- Dataset: 2,294 ultrasound images (Kaggle "Gallbladder Cancer Ultrasound Dataset"); split 1,605 train / 346 val / 343 test.
- Training: CrossEntropyLoss, Adam optimizer, StepLR scheduler, batch size 32, 30 epochs, early stopping (patience 5), transfer learning.
- **Results:** Best individual model EfficientNetB0 (86.30%); normal-averaging ensemble reached **87.17% test accuracy** (highest). Worst performer: RadFormer (60.64%).
- Stack: Python 3.9+, PyTorch 2.x, torchvision, scikit-learn, matplotlib, seaborn.
- Built as part of the **Research and Innovation Project** at Daffodil International University.

### 📚 JournalEase — Library Management System
- **Repo:** [Library-MS-Project](https://github.com/Slightsmile/Library-MS-Project) · Python
- Desktop LMS built with Python + Tkinter (GUI) + MySQL (via PyMySQL). Features: add/search/issue/return books, view all books, book-holder tracking, update/delete records.
- Two DB tables: `book_list` and `borrow_record`.
- Built for the **OOP Lab Project** at DIU.

### 🚌 Bus Management System
- **Repo:** [Bus-MS-Project](https://github.com/Slightsmile/Bus-MS-Project) · Java
- Java Swing desktop app with MySQL backend (via XAMPP/Netbeans). Features: user authentication, route management (CRUD), bus scheduling, seat booking.
- Built for the **OOP Lab Project** at DIU.

### 🔐 Digital Door Lock using Arduino
- **Repo:** [DoorLock-Arduino-Project](https://github.com/Slightsmile/DoorLock-Arduino-Project) · C++
- Password-protected door lock using Arduino Nano, 4x4 keypad, SG90 servo motor as actuator, I2C 16x2 LCD for feedback; physical prototype built with Styrofoam.
- Includes a full project report PDF ("Digital Lock with Binary Code Report").
- Built for the **Digital Electronics Lab Project** at DIU.

### 📡 IR-Based Morse Code Sender and Decoder
- **Repo:** [Morse-Decoder-Arduino-Project](https://github.com/Slightsmile/Morse-Decoder-Arduino-Project) · C++
- Arduino Uno project: IR remote sends Morse code (short press = dot, long press = dash); IR receiver decodes signal; I2C 16x2 LCD displays translated text in real time.
- Built for the **Embedded System and IoT Lab Project** at DIU.
- (Matches resume's "Morse Decoder" project.)

### 🗄️ Mini SQL Interpreter for CSV Files
- **Repo:** [Mini-Sql-Interpreter](https://github.com/Slightsmile/Mini-Sql-Interpreter) · C, Yacc, Lex, Makefile
- A lightweight SQL-like query engine over CSV files built with **Flex** (lexer) and **Bison** (parser) — applies compiler-construction principles to real-world data filtering without a full DBMS.
- Supports `SELECT col1, col2 FROM file.csv WHERE condition;` syntax with numeric/string WHERE clauses.
- Built for the **Compiler Design Lab Project** at DIU. MIT licensed.

### 🚍 DIU Transport Schedule ("DIU Shuttle")
- **Repo:** [DIU-Transport](https://github.com/Slightsmile/DIU-Transport) · JavaScript/HTML/CSS
- **Live site:** [diushuttle.vercel.app](https://diushuttle.vercel.app/)
- A responsive, SEO-optimized website that parses university shuttle-bus schedule Excel files (.xlsx, via SheetJS) directly in-browser. Supports Regular, Mid-Term, Final Exam, and Ramadan schedules, route search/filter, and a "Friday-only" toggle.
- Full SEO stack: JSON-LD structured data, Open Graph/Twitter cards, sitemap.xml, robots.txt. Hosted on Vercel.

### 🐛 Grameen Pest Control (per resume)
- **Live site** (per resume, not independently re-verified via GitHub in this session): full-stack website with a built-in CMS admin panel for a pest control service, built with HTML/CSS/JS.

### 🌐 University Network Simulator (per resume)
- Cisco Packet Tracer project: implementing and simulating a scalable university network (switches, routers, likely email/FTP servers based on typical DIU coursework patterns) — listed on resume with a GitHub link, but the specific repository could not be located under the Slightsmile account in this session (may be private, unlisted, or under a different name).

### 💬 Subtext (per resume)
- Flutter + Firebase secure "decoy space" chat app, described on the resume as a security-focused messaging app. Could not be located as a public repo under Slightsmile in this session — may be private/unlisted or renamed.

---

## 6. Other Notable GitHub Repos (from pinned/profile, not on resume)

- **[DIU-Transport](https://github.com/Slightsmile/DIU-Transport)** — see above.
- GitHub profile shows **24 public repositories** total and **8 starred repos**; the ones above represent the documented/described projects. Some additional repos exist but weren't individually profiled in this pass.

---

## 7. Prior Career-Planning Context (from earlier conversations)

- Completed a detailed **AI career roadmap** session identifying two target tracks: **Applied AI Engineer** and **Full-Stack AI Engineer**, with a 12-month employability plan.
- Skill gaps flagged: LLM fine-tuning (LoRA, QLoRA, RLHF), cloud infrastructure, vector databases, ML evaluation methodology, and public visibility/personal branding.
- **Healthcare AI** was highlighted as a strong long-term (2030-oriented) specialization — consistent with the Gallbladder Cancer Detection project above.
- Also produced a full 3-year plan as a LaTeX document, and has done HR-automation work (CV Matcher, Performance Management modules using local LLMs) at a professional level beyond what's on GitHub/resume.

---

## 8. Personal / Style Notes

- Casual, multilingual communicator — mixes English and Japanese greetings.
- Broad intellectual interests: philosophy of religion, international sports (incl. 2026 FIFA World Cup discussions).
- Has done freelance/creative work: logo design for a brand called "Infectech" (Python + cairosvg/Pillow pipeline generating 13 logo variants).

---

*Note: A couple of resume-listed projects (Subtext, University Network Simulator) could not be independently verified against a live public GitHub repo during this research pass — everything else above was pulled directly from the live portfolio, resume PDF, and GitHub repo pages/READMEs.*
