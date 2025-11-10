import React from 'react';
import { motion } from 'framer-motion';
import { User, Brain, Code, Mic2, LineChart } from 'lucide-react';

const skills = [
  { name: 'Python', level: 90, icon: Code },
  { name: 'AI / ML', level: 85, icon: Brain },
  { name: 'Web Dev', level: 80, icon: Code },
  { name: 'Data Science', level: 78, icon: LineChart },
  { name: 'Leadership', level: 88, icon: User },
  { name: 'Public Speaking', level: 84, icon: Mic2 },
];

export default function AboutSkills3D() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {/* About Me rotating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group perspective"
          >
            <div className="relative h-full">
              <div className="[transform-style:preserve-3d] transition-transform duration-700 group-hover:rotate-y-6">
                <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-xl [transform:translateZ(20px)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                      <User className="h-4 w-4" /> About Me
                    </div>
                    <h2 className="mt-4 text-2xl md:text-3xl font-bold">Curious mind, creative builder.</h2>
                    <p className="mt-3 text-white/80 leading-relaxed">
                      A 2nd-year CSE student passionate about AI, building projects that blend creativity and technology, and aspiring to become an IAS officer. I love organizing hackathons and crafting immersive tech experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills 3D bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur overflow-hidden group"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-600/40 to-blue-600/40 flex items-center justify-center shadow-inner shadow-purple-500/20">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-white/70">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
