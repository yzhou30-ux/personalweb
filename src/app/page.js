'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MeshGradient from '@/components/MeshGradient';
import VideoLoop from '@/components/VideoLoop';
import ProjectCard from '@/components/ProjectCard';
import IllustrationStrip from '@/components/IllustrationStrip';
import NowStatus from '@/components/NowStatus';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'ElfinBOX',
    category: 'UX / Education Design',
    description:
      'An educational kit designed to engage middle school students in coding and STEM concepts through multi-media storytelling, tabletop gameplay, and Micro:Bit coding. Collaborated with NYC First to redesign their STEM education product.',
    image: '/images/projects/elfinbox-1.png',
    tags: ['UX Research', 'Product Design', 'Education'],
    href: '/projects/elfinbox',
  },
  {
    title: 'PYLE — Pill Dispenser',
    category: 'Industrial Design',
    description:
      'A pill container and dispenser designed for the Snoozle brand, helping users with ADHD build routines. Features a transparent body for visual cues and a portable container that doubles as the cap.',
    image: '/images/projects/old-site.png',
    tags: ['Product', '3D Printing', 'Brand'],
    href: '/projects/pyle',
  },
  {
    title: 'Pizza Hut × Next Design',
    category: 'Illustration / Packaging',
    description:
      'Award-winning pizza box illustration for Pizza Hut, featured in Next Design Awards 2021. A vibrant, flowing composition celebrating the joy of sharing food.',
    image: '/images/projects/pizza-hut-box.jpg',
    tags: ['Illustration', 'Packaging', 'Award'],
    href: '#',
  },
];

export default function HomePage() {
  return (
    <main>
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="relative h-screen flex items-end pb-20 md:pb-24 overflow-hidden bg-[#FAF7F2]">
        {/* Layer 1: animated gradient blobs */}
        <MeshGradient />

        {/* Layer 2: seamless video crossfade loop */}
        <VideoLoop
          src="/images/gradient-loop.mp4"
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ opacity: 0.15, mixBlendMode: 'multiply' }}
        />

        {/* Layer 3: watercolor texture */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            backgroundImage: 'url(/images/hero-bg-1.jpg)',
            backgroundSize: '60vw auto',
            backgroundPosition: 'top left',
            backgroundRepeat: 'no-repeat',
            opacity: 0.06,
            mixBlendMode: 'multiply',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-[0.9]">
              YEWEN
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8"
          >
            <p className="text-[14px] uppercase tracking-[0.12em] text-[#595350]">
              Design · Illustration · Exploration
            </p>
            <div className="hidden sm:block w-16 h-[1px] bg-warm-300" />
            <p className="text-[14px] text-[#595350]">
              Crafting at the intersection of physical and digital
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute right-6 md:right-12 bottom-0 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate -rotate-90 origin-center translate-y-[-20px]">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-[1px] h-8 bg-warm-300"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED WORK ─── */}
      <section id="work" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[12px] uppercase tracking-[0.18em] text-warm-700 font-mono font-medium">
            01
          </span>
          <h2 className="text-display text-[36px] md:text-[48px] tracking-wide mt-2">
            Selected Work
          </h2>
        </motion.div>

        <div className="divide-y divide-warm-100">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ─── ILLUSTRATION STRIP ─── */}
      <IllustrationStrip />

      {/* ─── NOW STATUS ─── */}
      <NowStatus />

      {/* ─── FOOTER ─── */}
      <Footer />
    </main>
  );
}
