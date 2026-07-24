import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DownloadSimple, CheckCircle, Briefcase, GraduationCap } from '@phosphor-icons/react';
import { Icon, TechLogo } from '../icons.jsx';
import { useReveal, useTilt, ACCENT } from '../useReveal.js';
import Seo from '../Seo.jsx';
import GallerySection from '../GallerySection.jsx';
import {
  TYPED_WORDS, PROJECTS_DATA, SKILLS_DATA, SKILLS_MARQUEE_ROW_1, SKILLS_MARQUEE_ROW_2,
  ABOUT_FACTS, CONTACT_LINKS, HERO_STATS,
  TIMELINE_DATA, AI_FOCUS_DATA,
} from '../data';

export default function HomePage() {
  const accent = ACCENT;
  const { revealed, register, rs } = useReveal();
  const { tiltHandlers, tiltStyle } = useTilt();

  const [typedText, setTypedText] = useState('');
  const [skillFilter, setSkillFilter] = useState('all');
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);
  const [formError, setFormError] = useState('');

  const projectTrackRef = useRef(null);
  const projectPausedRef = useRef(false);
  const projectDraggingRef = useRef(false);

  // infinite auto-scrolling project marquee (pauses on hover / drag, loops seamlessly)
  useEffect(() => {
    const track = projectTrackRef.current;
    if (!track) return;
    let raf;
    const speed = 0.6; // px per frame
    const tick = () => {
      if (!projectPausedRef.current && !projectDraggingRef.current) {
        track.scrollLeft += speed;
        const half = track.scrollWidth / 2;
        if (track.scrollLeft >= half) track.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const projectDragState = useRef({ startX: 0, startScroll: 0 });
  const onProjectPointerDown = (e) => {
    const track = projectTrackRef.current;
    if (!track) return;
    projectDraggingRef.current = true;
    projectDragState.current = { startX: e.clientX, startScroll: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  };
  const onProjectPointerMove = (e) => {
    if (!projectDraggingRef.current) return;
    const track = projectTrackRef.current;
    const dx = e.clientX - projectDragState.current.startX;
    track.scrollLeft = projectDragState.current.startScroll - dx;
  };
  const onProjectPointerUp = () => { projectDraggingRef.current = false; };

  // typing effect
  useEffect(() => {
    let typedIndex = 0;
    let typedCharIndex = 0;
    let phase = 'typing';
    let pauseTimeout;
    const timer = setInterval(() => {
      const word = TYPED_WORDS[typedIndex];
      if (phase === 'typing') {
        const next = word.slice(0, typedCharIndex + 1);
        typedCharIndex = next.length;
        setTypedText(next);
        if (next.length >= word.length) {
          phase = 'pausing';
          pauseTimeout = setTimeout(() => { phase = 'deleting'; }, 1400);
        }
      } else if (phase === 'deleting') {
        const next = word.slice(0, Math.max(0, typedCharIndex - 1));
        typedCharIndex = next.length;
        setTypedText(next);
        if (next.length === 0) {
          phase = 'typing';
          typedIndex = (typedIndex + 1) % TYPED_WORDS.length;
        }
      }
    }, 55);
    return () => { clearInterval(timer); clearTimeout(pauseTimeout); };
  }, []);


  const onFormSubmit = async (e) => {
    e.preventDefault();
    setFormSending(true);
    setFormError('');
    try {
      const res = await fetch('https://formspree.io/f/xlgqpkwg', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      if (!res.ok) throw new Error('Submission failed');
      setFormSubmitted(true);
    } catch {
      setFormError("Couldn't send your message. Please try again or email akibh987@gmail.com directly.");
    } finally {
      setFormSending(false);
    }
  };
  const resetForm = () => { setFormSubmitted(false); setFormError(''); setFormName(''); setFormEmail(''); setFormMessage(''); };

  const filteredSkillCategories = skillFilter === 'all' ? SKILLS_DATA : SKILLS_DATA.filter((c) => c.id === skillFilter);

  return (
    <>
      <Seo title="Mohiuddin Ahmed Akib - AI Solution Developer" description="Mohiuddin Ahmed Akib is an AI Solution Developer and full-stack engineer building AI-powered SaaS platforms, deep-learning research, and production web applications out of Dhaka, Bangladesh." />
      {/* ================= HERO ================= */}
      <section id="home" data-screen-label="Hero" style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 40, padding: '140px 6% 100px', maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ flex: '1 1 480px', minWidth: 300 }}>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(32px, 4.6vw, 58px)', fontWeight: 800, lineHeight: 1.08, margin: '0 0 18px', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>Hi, I'm<br /><span style={{ display: 'inline-block' }}>Mohiuddin Ahmed Akib</span></h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 'clamp(19px,2.6vw,28px)', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, marginBottom: 22, flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>I am</span>
            <span style={{ color: accent }}>{typedText}<span style={{ color: accent, animation: 'pulseDot 1s step-start infinite' }}>|</span></span>
          </div>
          <p style={{ fontSize: 16.5, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>A Software Engineer and AI Developer with a passion for building intelligent software products that solve real-world problems. My work spans AI, backend engineering, SaaS platforms, and cloud deployment, with a strong focus on creating scalable, production-ready solutions.</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 46 }}>
            <a href="#contact" className="__cta-primary" style={{ background: accent, color: 'var(--text-on-accent)', padding: '13px 26px', borderRadius: 100, textDecoration: 'none', fontSize: 14.5, fontWeight: 700, boxShadow: `0 8px 24px ${accent}55`, display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>Contact Me <ArrowRight size={16} weight="bold" /></a>
            <a href="/Resume-Mohiuddin-Ahmed.pdf" download className="__cta-secondary" style={{ background: 'var(--surface-faint-4)', color: 'var(--text-primary)', padding: '13px 26px', borderRadius: 100, textDecoration: 'none', fontSize: 14.5, fontWeight: 700, border: '1px solid var(--border-stronger)', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease' }}>Resume <DownloadSimple size={16} weight="bold" /></a>
          </div>
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {HERO_STATS.map((stat, i) => (
              <div key={i}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 30, fontWeight: 800, color: 'var(--text-primary)' }}>{stat.display}</div>
                <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '1 1 340px', minWidth: 280, display: 'flex', justifyContent: 'center', position: 'relative', height: 520, alignItems: 'center' }}>
          <div style={{ position: 'absolute', width: 340, height: 340, borderRadius: '50%', background: `radial-gradient(circle, ${accent}33, transparent 70%)`, filter: 'blur(20px)', animation: 'floatY 6s ease-in-out infinite' }}></div>
          <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', border: '1px dashed rgba(59,130,246,0.25)', animation: 'spin360 40s linear infinite' }}></div>
          <div style={{ position: 'relative', height: '100%', maxWidth: '100%', animation: 'floatY 7s ease-in-out infinite' }}>
            <div {...tiltHandlers('hero-photo')} style={{ position: 'relative', height: '100%', maxWidth: '100%', aspectRatio: '3072 / 5504', borderRadius: 28, background: 'var(--surface)', border: '1px solid var(--border-strong)', backdropFilter: 'blur(14px)', overflow: 'hidden', ...tiltStyle('hero-photo') }}>
              <img src="/images/portfolio.png" alt="Mohiuddin Ahmed Akib" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS MARQUEE (dual infinite, opposite directions) ================= */}
      <section data-screen-label="Skills Marquee" style={{ position: 'relative', zIndex: 1, padding: '48px 0', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div className="__marquee-row" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', overflow: 'hidden' }}>
          <div className="__marquee-track __marquee-track-forward" style={{ display: 'flex', width: 'max-content' }}>
            {[...SKILLS_MARQUEE_ROW_1, ...SKILLS_MARQUEE_ROW_1].map((sk, i) => (
              <span key={i} className="__tech-pill" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '11px 22px 11px 16px', margin: '0 8px', borderRadius: 100,
                background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                color: 'var(--text-quinary)', fontSize: 14.5, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif",
                whiteSpace: 'nowrap', transition: 'all 0.25s ease', cursor: 'default',
              }}>
                <TechLogo slug={sk.slug} size={17} />
                {sk.name}
              </span>
            ))}
          </div>
        </div>
        <div className="__marquee-row" style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', overflow: 'hidden' }}>
          <div className="__marquee-track __marquee-track-reverse" style={{ display: 'flex', width: 'max-content' }}>
            {[...SKILLS_MARQUEE_ROW_2, ...SKILLS_MARQUEE_ROW_2].map((sk, i) => (
              <span key={i} className="__tech-pill" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, padding: '11px 22px 11px 16px', margin: '0 8px', borderRadius: 100,
                background: 'var(--bg-elevated)', border: '1px solid var(--border)',
                color: 'var(--text-quinary)', fontSize: 14.5, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif",
                whiteSpace: 'nowrap', transition: 'all 0.25s ease', cursor: 'default',
              }}>
                <TechLogo slug={sk.slug} size={17} />
                {sk.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" data-screen-label="About" style={{ position: 'relative', zIndex: 1, maxWidth: 1300, margin: '0 auto', padding: '110px 6%' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12.5, color: accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', marginBottom: 14 }}>01 · About</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.12, margin: 0, letterSpacing: '-0.015em' }}>Grounded in research,<br />built for production.</h2>
        </div>
        <div className="__about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.85fr) minmax(0,1.15fr)', gap: 50, alignItems: 'start' }}>
          <div {...tiltHandlers('about-photo')} style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', border: '1px solid var(--border-strong)', aspectRatio: '4 / 5', ...tiltStyle('about-photo') }}>
            <img src="/images/about speech mohiuddin.png" alt="Mohiuddin Ahmed Akib speaking at an event" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 18 }}>AI Solution Developer with experience building AI-powered SaaS platforms, enterprise web applications, and intelligent automation systems. Skilled in various programming languages with hands-on projects in machine learning and deep learning. Looking to contribute to innovative software solutions and grow in a challenging environment.</p>
            <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 18 }}>My Research and Innovation project, a 16-model deep learning ensemble for gallbladder cancer detection from ultrasound images, reached <strong style={{ color: 'var(--text-primary)' }}>87.17% test accuracy</strong>, outperforming every individual model in the study. That same rigor carries into everything I ship, from compiler-built query engines to production-facing web tools.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 12, marginTop: 28 }}>
              {ABOUT_FACTS.map((fact, i) => {
                const id = 'about-fact-' + i;
                return (
                  <div key={i} {...tiltHandlers(id)} style={{ padding: 16, borderRadius: 14, background: 'var(--surface-faint)', border: '1px solid var(--border-soft)', ...tiltStyle(id) }}>
                    <div style={{ fontSize: 11, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>{fact.label}</div>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, color: 'var(--text-primary)', fontWeight: 600 }}>{fact.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE / EDUCATION TIMELINE ================= */}
      <section id="experience" data-screen-label="Experience" style={{ position: 'relative', zIndex: 1, maxWidth: 1300, margin: '0 auto', padding: '110px 6%' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12.5, color: accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', marginBottom: 14 }}>02 · Journey</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.12, margin: 0, letterSpacing: '-0.015em' }}>Experience &amp; education</h2>
        </div>
        <div style={{ position: 'relative', marginTop: 20 }}>
          <div className="__timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, rgba(59,130,246,0.4), var(--surface-faint-4))', transform: 'translateX(-50%)' }}></div>
          {TIMELINE_DATA.map((item, i) => {
            const id = 'tl-' + i;
            const left = i % 2 === 0;
            const isEdu = item.type === 'EDU';
            return (
              <div key={id} className="__timeline-item" data-reveal={id} ref={register} style={{
                position: 'relative', width: '100%', maxWidth: 560,
                marginLeft: left ? 0 : 'auto', marginRight: left ? 'auto' : 0,
                paddingLeft: left ? 0 : 40, paddingRight: left ? 40 : 0,
                marginBottom: 32, ...rs(id, 0),
              }}>
                <div className="__timeline-dot" style={{
                  position: 'absolute', top: '50%', left: left ? 'calc(100% + 12px)' : 'auto', right: left ? 'auto' : 'calc(100% + 12px)',
                  transform: 'translateY(-50%)',
                  width: 12, height: 12, borderRadius: isEdu ? 3 : '50%', background: isEdu ? 'var(--edu-accent)' : accent, boxShadow: `0 0 0 4px ${isEdu ? 'rgba(251,191,36,0.15)' : 'rgba(59,130,246,0.15)'}`,
                }}></div>
                <div className="__timeline-card" {...tiltHandlers(id)} style={{
                  background: isEdu ? 'var(--edu-bg)' : 'var(--surface)',
                  border: `1px solid ${isEdu ? 'var(--edu-border)' : 'var(--border)'}`,
                  borderStyle: isEdu ? 'dashed' : 'solid',
                  borderRadius: 16, padding: 22, ...tiltStyle(id),
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', padding: '3px 8px', borderRadius: 6, color: isEdu ? 'var(--edu-accent-light)' : 'var(--accent-lighter)', background: isEdu ? 'rgba(251,191,36,0.1)' : 'rgba(59,130,246,0.12)' }}>
                      {isEdu ? <GraduationCap size={11} weight="bold" /> : <Briefcase size={11} weight="bold" />}
                      {item.type}
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono',monospace" }}>{item.period}</span>
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: isEdu ? 'var(--edu-accent)' : 'var(--accent-light)', marginTop: 2, fontWeight: 600 }}>{item.org}</div>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURED PROJECTS (infinite auto-scroll) ================= */}
      <section id="projects" data-screen-label="Featured Projects" style={{ position: 'relative', zIndex: 1, padding: '110px 0' }}>
        <div style={{ marginBottom: 52, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', maxWidth: 1300, margin: '0 auto 52px', padding: '0 6%' }}>
          <div>
            <div style={{ fontSize: 12.5, color: accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', marginBottom: 14 }}>03 · Selected Work</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.12, margin: 0, letterSpacing: '-0.015em' }}>Projects worth reading the README for.</h2>
          </div>
          <Link to="/projects" className="__cta-secondary" style={{ background: 'var(--surface-faint-4)', color: 'var(--text-primary)', padding: '11px 22px', borderRadius: 100, textDecoration: 'none', fontSize: 13.5, fontWeight: 700, border: '1px solid var(--border-stronger)', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease', whiteSpace: 'nowrap' }}>View All Projects <ArrowRight size={15} weight="bold" /></Link>
        </div>
        <div
          ref={projectTrackRef}
          className="__project-scroll"
          onMouseEnter={() => { projectPausedRef.current = true; }}
          onMouseLeave={() => { projectPausedRef.current = false; }}
          onPointerDown={onProjectPointerDown}
          onPointerMove={onProjectPointerMove}
          onPointerUp={onProjectPointerUp}
          onPointerLeave={onProjectPointerUp}
          style={{
            display: 'flex', gap: 22, overflowX: 'auto', padding: '4px 6% 14px', cursor: 'grab',
            maskImage: 'linear-gradient(90deg, transparent, black 4%, black 96%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, black 4%, black 96%, transparent)',
          }}>
          {[...PROJECTS_DATA, ...PROJECTS_DATA].map((p, i) => (
            <div key={p.id + '-' + i} className="__project-card" style={{
              background: 'linear-gradient(180deg, var(--surface-strong), var(--surface-soft))',
              border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden',
              display: 'flex', flexDirection: 'column', flex: '0 0 260px', width: 260,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            }}>
              <Link to="/projects" draggable={false} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ height: 120, flexShrink: 0, position: 'relative', background: 'repeating-linear-gradient(135deg, rgba(59,130,246,0.06) 0px, rgba(59,130,246,0.06) 2px, transparent 2px, transparent 14px), var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-soft)' }}>
                  <img src={p.image} alt={p.title} loading="lazy" draggable={false} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
                  <span style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--text-quaternary)', letterSpacing: '0.04em', textAlign: 'center', padding: '0 14px' }}>{p.title.toUpperCase()} PREVIEW</span>
                </div>
              </Link>
              <div style={{ padding: '16px 16px 18px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15.5, fontWeight: 700, color: 'var(--text-primary)' }}>{p.title}</div>
                </Link>
                <p style={{
                  fontSize: 12.5, color: 'var(--text-secondary)', margin: '8px 0 12px', lineHeight: 1.5,
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
                  {p.tags.slice(0, 3).map((tag) => (
                    <span key={tag} style={{ fontSize: 10.5, padding: '3px 9px', borderRadius: 100, background: 'rgba(59,130,246,0.08)', color: 'var(--accent-lighter)', border: '1px solid rgba(59,130,246,0.18)' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 'auto' }}>
                  {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: 'var(--accent-light)', textDecoration: 'none', fontWeight: 700 }}>GitHub <ArrowRight size={11} weight="bold" style={{ transform: 'rotate(-45deg)', display: 'inline', verticalAlign: 'middle' }} /></a>}
                  {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: 'var(--accent-light)', textDecoration: 'none', fontWeight: 700 }}>Live <ArrowRight size={11} weight="bold" style={{ transform: 'rotate(-45deg)', display: 'inline', verticalAlign: 'middle' }} /></a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" data-screen-label="Skills" style={{ position: 'relative', zIndex: 1, padding: '110px 0' }}>
        <div style={{ marginBottom: 52, padding: '0 6%', maxWidth: 1300, margin: '0 auto 52px' }}>
          <div style={{ fontSize: 12.5, color: accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', marginBottom: 14 }}>04 · Skills</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.12, margin: 0, letterSpacing: '-0.015em' }}>What I actually reach for.</h2>
          <div style={{ display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap' }}>
            <button onClick={() => setSkillFilter('all')} className="__filter-btn" style={{
              padding: '7px 16px', borderRadius: 100, fontSize: 13,
              border: `1px solid ${skillFilter === 'all' ? accent : 'var(--border-strong)'}`,
              background: skillFilter === 'all' ? 'rgba(59,130,246,0.12)' : 'transparent',
              color: skillFilter === 'all' ? 'var(--text-primary)' : 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}>All</button>
            {SKILLS_DATA.map((cat) => {
              const active = skillFilter === cat.id;
              return (
                <button key={cat.id} onClick={() => setSkillFilter(cat.id)} className="__filter-btn" style={{
                  padding: '7px 16px', borderRadius: 100, fontSize: 13,
                  border: `1px solid ${cat.color}${active ? '' : '66'}`,
                  background: active ? cat.color + '33' : cat.color + '14',
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                  transition: 'border-color 0.2s ease, color 0.2s ease, background 0.2s ease',
                }}>{cat.name}</button>
              );
            })}
          </div>
        </div>

        <div data-reveal="skills-pool" ref={register} style={{ display: 'flex', flexWrap: 'wrap', gap: 12, maxWidth: 1300, margin: '0 auto', padding: '0 6%', ...rs('skills-pool', 0) }}>
          {filteredSkillCategories.flatMap((cat) => cat.skills.map((sk) => (
            <span key={cat.id + '-' + sk.name} className="__skill-pill" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: 'var(--text-quinary)',
              padding: '10px 18px', borderRadius: 100, background: cat.color + '1f', border: `1px solid ${cat.color}4d`,
              transition: 'transform 0.2s ease, border-color 0.2s ease, background 0.2s ease',
            }}>
              <TechLogo slug={sk.slug} size={14} />
              {sk.name}
            </span>
          )))}
        </div>
      </section>

      {/* ================= AI FOCUS ================= */}
      <section id="ai-focus" data-screen-label="AI Focus" style={{ position: 'relative', zIndex: 1, maxWidth: 1300, margin: '0 auto', padding: '110px 6%' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12.5, color: accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', marginBottom: 14 }}>05 · AI Focus</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.12, margin: 0, letterSpacing: '-0.015em' }}>Where I'm pointing the AI work</h2>
          <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 18, maxWidth: 640 }}>From diagnostic imaging to internal HR tooling, the throughline is applying deep learning and LLMs to problems with real, verifiable ground truth.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {AI_FOCUS_DATA.map((a, i) => {
            const id = 'ai-' + i;
            return (
              <div key={id} data-reveal={id} ref={register} className="__ai-card" {...tiltHandlers(id)} style={{ padding: 26, borderRadius: 18, background: 'var(--surface-soft)', border: '1px solid var(--border)', opacity: rs(id, i * 0.06).opacity, transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${i * 0.06}s, ${tiltStyle(id).transition}`, ...tiltStyle(id, `translateY(${revealed[id] ? '0' : '30px'})`) }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={a.icon} size={22} weight="bold" color="var(--accent-light)" />
                </div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{a.title}</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{a.desc}</div>
                <div style={{ display: 'inline-block', marginTop: 14, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', color: 'var(--accent-light)', fontFamily: "'JetBrains Mono', monospace" }}>{a.status}</div>
              </div>
            );
          })}
        </div>
      </section>

      <GallerySection accent={accent} register={register} revealed={revealed} eyebrow="06 · Proof of Work" />

      {/* ================= CONTACT ================= */}
      <section id="contact" data-screen-label="Contact" style={{ position: 'relative', zIndex: 1, maxWidth: 1300, margin: '0 auto', padding: '110px 6%' }}>
        <div className="__contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 60, alignItems: 'end' }}>
          <div>
            <div style={{ fontSize: 12.5, color: accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', marginBottom: 14 }}>07 · Contact</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.12, margin: 0, letterSpacing: '-0.015em' }}>Let's build<br />something real.</h2>
            <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 18 }}>Open to AI engineering, full-stack, and research-adjacent roles. Based in Dhaka, Bangladesh, happy to work remote or on-site.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 10, marginTop: 24 }}>
              {CONTACT_LINKS.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="__contact-link" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', padding: 10, borderRadius: 12, transition: 'background 0.25s ease', minWidth: 0 }}>
                  <span style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={c.icon} size={17} weight="bold" color="var(--accent-light)" />
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{c.label}</div>
                    <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 30, minHeight: 420 }}>
            {formSubmitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 14, textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle size={44} weight="fill" color="#4ADE80" />
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 19, color: 'var(--text-primary)', fontWeight: 600 }}>Message sent</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-secondary)' }}>Thanks for reaching out — I'll get back to you soon.</div>
                <button onClick={resetForm} className="__cta-secondary" style={{ background: 'var(--surface-faint-4)', color: 'var(--text-primary)', padding: '13px 26px', borderRadius: 100, textDecoration: 'none', fontSize: 14.5, fontWeight: 600, border: '1px solid var(--border-stronger)', marginTop: 10, cursor: 'pointer', transition: 'transform 0.2s ease, background 0.2s ease' }}>Send another</button>
              </div>
            ) : (
              <form onSubmit={onFormSubmit}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 20 }}>Send a message</div>
                <label style={{ display: 'block', fontSize: 12, color: 'var(--text-tertiary)', marginBottom: 6, marginTop: 16 }}>Name</label>
                <input required name="name" value={formName} onChange={(e) => setFormName(e.target.value)} placeholder="Your name" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'var(--surface-faint-2)', border: '1px solid var(--border-strong)', color: 'var(--text-primary)', fontSize: 14, fontFamily: "'Inter',sans-serif", outline: 'none' }} />
                <label style={{ display: 'block', fontSize: 12, color: 'var(--text-tertiary)', marginBottom: 6, marginTop: 16 }}>Email</label>
                <input required type="email" name="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} placeholder="you@company.com" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'var(--surface-faint-2)', border: '1px solid var(--border-strong)', color: 'var(--text-primary)', fontSize: 14, fontFamily: "'Inter',sans-serif", outline: 'none' }} />
                <label style={{ display: 'block', fontSize: 12, color: 'var(--text-tertiary)', marginBottom: 6, marginTop: 16 }}>Message</label>
                <textarea required name="message" value={formMessage} onChange={(e) => setFormMessage(e.target.value)} placeholder="What are we building?" rows={4} style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'var(--surface-faint-2)', border: '1px solid var(--border-strong)', color: 'var(--text-primary)', fontSize: 14, fontFamily: "'Inter',sans-serif", outline: 'none', resize: 'vertical' }}></textarea>
                <input type="hidden" name="_subject" value={'Portfolio contact from ' + (formName || 'a visitor')} />
                {formError && <div style={{ fontSize: 13, color: '#F87171', marginTop: 14 }}>{formError}</div>}
                <button type="submit" disabled={formSending} className="__cta-primary" style={{ width: '100%', background: accent, color: 'var(--text-on-accent)', padding: '13px 26px', borderRadius: 10, border: 'none', fontSize: 14.5, fontWeight: 700, marginTop: 22, cursor: formSending ? 'default' : 'pointer', opacity: formSending ? 0.7 : 1, fontFamily: "'Inter',sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>{formSending ? 'Sending…' : <>Contact Me <ArrowRight size={16} weight="bold" /></>}</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
