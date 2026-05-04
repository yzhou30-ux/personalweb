'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const experience = [
  {
    period: '2024 – Present',
    role: 'Graduate Student',
    org: 'Design & Technology',
    note: 'Exploring HCI, creative coding, and interactive systems',
  },
  {
    period: '2021 – 2023',
    role: 'Industrial Designer & Illustrator',
    org: 'Freelance',
    note: 'Product design, packaging illustration, brand identity',
  },
  {
    period: '2018 – 2022',
    role: 'BFA Industrial Design',
    org: 'Undergraduate',
    note: 'Product design, exhibition design, digital illustration',
  },
];

const skills = [
  'Industrial Design',
  'UX / Interaction Design',
  'Digital Illustration',
  'Packaging Design',
  'Creative Coding',
  'Rhino / SolidWorks',
  'Figma / Adobe Suite',
  'React / Next.js',
  'Blender / KeyShot',
  'Procreate / Photoshop',
];

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      <div className="pt-28 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Left — intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <h1 className="text-display text-5xl md:text-6xl tracking-wide mb-8">
              About
            </h1>

            <div className="space-y-5 text-sm text-charcoal leading-[1.8] max-w-2xl">
              <p>
                I&apos;m Yewen — a designer and illustrator working across
                industrial design, digital art, and interactive media. I believe
                that good design lives where craft meets curiosity.
              </p>
              <p>
                My background in industrial design trained me to think in
                materials, ergonomics, and user behavior. My illustration
                practice keeps me rooted in visual storytelling — from ancient
                Chinese fantasy landscapes to playful packaging concepts.
              </p>
              <p>
                Currently, I&apos;m exploring how creative coding and generative
                systems can extend the designer&apos;s toolkit, bridging the
                physical and digital worlds.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-12">
              <h2 className="text-xs uppercase tracking-[0.2em] text-warm-700 mb-4">
                Skills & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] uppercase tracking-wider text-charcoal border border-warm-200 rounded-full px-4 py-1.5 hover:bg-warm-50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — experience timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h2 className="text-xs uppercase tracking-[0.2em] text-warm-700 mb-8">
              Experience
            </h2>

            <div className="space-y-0">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-6 pb-10 border-l border-warm-200 last:pb-0">
                  <div className="absolute left-[-4.5px] top-[6px] w-[9px] h-[9px] rounded-full border-2 border-warm-400 bg-cream" />
                  <span className="text-[11px] font-mono text-warm-700 block mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-sm font-medium text-charcoal">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-slate">{exp.org}</span>
                  <p className="text-xs text-slate/80 mt-1 leading-relaxed">
                    {exp.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-6 bg-warm-50 rounded-xl">
              <h3 className="text-display text-xl tracking-wide mb-3">
                Get in touch
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-4">
                I&apos;m open to design roles, freelance illustration, and
                research collaborations.
              </p>
              <a
                href="mailto:yewen@example.com"
                className="inline-flex items-center gap-2 text-sm text-warm-700 hover:text-warm-800 transition-colors"
              >
                yewen@example.com
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
