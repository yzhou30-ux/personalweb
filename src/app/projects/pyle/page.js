'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7 },
};

export default function PylePage() {
  return (
    <main className="bg-[#FAF7F2]">
      <Navigation />

      {/* ─── Header ─── */}
      <section className="pt-[160px] pb-16 px-6 md:px-12 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-display text-[72px] md:text-[100px] tracking-wider leading-none text-charcoal">
            PYLE
          </h1>
          <p className="mt-4 text-[15px] text-[#595350] max-w-lg leading-[1.75]">
            A pill container and dispenser for people with ADHD — designed to make
            the ritual of medication feel calm, not clinical.
          </p>
          <p className="mt-3 text-[12px] italic text-slate/70">
            Industrial Design · Snoozle Brand · 2023
          </p>
        </motion.div>
      </section>

      {/* ─── Full-width hero image ─── */}
      <motion.div {...fadeUp} className="w-full aspect-[16/7] bg-[#e8e4df]" />

      {/* ─── Two-column: concept + detail ─── */}
      <section className="py-16 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div {...fadeUp} className="aspect-[4/3] bg-[#e8e4df]" />
        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="aspect-[4/3] bg-[#e8e4df]" />
      </section>

      {/* ─── Text block — brief ─── */}
      <motion.section
        {...fadeUp}
        className="py-16 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        <div>
          <span className="text-[11px] uppercase tracking-[0.18em] text-warm-700 font-mono block mb-3">
            Brief
          </span>
          <p className="text-[13px] text-[#595350] leading-[1.8]">
            Design a daily medication container that fits seamlessly into a user&apos;s
            routine, targeting adults with ADHD who struggle with inconsistent habits.
          </p>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-[0.18em] text-warm-700 font-mono block mb-3">
            Approach
          </span>
          <p className="text-[13px] text-[#595350] leading-[1.8]">
            Transparent body for passive visual reminders. A portable top-cap that
            doubles as a carry container. Tactile snap feedback to reinforce the habit loop.
          </p>
        </div>
        <div>
          <span className="text-[11px] uppercase tracking-[0.18em] text-warm-700 font-mono block mb-3">
            Materials
          </span>
          <p className="text-[13px] text-[#595350] leading-[1.8]">
            Matte SLA prototype, food-safe PETG, silicone gasket. Rendered in
            KeyShot with a warm neutral palette matching the Snoozle brand identity.
          </p>
        </div>
      </motion.section>

      {/* ─── Full-width image 2 ─── */}
      <motion.div {...fadeUp} className="w-full aspect-[16/9] bg-[#dedad5]" />

      {/* ─── Sketches / process row ─── */}
      <section className="py-16 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div {...fadeUp} className="aspect-square bg-[#e8e4df]" />
        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="aspect-square bg-[#e8e4df]" />
        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }} className="aspect-square bg-[#e8e4df]" />
      </section>

      {/* ─── Wide image — detail / lifestyle ─── */}
      <motion.div {...fadeUp} className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="w-full aspect-[3/1] bg-[#dedad5]" />
      </motion.div>

      {/* ─── Asymmetric pair ─── */}
      <section className="py-16 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <motion.div {...fadeUp} className="md:col-span-3 aspect-[4/3] bg-[#e8e4df]" />
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-2 flex flex-col gap-4"
        >
          <p className="text-[13px] text-[#595350] leading-[1.9]">
            The detachable cap holds a single day&apos;s dose — small enough for a
            pocket or bag. When snapped back, it signals the dispenser is &quot;loaded&quot;
            and ready for the next evening reset.
          </p>
          <p className="text-[13px] text-[#595350] leading-[1.9]">
            The transparent chamber turns a usually-hidden action into a quiet,
            ambient reminder visible on any countertop.
          </p>
        </motion.div>
      </section>

      {/* ─── Final full-width image ─── */}
      <motion.div {...fadeUp} className="w-full aspect-[21/9] bg-[#cac5be]" />

      {/* ─── Next project nav ─── */}
      <motion.section
        {...fadeUp}
        className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto flex items-center justify-between border-t border-warm-100 mt-12"
      >
        <span className="text-[11px] uppercase tracking-[0.18em] text-slate font-mono">
          Next project
        </span>
        <Link
          href="/projects/elfinbox"
          className="group flex items-center gap-3 text-display text-[28px] md:text-[40px] tracking-wide text-charcoal hover:text-warm-700 transition-colors"
        >
          ElfinBOX
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform group-hover:translate-x-1 mt-1"
          >
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </motion.section>

      <Footer />
    </main>
  );
}
