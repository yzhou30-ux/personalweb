'use client';

import { motion } from 'framer-motion';

// ─── Swap this path to replace the background image manually ───
const nowBgImage = '/images/now/May4.jpg';

const logEntries = [
  { date: 'May 2026', text: 'Frontend design, practice with AI' },
  { date: 'Apr 2026', text: 'Spring quarter, illustration commissions' },
  { date: 'Mar 2026', text: "Winter quarter final, sketching UW's cherry blossom" },
];

const statusItems = [
  { emoji: '📖', label: 'Reading', value: '额尔古纳河右岸 — 迟子建' },
  { emoji: '🎵', label: 'Listening', value: '告死鸟 — ilem' },
];

const bookmarks = [
  { title: 'Cargo.site — Design templates', url: '#' },
  { title: 'Awwwards — Portfolio inspiration', url: '#' },
  { title: 'Three.js Journey — Creative coding', url: '#' },
];

const glassLeft = {
  background: 'rgba(40, 40, 40, 0.35)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderRadius: '12px',
  padding: '2rem',
  maxWidth: '620px',
};

const glassRight = {
  background: 'rgba(40, 40, 40, 0.35)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderRadius: '12px',
  padding: '2rem',
  maxWidth: '320px',
  marginLeft: 'auto',
  marginRight: '0',
};

export default function NowStatus() {
  return (
    <section id="now" className="relative py-24 bg-[#2a2a2a]">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${nowBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.55,
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <h2 className="text-display text-[36px] md:text-[48px] tracking-wide text-white">Now</h2>
            <span className="text-[11px] text-white/60 font-mono ml-auto">
              Updated May 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left panel — log + status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2"
              style={glassLeft}
            >
              {/* Location line */}
              <p className="text-[13px] mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                📍 Seattle, WA · Graduate studies in design & technology
              </p>

              {/* Activity log */}
              <div>
                {logEntries.map((entry, i) => (
                  <motion.div
                    key={entry.date}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 py-4 border-b last:border-0"
                    style={{ borderColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <span className="text-[11px] font-mono font-bold shrink-0 w-20" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {entry.date}
                    </span>
                    <span className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      {entry.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Separator */}
              <div className="my-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.15)' }} />

              {/* Reading / Listening */}
              <div className="space-y-3">
                {statusItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-base leading-none">{item.emoji}</span>
                    <span className="text-[11px] uppercase tracking-[0.15em] text-warm-700 font-medium w-20 shrink-0">
                      {item.label}
                    </span>
                    <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.9)' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right panel — Bookmarks (unchanged) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={glassRight}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-warm-700 mb-6">
                Bookmarks
              </h3>
              <div className="space-y-4">
                {bookmarks.map((bm, i) => (
                  <motion.a
                    key={bm.title}
                    href={bm.url}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="block text-sm leading-relaxed transition-colors"
                    style={{ color: 'rgba(255,255,255,0.9)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(245,166,35,0.9)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                  >
                    ↗ {bm.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
