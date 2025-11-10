import React from 'react';
import Hero3D from './components/Hero3D.jsx';
import AboutSkills3D from './components/AboutSkills3D.jsx';
import Projects3D from './components/Projects3D.jsx';
import Contact3D from './components/Contact3D.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b10] text-white overflow-x-hidden selection:bg-purple-600/40 selection:text-white">
      {/* Glow background accents */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>

      <Hero3D />
      <AboutSkills3D />
      <Projects3D />
      <Contact3D />

      <footer className="py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Baby — Crafted with passion and imagination.
      </footer>
    </div>
  );
}
