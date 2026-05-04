'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-warm-100 py-16 px-6 md:px-12 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
      >
        <div>
          <h2 className="text-display text-5xl md:text-7xl tracking-wide text-warm-700">
            Let&apos;s connect
          </h2>
          <p className="text-sm text-slate mt-4 max-w-md leading-relaxed">
            Open to collaboration, freelance, and new opportunities.
            Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          <a
            href="mailto:yzhou30@uw.edu"
            className="text-sm hover:text-warm-500 transition-colors line-accent"
          >
            yzhou30@uw.edu
          </a>
          <div className="flex gap-6 mt-2">
            <a href="#" className="text-xs uppercase tracking-[0.15em] text-slate hover:text-warm-500 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/yzhou30-ux" className="text-xs uppercase tracking-[0.15em] text-slate hover:text-warm-500 transition-colors">
              GitHub
            </a>
            <a href="https://www.instagram.com/a_lianyue?igsh=MTlhMXE0b2gyNGdtOA%3D%3D&utm_source=qr" className="text-xs uppercase tracking-[0.15em] text-slate hover:text-warm-500 transition-colors">
              Instagram
            </a>
          </div>
          <span className="text-[11px] text-slate/60 mt-4 font-mono">
            © {new Date().getFullYear()} Yewen. Crafted with care.
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
