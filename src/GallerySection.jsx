import { useState } from 'react';
import { PlayCircle, X } from '@phosphor-icons/react';
import { Icon } from './icons.jsx';
import { GALLERY_DATA, GALLERY_ROWS, GALLERY_TYPE_ICONS } from './data';
import { useTilt } from './useReveal.js';

export default function GallerySection({ accent, register, revealed, eyebrow = 'Proof of Work' }) {
  const [lightboxCategory, setLightboxCategory] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const { tiltHandlers, tiltStyle } = useTilt();

  const galleryByType = (type) => GALLERY_DATA.filter((g) => g.type === type);
  const lightboxItems = lightboxCategory ? galleryByType(lightboxCategory) : [];
  const lightboxRow = GALLERY_ROWS.find((r) => r.type === lightboxCategory);

  return (
    <>
      <section id="gallery" data-screen-label="Gallery" style={{ position: 'relative', zIndex: 1, maxWidth: 1300, margin: '0 auto', padding: '110px 6%' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12.5, color: accent, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.1em', marginBottom: 14 }}>{eyebrow}</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(30px,4.4vw,48px)', fontWeight: 800, lineHeight: 1.12, margin: 0, letterSpacing: '-0.015em' }}>Certificates, competitions &amp; creative work.</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {GALLERY_ROWS.map((row, ri) => {
            const items = galleryByType(row.type);
            const id = 'gallery-row-' + row.type;
            const isRevealed = !!revealed[id];
            const stackItems = items.slice(0, 3);
            const isEmpty = items.length === 0;
            return (
              <button key={row.type} data-reveal={id} ref={register}
                onClick={() => !isEmpty && setLightboxCategory(row.type)}
                className="__gallery-row"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap',
                  padding: '26px 28px', borderRadius: 20, background: 'var(--surface)', border: '1px solid var(--border)',
                  textAlign: 'left', cursor: isEmpty ? 'default' : 'pointer', width: '100%', fontFamily: 'inherit',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, opacity 0.7s cubic-bezier(.16,1,.3,1) ' + (ri * 0.08) + 's',
                  opacity: isRevealed ? 1 : 0, transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, minWidth: 0 }}>
                  <span style={{ width: 46, height: 46, borderRadius: 12, background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={GALLERY_TYPE_ICONS[row.type]} size={22} weight="bold" color="var(--accent-light)" />
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 19, fontWeight: 700, color: 'var(--text-primary)' }}>{row.label}</div>
                    <div style={{ fontSize: 13.5, color: 'var(--text-secondary)', marginTop: 3 }}>{isEmpty ? 'Coming soon' : row.desc}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
                  {!isEmpty && (
                    <div style={{ position: 'relative', width: 118, height: 78 }}>
                      {stackItems.map((g, i) => {
                        const rot = [-8, 4, -3][i] || 0;
                        const offset = i * 16;
                        return (
                          <div key={g.title + i} style={{
                            position: 'absolute', left: offset, top: 0, width: 78, height: 78, borderRadius: 12,
                            border: '2px solid var(--bg)', overflow: 'hidden', boxShadow: '0 8px 18px rgba(0,0,0,0.3)',
                            transform: `rotate(${rot}deg)`, zIndex: stackItems.length - i,
                            background: 'var(--bg-elevated)',
                          }}>
                            <img src={g.image} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              onError={(e) => { e.currentTarget.style.opacity = 0; }} />
                            {g.type === 'video' && (
                              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
                                <PlayCircle size={22} weight="fill" color="rgba(255,255,255,0.9)" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                    <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono',monospace", color: 'var(--text-tertiary)' }}>{items.length ? items.length + (items.length === 1 ? ' item' : ' items') : '0 items'}</span>
                    {!isEmpty && <span style={{ fontSize: 13, color: 'var(--accent-light)', fontWeight: 700 }}>View all</span>}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {lightboxCategory && (
        <div onClick={() => setLightboxCategory(null)} style={{ position: 'fixed', inset: 0, zIndex: 9995, background: 'var(--nav-bg)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6vh 6%' }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: 1100, maxHeight: '88vh', overflowY: 'auto', background: 'var(--bg-elevated)', border: '1px solid var(--border-strong)', borderRadius: 20, boxShadow: '0 40px 100px rgba(0,0,0,0.6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, background: 'var(--bg-elevated)', zIndex: 1 }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 19, fontWeight: 700, color: 'var(--text-primary)' }}>{lightboxRow?.label}</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 2 }}>{lightboxRow?.desc}</div>
              </div>
              <button onClick={() => setLightboxCategory(null)} aria-label="Close" style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--surface-faint-4)', border: '1px solid var(--border-strong)', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
                <X size={16} weight="bold" />
              </button>
            </div>
            {lightboxCategory === 'competition' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20, padding: 24 }}>
                {lightboxItems.map((g, i) => (
                  <button key={g.title + i} onClick={() => setZoomedImage(g)} className="__gallery-zoomable" style={{ borderRadius: 16, overflow: 'hidden', background: 'var(--bg-elevated)', border: 'none', padding: 0, cursor: 'zoom-in', display: 'block', width: '100%' }}>
                    <img src={g.image} alt={g.title} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </button>
                ))}
              </div>
            ) : lightboxCategory === 'design' ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16, padding: 24 }}>
                {lightboxItems.map((g, i) => (
                  <button key={g.title + i} onClick={() => setZoomedImage(g)} className="__gallery-zoomable" style={{ borderRadius: 14, overflow: 'hidden', background: 'var(--bg-elevated)', border: 'none', padding: 0, cursor: 'zoom-in', display: 'block', width: '100%' }}>
                    <img src={g.image} alt={g.title} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  </button>
                ))}
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20, padding: 24 }}>
                {lightboxItems.map((g, i) => {
                  const isVideo = !!g.videoUrl;
                  return (
                    <div key={g.title + i} className="__gallery-card" {...tiltHandlers('gc-' + i)} style={{
                      borderRadius: 16, overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--border)',
                      ...tiltStyle('gc-' + i),
                    }}>
                      {isVideo ? (
                        <a href={g.videoUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}>
                          <div style={{ height: 170, position: 'relative', background: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-soft)' }}>
                            <img src={g.image} alt={g.title} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                              onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.15)' }}>
                              <PlayCircle size={40} weight="fill" color="rgba(255,255,255,0.9)" />
                            </div>
                          </div>
                        </a>
                      ) : (
                        <button onClick={() => setZoomedImage(g)} className="__gallery-zoomable" style={{ border: 'none', padding: 0, width: '100%', display: 'block', cursor: 'zoom-in', background: 'transparent' }}>
                          <div style={{ height: 170, position: 'relative', background: 'var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-soft)' }}>
                            <img src={g.image} alt={g.title} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                              onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                          </div>
                        </button>
                      )}
                      <div style={{ padding: '16px 18px 18px' }}>
                        <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14.5, fontWeight: 700, color: 'var(--text-primary)' }}>{g.title}</div>
                        {g.org && <div style={{ fontSize: 12.5, color: 'var(--accent-light)', marginTop: 3 }}>{g.org}</div>}
                        {g.period && <div style={{ fontSize: 11.5, color: 'var(--text-tertiary)', marginTop: 2, fontFamily: "'JetBrains Mono',monospace" }}>{g.period}</div>}
                        {g.desc && <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', marginTop: 6, lineHeight: 1.5 }}>{g.desc}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {zoomedImage && (
        <div onClick={() => setZoomedImage(null)} style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4vh 4%', cursor: 'zoom-out' }}>
          <button onClick={() => setZoomedImage(null)} aria-label="Close" style={{ position: 'fixed', top: 24, right: 24, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 1 }}>
            <X size={20} weight="bold" />
          </button>
          <img src={zoomedImage.image} alt={zoomedImage.title} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '100%', maxHeight: '92vh', width: 'auto', height: 'auto', borderRadius: 8, boxShadow: '0 40px 100px rgba(0,0,0,0.7)', cursor: 'default' }} />
        </div>
      )}
    </>
  );
}
