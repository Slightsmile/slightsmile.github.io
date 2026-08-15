import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage.jsx'));

const PageFallback = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'var(--bg)' }}>
    <div style={{ width: 32, height: 32, border: '3px solid var(--border)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin360 0.7s linear infinite' }} />
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Suspense fallback={<PageFallback />}><HomePage /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={<PageFallback />}><ProjectsPage /></Suspense>} />
        <Route path="/experience" element={<Suspense fallback={<PageFallback />}><ExperiencePage /></Suspense>} />
      </Route>
    </Routes>
  );
}
