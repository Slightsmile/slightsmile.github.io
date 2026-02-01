const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
// Reduced count for cleaner look on portfolio
const particleCount = 60;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slower, more subtle movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        // Indigo theme colors (Indigo-600 and Indigo-400)
        this.color = Math.random() > 0.5 ? 'rgba(79, 70, 229, ' : 'rgba(129, 140, 248, '; 
        this.alpha = Math.random() * 0.3 + 0.1; // Lower alpha for subtlety
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ')';
        ctx.fill();
    }
}

function drawGrid() {
    // Very subtle grid
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.05)'; // Indigo-500 with very low opacity
    ctx.lineWidth = 1;

    const gridSize = 60;
    
    const time = Date.now() * 0.0005;
    const offsetX = (time * 10) % gridSize;
    const offsetY = (time * 10) % gridSize;

    for (let x = -gridSize + offsetX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    for (let y = -gridSize + offsetY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}

function connectParticles() {
    const maxDist = 120;
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
                ctx.beginPath();
                // Connecting lines in Indigo
                ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / maxDist)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function init() {
    resize();
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    animate();
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    drawGrid();

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    connectParticles();

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);

// Initialize after a short delay to ensure DOM is ready and layout is settled
setTimeout(init, 100);
