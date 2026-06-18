# Mohiuddin Ahmed — Portfolio

Personal portfolio website for Mohiuddin Ahmed, Data Analyst, Developer, and Designer. Live at [slightsmile.github.io](https://slightsmile.github.io).

## Features

- Animated canvas background with interactive particle effects
- Dark/light theme toggle with persistent preference
- Typed.js headline animation
- GSAP scroll-triggered animations
- Sections: Home, Skills, Experience, Education, Projects, Contact
- Downloadable CV
- Fully responsive layout (Tailwind CSS)

## Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Tailwind CSS (CDN) + custom `style.css` |
| Scripting | Vanilla JS (`script.js`, `background.js`) |
| Animations | GSAP + ScrollTrigger, Typed.js |
| Icons | Feather Icons |
| Components | Custom Web Components (`navbar`, `footer`, `theme-toggle`) |
| Hosting | GitHub Pages |

## Project Structure

```
slightsmile.github.io/
├── index.html          # Main page
├── style.css           # Custom styles and theme variables
├── script.js           # Page logic, section rendering, contact form
├── background.js       # Canvas particle animation
├── components/
│   ├── navbar.js       # Custom navbar web component
│   ├── footer.js       # Custom footer web component
│   └── theme-toggle.js # Dark/light toggle component
├── images/             # Project screenshots, profile photo, favicon
└── CNAME               # Custom domain config (GitHub Pages)
```

## Running Locally

No build step required — open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deployment

Push to the `main` branch. GitHub Pages serves the site automatically via the `CNAME` configuration.
