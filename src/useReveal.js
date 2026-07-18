import { useEffect, useRef, useState, useCallback } from 'react';

export function useReveal() {
  const [revealed, setRevealed] = useState({});
  const onIntersect = useRef(null);

  const ioRef = useRef(null);
  if (!ioRef.current) {
    ioRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-reveal');
            if (id) {
              setRevealed((r) => (r[id] ? r : { ...r, [id]: true }));
              if (onIntersect.current) onIntersect.current(id);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );
  }

  useEffect(() => () => ioRef.current && ioRef.current.disconnect(), []);

  const register = useCallback((el) => {
    if (el && ioRef.current) ioRef.current.observe(el);
  }, []);

  const setOnIntersect = useCallback((fn) => { onIntersect.current = fn; }, []);

  const rs = useCallback((id, delay = 0) => {
    const isRevealed = !!revealed[id];
    return {
      opacity: isRevealed ? 1 : 0,
      transform: isRevealed ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
      transition: `opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}s`,
    };
  }, [revealed]);

  return { revealed, register, rs, setOnIntersect };
}

export function useTilt() {
  const [tiltMap, setTiltMap] = useState({});

  const getTilt = useCallback((id) => tiltMap[id] || { rx: 0, ry: 0 }, [tiltMap]);

  const tiltHandlers = useCallback((id) => ({
    onMouseMove: (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setTiltMap((tm) => ({ ...tm, [id]: { rx: py * -8, ry: px * 8 } }));
    },
    onMouseLeave: () => setTiltMap((tm) => ({ ...tm, [id]: { rx: 0, ry: 0 } })),
  }), []);

  const tiltStyle = useCallback((id, extraTransform = '') => {
    const tilt = getTilt(id);
    return {
      transformStyle: 'preserve-3d',
      transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) ${extraTransform}`,
      transition: 'transform 0.15s ease-out, box-shadow 0.3s',
      boxShadow: (tilt.rx || tilt.ry) ? '0 20px 40px rgba(0,0,0,0.4)' : '0 8px 20px rgba(0,0,0,0.2)',
    };
  }, [getTilt]);

  return { tiltHandlers, tiltStyle, getTilt };
}

export const ACCENT = 'var(--accent)';
