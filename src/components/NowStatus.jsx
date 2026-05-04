'use client';

import { motion } from 'framer-motion';

const nowItems = [
  {
    emoji: '📍',
    label: 'Location',
    value: 'Seattle, WA',
  },
  {
    emoji: '🎓',
    label: 'Currently',
    value: 'Graduate studies in design & technology',
  },
  {
    emoji: '🔧',
    label: 'Working on',
    value: 'This portfolio & generative art experiments',
  },
  {
    emoji: '📖',
    label: 'Reading',
    value: 'Designing Design — Kenya Hara',
  },
  {
    emoji: '🎵',
    label: 'Listening',
    value: 'Lo-fi & ambient soundscapes',
  },
];

const bookmarks = [
  { title: 'Cargo.site — Design templates', url: '#' },
  { title: 'Awwwards — Portfolio inspiration', url: '#' },
  { title: 'Three.js Journey — Creative coding', url: '#' },
];

export default function NowStatus() {
  return (
    <section id="now" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <h2 className="text-display text-[36px] md:text-[48px] tracking-wide">Now</h2>
          <span className="text-[11px] text-[#5A5550] font-mono ml-auto">
            Updated May 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Status items */}
          <div className="md:col-span-2 space-y-1">
            {nowItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 py-4 border-b border-warm-100 group"
              >
                <span className="text-lg mt-0.5">{item.emoji}</span>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-warm-700 font-medium w-28 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-[14px] text-[#3a3a3a]">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bookmarks / Inspiration */}
          <div className="bg-warm-50 rounded-xl p-6">
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
                  className="block text-sm text-charcoal hover:text-warm-500 transition-colors leading-relaxed"
                >
                  ↗ {bm.title}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
