import { useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { useReveal, ACCENT } from '../useReveal.js';
import Seo from '../Seo.jsx';
import { PROJECTS_DATA, PROJECT_FILTERS, FILTER_LABELS } from '../data';

export default function ProjectsPage() {
  const accent = ACCENT;
  const { revealed, register } = useReveal();
  const [projectFilter, setProjectFilter] = useState('all');
  const [projectsShown, setProjectsShown] = useState(6);
  const [tiltMap, setTiltMap] = useState({});

  const filteredProjects = projectFilter === 'all' ? PROJECTS_DATA : PROJECTS_DATA.filter((p) => p.category === projectFilter);
  const visibleProjects = filteredProjects.slice(0, projectsShown);
  const hasMoreProjects = projectsShown < filteredProjects.length;

  return (
    <>
    <Seo title="Projects - Mohiuddin Ahmed Akib" description="Selected projects by Mohiuddin Ahmed Akib spanning AI/ML, full-stack web apps, and embedded systems, including AIHR, Barighor, Subtext, and a gallbladder cancer detection deep-learning ensemble." />
    <section data-screen-label="Projects" style={{ position: 'relative', zIndex: 1, maxWidth: 1300, margin: '0 auto', padding: '160px 6% 110px' }}>
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 12.5, color: accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', marginBottom: 14 }}>Selected Work</div>
        <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.12, margin: 0, letterSpacing: '-0.015em' }}>Projects worth reading the README for.</h1>
        <div style={{ display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap' }}>
          {PROJECT_FILTERS.map((f) => (
            <button key={f} onClick={() => { setProjectFilter(f); setProjectsShown(6); }} className="__filter-btn" style={{
              padding: '7px 16px', borderRadius: 100, fontSize: 13,
              border: `1px solid ${projectFilter === f ? accent : 'var(--border-strong)'}`,
              background: projectFilter === f ? 'rgba(59,130,246,0.12)' : 'transparent',
              color: projectFilter === f ? 'var(--text-primary)' : 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}>{FILTER_LABELS[f]}</button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 26, gridAutoRows: '1fr' }}>
        {visibleProjects.map((p, i) => {
          const id = 'proj-' + p.id;
          const tilt = tiltMap[p.id] || { rx: 0, ry: 0 };
          const isRevealed = !!revealed[id];
          return (
            <div key={p.id} className="__project-card" data-reveal={id} ref={register}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width - 0.5;
                const py = (e.clientY - rect.top) / rect.height - 0.5;
                setTiltMap((tm) => ({ ...tm, [p.id]: { rx: py * -8, ry: px * 8 } }));
              }}
              onMouseLeave={() => setTiltMap((tm) => ({ ...tm, [p.id]: { rx: 0, ry: 0 } }))}
              style={{
                background: 'linear-gradient(180deg, var(--surface-strong), var(--surface-soft))',
                border: '1px solid var(--border)', borderRadius: 18, overflow: 'hidden', cursor: 'pointer',
                transformStyle: 'preserve-3d', display: 'flex', flexDirection: 'column', height: '100%',
                transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateY(${isRevealed ? '0' : '30px'})`,
                transition: 'transform 0.15s ease-out, box-shadow 0.3s, opacity 0.8s cubic-bezier(.16,1,.3,1) ' + (i * 0.06) + 's',
                opacity: isRevealed ? 1 : 0,
                boxShadow: (tilt.rx || tilt.ry) ? '0 20px 40px rgba(0,0,0,0.4)' : '0 8px 20px rgba(0,0,0,0.2)',
              }}>
              <div style={{ height: 160, flexShrink: 0, position: 'relative', background: 'repeating-linear-gradient(135deg, rgba(59,130,246,0.06) 0px, rgba(59,130,246,0.06) 2px, transparent 2px, transparent 14px), var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-soft)' }}>
                <img src={p.image} alt={p.title} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }} />
                <span style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: 'var(--text-quaternary)', letterSpacing: '0.04em', textAlign: 'center', padding: '0 14px' }}>{p.title.toUpperCase()} PREVIEW</span>
              </div>
              <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>{p.title}</div>
                <p style={{ fontSize: 13.5, color: 'var(--text-secondary)', margin: '10px 0 14px', lineHeight: 1.6, flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {p.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 100, background: 'rgba(59,130,246,0.08)', color: 'var(--accent-lighter)', border: '1px solid rgba(59,130,246,0.18)' }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 14, marginTop: 'auto' }}>
                  {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: 'var(--accent-light)', textDecoration: 'none', fontWeight: 700 }}>GitHub <ArrowRight size={12} weight="bold" style={{ transform: 'rotate(-45deg)', display: 'inline', verticalAlign: 'middle' }} /></a>}
                  {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: 'var(--accent-light)', textDecoration: 'none', fontWeight: 700 }}>Live <ArrowRight size={12} weight="bold" style={{ transform: 'rotate(-45deg)', display: 'inline', verticalAlign: 'middle' }} /></a>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {hasMoreProjects && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <button onClick={() => setProjectsShown((n) => n + 6)} className="__cta-secondary" style={{ background: 'var(--surface-faint-4)', color: 'var(--text-primary)', padding: '13px 30px', borderRadius: 100, fontSize: 14.5, fontWeight: 700, border: '1px solid var(--border-stronger)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease', fontFamily: "'Inter',sans-serif" }}>
            Load More <ArrowRight size={16} weight="bold" style={{ transform: 'rotate(90deg)' }} />
          </button>
        </div>
      )}
    </section>
    </>
  );
}
