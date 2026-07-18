import { Briefcase, GraduationCap } from '@phosphor-icons/react';
import { Icon } from '../icons.jsx';
import { useReveal, useTilt, ACCENT } from '../useReveal.js';
import Seo from '../Seo.jsx';
import GallerySection from '../GallerySection.jsx';
import { TIMELINE_DATA, AI_FOCUS_DATA } from '../data';

function Timeline({ items, accentVar, register, rs, tiltHandlers, tiltStyle, idPrefix }) {
  return (
    <div style={{ position: 'relative', marginTop: 20 }}>
      <div className="__timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: `linear-gradient(180deg, color-mix(in srgb, ${accentVar} 60%, transparent), var(--surface-faint-4))`, transform: 'translateX(-50%)' }}></div>
      {items.map((item, i) => {
        const id = idPrefix + '-' + i;
        const left = i % 2 === 0;
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
              width: 12, height: 12, borderRadius: '50%', background: accentVar, boxShadow: `0 0 0 4px color-mix(in srgb, ${accentVar} 15%, transparent)`,
            }}></div>
            <div className="__timeline-card" {...tiltHandlers(id)} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 22, ...tiltStyle(id),
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 12, color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono',monospace" }}>{item.period}</span>
              </div>
              <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, color: 'var(--text-primary)' }}>{item.title}</div>
              <div style={{ fontSize: 14, color: accentVar, marginTop: 2, fontWeight: 600 }}>{item.org}</div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8, lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ExperiencePage() {
  const accent = ACCENT;
  const { revealed, register, rs } = useReveal();
  const { tiltHandlers, tiltStyle } = useTilt();

  const workItems = TIMELINE_DATA.filter((t) => t.type === 'WORK');
  const eduItems = TIMELINE_DATA.filter((t) => t.type === 'EDU');

  return (
    <>
      <Seo title="Experience & Education - Mohiuddin Ahmed Akib" description="Work history, education, and AI focus areas of Mohiuddin Ahmed Akib, AI Solution Developer at Daffodil Computers PLC and BSc Computer Science & Engineering graduate of Daffodil International University." />
      {/* ================= EXPERIENCE ================= */}
      <section id="experience" data-screen-label="Experience" style={{ position: 'relative', zIndex: 1, maxWidth: 1300, margin: '0 auto', padding: '160px 6% 40px' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12.5, color: accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', marginBottom: 14 }}>Journey</div>
          <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.12, margin: 0, letterSpacing: '-0.015em' }}>Experience &amp; education.</h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <Briefcase size={20} weight="bold" color="var(--accent)" />
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>Experience</h2>
        </div>
        <Timeline items={workItems} accentVar="var(--accent)" register={register} rs={rs} tiltHandlers={tiltHandlers} tiltStyle={tiltStyle} idPrefix="work" />
      </section>

      <section style={{ position: 'relative', zIndex: 1, maxWidth: 1300, margin: '0 auto', padding: '20px 6% 110px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <GraduationCap size={20} weight="bold" color="var(--edu-accent)" />
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>Education</h2>
        </div>
        <Timeline items={eduItems} accentVar="var(--edu-accent)" register={register} rs={rs} tiltHandlers={tiltHandlers} tiltStyle={tiltStyle} idPrefix="edu" />
      </section>

      {/* ================= AI FOCUS ================= */}
      <section id="ai-focus" data-screen-label="AI Focus" style={{ position: 'relative', zIndex: 1, maxWidth: 1300, margin: '0 auto', padding: '110px 6%' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12.5, color: accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', marginBottom: 14 }}>AI Focus</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.12, margin: 0, letterSpacing: '-0.015em' }}>Where I'm pointing the AI work</h2>
          <p style={{ fontSize: 15.5, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 18, maxWidth: 640 }}>From diagnostic imaging to internal HR tooling, the throughline is applying deep learning and LLMs to problems with real, verifiable ground truth.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {AI_FOCUS_DATA.map((a, i) => {
            const id = 'ai-' + i;
            return (
              <div key={id} data-reveal={id} ref={register} className="__ai-card" {...tiltHandlers(id)} style={{ padding: 26, borderRadius: 18, background: 'var(--surface-soft)', border: '1px solid var(--border)', opacity: rs(id, i * 0.06).opacity, ...tiltStyle(id, `translateY(${revealed[id] ? '0' : '30px'})`) }}>
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

      <GallerySection accent={accent} register={register} revealed={revealed} eyebrow="Proof of Work" />
    </>
  );
}
