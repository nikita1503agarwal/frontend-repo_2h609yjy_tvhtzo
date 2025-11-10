import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Bot, Gamepad2, Shirt, Trophy } from 'lucide-react';

const projects = [
  {
    title: 'Encryption & Authentication System',
    icon: Shield,
    desc: 'Secure credential flow with encryption layers and token-based access. Built to explore cryptography and identity systems.',
    tags: ['Crypto', 'Security', 'Auth'],
  },
  {
    title: 'AI Receptionist Voice Bot',
    icon: Bot,
    desc: 'Voice-driven hospital receptionist assistant for routing, FAQs, and appointment triage with natural conversation.',
    tags: ['AI', 'Speech', 'NLP'],
  },
  {
    title: 'Free Fire Tournament Tracker',
    icon: Gamepad2,
    desc: 'Excel automation to track teams, scores, and leaderboards with transparent rankings and reports.',
    tags: ['Automation', 'Excel', 'Tracker'],
  },
  {
    title: '3D AR Fashion Model Portal (Idea)',
    icon: Shirt,
    desc: 'Concept for an immersive AR try-on experience with live lighting and fabric simulation.',
    tags: ['AR', '3D', 'UX'],
  },
  {
    title: 'Internal Hackathon (Coordinator)',
    icon: Trophy,
    desc: 'Led coordination, mentorship, and judging flows to foster innovation and teamwork.',
    tags: ['Leadership', 'Events'],
  },
];

function ProjectCard({ title, icon: Icon, desc, tags }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition" />
      <div className="flex items-start gap-4" style={{ transform: 'translateZ(20px)' }}>
        <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-purple-600/40 to-blue-600/40 flex items-center justify-center shadow-inner shadow-purple-500/20 group-hover:scale-110 transition">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-white/75">{desc}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="text-[11px] rounded-full border border-white/15 bg-white/5 px-2 py-1 text-white/80">{t}</span>
            ))}
          </div>
        </div>
      </div>
      {/* 3D tilt shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.25), transparent 40%)' }} />
    </motion.div>
  );
}

export default function Projects3D() {
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100 + '%';
    const y = ((e.clientY - rect.top) / rect.height) * 100 + '%';
    el.style.setProperty('--x', x);
    el.style.setProperty('--y', y);
  };

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>
          <p className="mt-2 text-white/70">Hover to feel the depth. Cards flip, glow, and tilt with your cursor.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" onMouseMove={handleMouseMove}>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
