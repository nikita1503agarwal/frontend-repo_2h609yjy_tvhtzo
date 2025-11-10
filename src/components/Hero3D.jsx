import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [0, 1], [6, -6]);
  const rotateY = useTransform(mx, [0, 1], [-6, 6]);

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      mx.set(e.clientX / w);
      my.set(e.clientY / h);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mx, my]);

  return (
    <section id="home" className="relative h-[85vh] md:h-screen w-full flex items-center justify-center">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle gradient overlay that doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0b10]/10 via-transparent to-[#0a0b10]" />
      </div>

      {/* Foreground content */}
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur px-4 py-2 border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.25)]"
        >
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs md:text-sm tracking-wider text-white/80">Futuristic Portfolio • 3D Experience</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
          className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-fuchsia-300 drop-shadow">👋 Hi, I’m Baby</span>
          <span className="mt-3 block text-lg md:text-2xl text-white/80">CSE Student • AI Enthusiast • Project Builder • Hackathon Organizer</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-500/40 transition-transform hover:-translate-y-0.5"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur px-5 py-3 text-sm font-semibold hover:border-white/25 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Cursor glow */}
        <motion.div
          className="pointer-events-none fixed top-0 left-0 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"
          style={{ x: useTransform(mx, [0, 1], [0, window.innerWidth - 160]), y: useTransform(my, [0, 1], [0, window.innerHeight - 160]) }}
        />
      </motion.div>
    </section>
  );
}
