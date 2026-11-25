import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from '@phosphor-icons/react';
import Seo from '../Seo.jsx';
import { CONTACT_LINKS, PROJECTS_DATA, TIMELINE_DATA } from '../data';

const education = TIMELINE_DATA.find((item) => item.type === 'EDU');
const experience = TIMELINE_DATA.find((item) => item.title === 'AI Solution Developer');

const LINK_GROUPS = [
  {
    title: 'Personal details',
    items: [
      { label: 'Name', value: 'Mohiuddin Ahmed Akib' },
      ...CONTACT_LINKS.filter((item) => ['Email', 'WhatsApp', 'LinkedIn', 'GitHub', 'Facebook'].includes(item.label)).map((item) => ({
        label: item.label === 'WhatsApp' ? 'Phone number' : item.label,
        value: ['Email', 'WhatsApp'].includes(item.label) ? item.value : item.href,
        href: item.label === 'WhatsApp' ? `tel:${item.value.replace(/\s/g, '')}` : item.href,
      })),
      { label: 'Portfolio', value: 'https://mohi-uddin.dev', href: 'https://mohi-uddin.dev' },
    ],
  },
  {
    title: 'Education',
    items: [
      { label: 'University', value: 'Daffodil International University' },
      { label: 'Degree', value: education.title },
      { label: 'Year', value: education.period },
      { label: 'CGPA', value: '3.54/4.0' },
    ],
  },
  {
    title: 'Experience',
    items: [
      { label: 'Role', value: experience.title },
      { label: 'Company', value: experience.org },
      { label: 'Time', value: experience.period },
    ],
  },
  {
    title: 'Projects',
    items: ['aihr', 'rookiesdnmco', 'subtext'].map((id) => {
      const project = PROJECTS_DATA.find((item) => item.id === id);
      return { label: `${project.title} project URL`, value: project.liveUrl, href: project.liveUrl };
    }),
  },
  {
    title: 'Resume',
    items: [{ label: 'Resume link', value: 'https://mohi-uddin.dev/Resume-Mohiuddin-Ahmed.pdf', href: 'https://mohi-uddin.dev/Resume-Mohiuddin-Ahmed.pdf' }],
  },
];

function CopyRow({ label, value, href }) {
  const [status, setStatus] = useState('idle');
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const copyValue = async () => {
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(value);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
    resetTimer.current = setTimeout(() => setStatus('idle'), 2500);
  };

  const copied = status === 'copied';

  return (
    <li className="__links-row">
      <div className="__links-detail">
        <div className="__links-label">{label}</div>
        <div className="__links-value">
          {href ? <a href={href} target={href.startsWith('https:') ? '_blank' : undefined} rel="noreferrer">{value}</a> : value}
        </div>
        {status === 'error' && <p className="__links-error" role="status">Couldn't copy. Select the text and copy it manually.</p>}
      </div>
      <button type="button" onClick={copyValue} className="__links-copy" aria-label={`Copy ${label}`} data-copied={copied}>
        {copied ? <Check size={16} weight="bold" aria-hidden="true" /> : <Copy size={16} weight="bold" aria-hidden="true" />}
        <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </li>
  );
}

export default function LinksPage() {
  return (
    <>
      <Seo title="Links - Mohiuddin Ahmed Akib" description="Contact details, education, experience, project links, and resume for Mohiuddin Ahmed Akib. Copy any detail in one click." />
      <main className="__links-page" data-screen-label="Links">
        <header className="__links-header">
          <h1>Links &amp; details.</h1>
          <p>Contact details, education, experience, and project links. Copy what you need.</p>
        </header>
        {LINK_GROUPS.map((group) => (
          <section key={group.title} className="__links-group" aria-label={group.title}>
            <h2>{group.title}</h2>
            <ul className="__links-list">
              {group.items.map((item) => <CopyRow key={item.label} {...item} />)}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}
