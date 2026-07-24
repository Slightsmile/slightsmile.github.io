import { useEffect, useRef, useState, useCallback } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowUp, Sun, Moon, ArrowUpRight, DownloadSimple, EnvelopeSimple, MapPin,
} from '@phosphor-icons/react';
import { Icon } from './icons.jsx';
import {
  NAV_ITEMS, DOCK_LINKS, PALETTE_ITEMS,
} from './data';

const ACCENT = 'var(--accent)';

export default function Layout() {
  const accent = ACCENT;
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(() => !window.__hasLoadedOnce);
  const [loadPercent, setLoadPercent] = useState(0);
  const [scrollProgressPct, setScrollProgressPct] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState('');
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback((e) => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;
    document.documentElement.style.setProperty('--theme-toggle-x', x + 'px');
    document.documentElement.style.setProperty('--theme-toggle-y', y + 'px');
    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }
    const transition = document.startViewTransition(() => { setTheme(next); });
    transition.ready.catch(() => {});
  }, [theme]);

  // loading screen (only once per session)
  useEffect(() => {
    if (window.__hasLoadedOnce) return;
    let pct = 0;
    const timer = setInterval(() => {
      pct = Math.min(100, pct + Math.random() * 18 + 6);
      setLoadPercent(Math.round(pct));
      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => { setLoading(false); window.__hasLoadedOnce = true; }, 350);
      }
    }, 160);
    return () => clearInterval(timer);
  }, []);

  // scroll handling
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgressPct(max > 0 ? Math.min(100, (y / max) * 100) : 0);
      setNavScrolled(y > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  // scroll to top / hash on route change
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  // active-section tracking for in-page anchor nav items (Home only)
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
      return;
    }
    const anchorIds = NAV_ITEMS.filter((n) => n.href.startsWith('/#')).map((n) => n.href.slice(2));
    const allIds = ['home', ...anchorIds, 'experience', 'projects'];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0, rootMargin: '-45% 0px -50% 0px' }
    );
    const t = setTimeout(() => {
      allIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    }, 50);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [location.pathname]);

  // cursor (desktop only)
  useEffect(() => {
    const desktop = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    setIsDesktop(desktop);
    if (!desktop) return;
    document.documentElement.classList.add('__has-custom-cursor');
    const onMouseMove = (e) => {
      if (cursorDotRef.current) cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      if (cursorRingRef.current) cursorRingRef.current.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
      setCursorVisible(true);
    };
    const onMouseLeave = () => setCursorVisible(false);
    const onMouseEnter = () => setCursorVisible(true);
    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
      document.documentElement.classList.remove('__has-custom-cursor');
    };
  }, []);

  // key handling
  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setPaletteOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const closePalette = () => { setPaletteOpen(false); setPaletteQuery(''); };

  const paletteQ = paletteQuery.toLowerCase();
  const paletteResults = (paletteQ ? PALETTE_ITEMS.filter((p) => p.label.toLowerCase().includes(paletteQ)) : PALETTE_ITEMS).slice(0, 8);

  const goToPaletteItem = (href) => {
    closePalette();
    if (/^https?:\/\/|^mailto:/.test(href)) { window.open(href, '_blank', 'noreferrer'); return; }
    navigate(href);
  };

  const handleNavClick = (href) => (e) => {
    if (href === '/' && location.pathname === '/' && !location.hash) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (href.startsWith('/#') && location.pathname === '/') {
      const targetHash = href.slice(1);
      if (location.hash === targetHash) {
        e.preventDefault();
        const el = document.getElementById(targetHash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isNavActive = (href) => {
    if (location.pathname !== '/') {
      return href === location.pathname;
    }
    // On Home: exactly one nav item should be active, driven by which section is in view.
    if (href === '/') return activeSection === 'home';
    if (href.startsWith('/#')) return activeSection === href.slice(2);
    if (href === '/experience') return activeSection === 'experience';
    if (href === '/projects') return activeSection === 'projects';
    return false;
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif", overflowX: 'hidden' }}>

      {/* NOISE OVERLAY */}
      <svg style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2, opacity: 0.035, mixBlendMode: 'overlay' }}>
        <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"></feTurbulence></filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)"></rect>
      </svg>

      {/* LOADING SCREEN */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999, background: 'var(--bg)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22,
        opacity: loading ? 1 : 0, pointerEvents: loading ? 'auto' : 'none', transition: 'opacity 0.4s ease',
      }}>
        <div style={{ position: 'relative', width: 96, height: 96 }}>
          <img src="/images/logo.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', opacity: 0.15 }} />
          <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: loadPercent + '%', overflow: 'hidden', transition: 'height 0.2s ease' }}>
            <img src="/images/logo.png" alt="Mohiuddin Ahmed Akib" style={{ position: 'absolute', left: 0, bottom: 0, width: 96, height: 96, objectFit: 'contain' }} />
          </div>
        </div>
        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, letterSpacing: '0.35em', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Mohiuddin Ahmed Akib</div>
      </div>

      {/* CUSTOM CURSOR */}
      <div ref={cursorDotRef} style={{ position: 'fixed', top: 0, left: 0, width: 8, height: 8, borderRadius: '50%', background: 'var(--text-primary)', pointerEvents: 'none', zIndex: 2147483646, display: isDesktop && cursorVisible ? 'block' : 'none', transition: 'transform 0.05s linear' }}></div>
      <div ref={cursorRingRef} style={{ position: 'fixed', top: 0, left: 0, width: 36, height: 36, borderRadius: '50%', border: `1px solid ${accent}`, pointerEvents: 'none', zIndex: 2147483646, display: isDesktop && cursorVisible ? 'block' : 'none', transition: 'transform 0.12s ease-out' }}></div>

      {/* SCROLL PROGRESS */}
      <div style={{ position: 'fixed', top: 0, left: 0, height: 3, background: 'linear-gradient(90deg,var(--accent),var(--accent-light))', zIndex: 9998, transition: 'width 0.1s linear', width: scrollProgressPct + '%' }}></div>

      {/* ANIMATED BACKGROUND */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle,rgba(59,130,246,0.28),transparent 70%)', filter: 'blur(40px)', animation: 'blobMove1 22s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', bottom: '-15%', right: '-8%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(96,165,250,0.22),transparent 70%)', filter: 'blur(50px)', animation: 'blobMove2 26s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', top: '35%', right: '15%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(59,130,246,0.14),transparent 70%)', filter: 'blur(45px)', animation: 'blobMove3 30s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent)' }}></div>
        <div style={{ position: 'absolute', top: (mouse.y * 100) + '%', left: (mouse.x * 100) + '%', width: 600, height: 600, marginLeft: -300, marginTop: -300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)', transition: 'top 0.3s ease-out, left 0.3s ease-out' }}></div>
      </div>

      {/* NAVBAR */}
      <div style={{ position: 'fixed', top: navScrolled ? 14 : 22, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'center', padding: '0 6%', transition: 'top 0.35s ease', pointerEvents: 'none' }}>
        <nav style={{
          width: '100%', maxWidth: 1300, pointerEvents: 'auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: navScrolled ? '10px 20px' : '12px 22px',
          background: navScrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: navScrolled ? 'blur(16px)' : 'none',
          border: navScrolled ? '1px solid var(--border)' : '1px solid transparent',
          borderRadius: 100,
          boxShadow: navScrolled ? '0 8px 30px rgba(0,0,0,0.18)' : 'none',
          transition: 'all 0.35s ease',
        }}>
          <Link to="/" onClick={handleNavClick('/')} style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 18, color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '-0.01em' }}>Akib<span style={{ color: 'var(--accent)' }}>.</span></Link>
          <div className="__desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {NAV_ITEMS.map((link) => {
              const active = isNavActive(link.href);
              return (
                <Link key={link.href} to={link.href} onClick={handleNavClick(link.href)} style={{
                  color: active ? 'var(--text-primary)' : 'var(--text-secondary)', textDecoration: 'none', fontSize: 13.5, fontWeight: 500,
                  position: 'relative', paddingBottom: 4,
                  borderBottom: active ? `2px solid ${accent}` : '2px solid transparent',
                  transition: 'color 0.25s, border-color 0.25s',
                }}>{link.label}</Link>
              );
            })}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={toggleTheme} aria-label="Toggle color theme" className="__theme-toggle" style={{ width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'var(--surface-faint-4)', border: '1px solid var(--border-strong)', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'border-color 0.2s ease, color 0.2s ease' }}>
              {theme === 'dark' ? <Moon size={14} weight="bold" /> : <Sun size={14} weight="bold" />}
            </button>
            <button onClick={() => setPaletteOpen(true)} style={{ background: 'var(--surface-faint-4)', border: '1px solid var(--border-strong)', color: 'var(--text-secondary)', fontSize: 11, fontFamily: "'JetBrains Mono',monospace", padding: '6px 9px', borderRadius: 8, cursor: 'pointer' }}>
              <span>⌘K</span>
            </button>
            <Link to="/#contact" style={{ background: accent, color: 'var(--text-on-accent)', fontSize: 12.5, fontWeight: 600, padding: '8px 16px', borderRadius: 100, textDecoration: 'none' }}>Let's Talk</Link>
            <button className="__hamburger" onClick={() => setMobileMenuOpen((v) => !v)} style={{ display: 'none', width: 34, height: 34, borderRadius: 8, background: 'var(--surface-faint-4)', border: '1px solid var(--border)', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, cursor: 'pointer' }}>
              <div style={{ width: 16, height: 2, background: 'var(--text-primary)', transition: 'transform 0.25s', transform: mobileMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}></div>
              <div style={{ width: 16, height: 2, background: 'var(--text-primary)', opacity: mobileMenuOpen ? 0 : 1, transition: 'opacity 0.2s' }}></div>
              <div style={{ width: 16, height: 2, background: 'var(--text-primary)', transition: 'transform 0.25s', transform: mobileMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}></div>
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div style={{ position: 'fixed', inset: 0, top: 68, zIndex: 99, background: 'var(--overlay-bg)', backdropFilter: 'blur(20px)', padding: '10px 8%' }}>
          {NAV_ITEMS.map((link) => (
            <Link key={link.href} to={link.href} onClick={(e) => { closeMobileMenu(); handleNavClick(link.href)(e); }} style={{ display: 'block', padding: '16px 0', color: 'var(--text-primary)', textDecoration: 'none', fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, fontWeight: 600, borderBottom: '1px solid var(--border-soft)' }}>{link.label}</Link>
          ))}
        </div>
      )}

      {/* COMMAND PALETTE */}
      {paletteOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9990, background: 'var(--nav-bg)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '14vh' }} onClick={closePalette}>
          <div style={{ width: 'min(560px, 90vw)', background: 'var(--bg-elevated)', border: '1px solid var(--border-strong)', borderRadius: 16, boxShadow: '0 30px 80px rgba(0,0,0,0.6)', overflow: 'hidden' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 20px', borderBottom: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--accent-light)', fontFamily: "'JetBrains Mono',monospace" }}>/</span>
              <input autoFocus value={paletteQuery} onChange={(e) => setPaletteQuery(e.target.value)} placeholder="Jump to a section, project, or action..." style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-primary)', fontSize: 16, fontFamily: "'Inter',sans-serif" }} />
              <span style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono',monospace", border: '1px solid var(--border-strong)', padding: '2px 6px', borderRadius: 4 }}>ESC</span>
            </div>
            <div style={{ maxHeight: 340, overflowY: 'auto', padding: 8 }}>
              {paletteResults.map((res, i) => (
                <a key={i} href={res.href} onClick={(e) => { e.preventDefault(); goToPaletteItem(res.href); }} className="__palette-item" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 10, color: 'var(--text-primary)', textDecoration: 'none', fontSize: 14, cursor: 'pointer' }}>
                  <span style={{ color: 'var(--accent-light)', fontSize: 11, fontFamily: "'JetBrains Mono',monospace", width: 56, flexShrink: 0 }}>{res.tag}</span>
                  <span>{res.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <Outlet />

      {/* FLOATING SOCIAL DOCK */}
      <div style={{ position: 'fixed', right: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 90, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 100, padding: '14px 10px', backdropFilter: 'blur(12px)' }}>
        {DOCK_LINKS.map((d) => (
          <a key={d.label} href={d.href} target="_blank" rel="noreferrer" title={d.label} className="__dock-link" style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'transparent', color: 'var(--text-secondary)', textDecoration: 'none', cursor: 'pointer', transition: 'background 0.2s ease, color 0.2s ease' }}>
            <Icon name={d.icon} size={16} weight="bold" />
          </a>
        ))}
        <div style={{ width: 24, height: 1, background: 'var(--border-strong)', margin: '4px 0' }}></div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Back to top" className="__dock-link" style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'background 0.2s ease, color 0.2s ease' }}>
          <ArrowUp size={16} weight="bold" />
        </button>
      </div>

      {/* FOOTER */}
      <footer style={{ position: 'relative', zIndex: 1, marginTop: 40, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', maxWidth: 1300, margin: '0 auto', padding: '72px 6% 0' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-light)', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', padding: '7px 14px', borderRadius: 100, marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent-light)', display: 'inline-block', animation: 'pulseDot 2s ease-in-out infinite' }}></span>
            Let's Talk
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(34px,5.6vw,64px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0, maxWidth: 780 }}>
              Got an idea worth<br />building <span style={{ color: 'var(--accent-light)' }}>together?</span>
            </h2>
            <a href="mailto:akibh987@gmail.com" className="__footer-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: accent, color: 'var(--text-on-accent)', fontSize: 14.5, fontWeight: 700, padding: '13px 22px', borderRadius: 100, textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease', boxShadow: `0 8px 24px ${accent}44`, flexShrink: 0 }}>
              <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowUpRight size={15} weight="bold" />
              </span>
              Start a conversation
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,0.8fr) minmax(0,1fr)', gap: 40, paddingBottom: 40 }}>
            <div>
              <Link to="/" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 22, color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '-0.01em' }}>Akib<span style={{ color: 'var(--accent)' }}>.</span></Link>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: 14, maxWidth: 320 }}>AI Solution Developer, full-stack engineer, and researcher. Building software that solves real problems out of Dhaka, Bangladesh.</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 20, fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ADE80', display: 'inline-block', animation: 'pulseDot 2s ease-in-out infinite' }}></span>
                Available / responds &lt; 24h
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: 20 }}>Sitemap</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                {NAV_ITEMS.map((link, i) => (
                  <Link key={link.href} to={link.href} style={{ display: 'flex', alignItems: 'baseline', gap: 10, fontSize: 14.5, fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', width: 'fit-content' }} className="__footer-link">
                    <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono',monospace", color: 'var(--text-quaternary)', fontWeight: 400 }}>{String(i + 1).padStart(2, '0')}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-tertiary)', textTransform: 'uppercase', marginBottom: 20 }}>Reach Me</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <a href="/Resume-Mohiuddin-Ahmed.pdf" download className="__footer-link" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', width: 'fit-content' }}>
                  <DownloadSimple size={15} weight="bold" color="var(--accent-light)" />
                  View resume
                </a>
                <a href="mailto:akibh987@gmail.com" className="__footer-link" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none', width: 'fit-content' }}>
                  <EnvelopeSimple size={15} weight="bold" color="var(--accent-light)" />
                  akibh987@gmail.com
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                  <MapPin size={15} weight="bold" color="var(--accent-light)" />
                  Dhaka, Bangladesh / GMT+6
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 20 }}>
                {DOCK_LINKS.map((d) => (
                  <a key={d.label} href={d.href} target="_blank" rel="noreferrer" title={d.label} className="__footer-social-icon" style={{ width: 38, height: 38, borderRadius: '50%', border: '1px solid var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'border-color 0.2s ease, color 0.2s ease' }}>
                    <Icon name={d.icon} size={16} weight="bold" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-soft)' }}>
            <div style={{ padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>(c) 2026 Mohiuddin Ahmed Akib. All rights reserved.</div>
              <div style={{ fontSize: 12, color: 'var(--text-quaternary)', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.04em' }}>BUILT WITH REACT / VITE</div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" style={{ position: 'relative', textAlign: 'center', overflow: 'hidden', lineHeight: 0.75, pointerEvents: 'none' }}>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: 'clamp(60px,12vw,160px)', color: 'var(--text-primary)', opacity: 0.06, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>AKIB</span>
        </div>
      </footer>

    </div>
  );
}
