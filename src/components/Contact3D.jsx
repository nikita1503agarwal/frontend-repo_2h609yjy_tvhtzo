import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';

export default function Contact3D() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    // Simulate async send
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 1800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Let’s Connect</h2>
          <p className="mt-2 text-white/70">Have an idea, opportunity, or just want to say hi? Drop a message.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="grid gap-4 relative">
              <div>
                <label className="text-sm text-white/70">Your Name</label>
                <input className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 outline-none border border-white/10 focus:border-white/20" placeholder="Enter your name" required />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 outline-none border border-white/10 focus:border-white/20" placeholder="you@example.com" required />
              </div>
              <div>
                <label className="text-sm text-white/70">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg bg-white/10 px-3 py-2 outline-none border border-white/10 focus:border-white/20" placeholder="Write your message..." required />
              </div>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-500/40 transition"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {sending ? 'Sending...' : sent ? 'Sent!' : 'Send Message'}
                  <Send className={`h-4 w-4 transition-transform ${sending ? 'animate-pulse' : 'group-hover:translate-x-0.5'}`} />
                </span>
                <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />
              </motion.button>
            </div>
          </motion.form>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-xl"
          >
            <p className="text-white/80">Find me on</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <a href="mailto:someone@example.com" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                <MessageSquare className="h-5 w-5" />
                <span>Portfolio PDF</span>
              </a>
              <a href="https://discord.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                <MessageSquare className="h-5 w-5" />
                <span>Discord</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
