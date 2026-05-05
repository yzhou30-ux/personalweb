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

function SectionNumber({ n }) {
  return (
    <div
      aria-hidden="true"
      className="absolute -top-8 left-0 text-[120px] leading-none font-display text-warm-100 select-none pointer-events-none"
      style={{ fontFamily: "'Bebas Neue', sans-serif", zIndex: 0 }}
    >
      {n}
    </div>
  );
}

function InsightBox({ children }) {
  return (
    <div className="border-l-2 border-warm-400 pl-5 py-1 my-6 bg-warm-50 rounded-r-lg">
      <p className="text-[13px] text-warm-700 leading-[1.8] italic">{children}</p>
    </div>
  );
}

export default function ElfinboxPage() {
  return (
    <main className="bg-[#FAF7F2]">
      <Navigation />

      {/* ─── Hero ─── */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden bg-[#2a2a2a]">
        {/* Placeholder hero image */}
        <div className="absolute inset-0 bg-[#3a3530]" />

        <div className="relative z-10 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-[11px] uppercase tracking-[0.2em] text-warm-400 font-mono block mb-4">
              UX / Education Design
            </span>
            <h1 className="text-display text-[64px] md:text-[96px] tracking-wider leading-none text-white">
              ElfinBOX
            </h1>
            <p className="mt-6 text-[15px] text-white/70 max-w-xl leading-[1.75]">
              An educational STEM kit that teaches middle schoolers coding through
              storytelling, tabletop play, and physical computing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Overview ─── */}
      <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div {...fadeUp}>
          <h2 className="text-display text-[36px] tracking-wide mb-6 text-charcoal">
            Overview
          </h2>
          <p className="text-[14px] text-[#595350] leading-[1.85] mb-4">
            ElfinBOX was created in collaboration with NYC First to redesign their
            existing STEM education product. The goal: make coding feel less like a
            class assignment and more like world-building.
          </p>
          <p className="text-[14px] text-[#595350] leading-[1.85]">
            The kit combines a Micro:Bit controller, narrative prompt cards, and a
            modular tabletop board — letting students code interactive story outcomes
            without needing prior programming experience.
          </p>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-col gap-5">
          {[
            { label: 'Role', value: 'UX Research, Concept Design, Interaction Design' },
            { label: 'Timeline', value: '12 weeks, Fall 2022' },
            { label: 'Team', value: 'Solo project with NYC First stakeholder feedback' },
            { label: 'Tools', value: 'Figma, Micro:Bit, card prototyping, user testing' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1 pb-5 border-b border-warm-100 last:border-0">
              <span className="text-[11px] uppercase tracking-[0.18em] text-warm-700 font-mono">{label}</span>
              <span className="text-[13px] text-[#595350]">{value}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ─── Full-width image ─── */}
      <motion.div {...fadeUp} className="w-full aspect-[16/7] bg-[#e8e4df]" />

      {/* ─── 01 Research ─── */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <motion.div {...fadeUp} className="relative mb-16">
          <SectionNumber n="01" />
          <div className="relative z-10 pt-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-warm-700 font-mono block mb-2">
              Research
            </span>
            <h2 className="text-display text-[40px] tracking-wide text-charcoal">
              Understanding the Learner
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'Interviews',
              body: 'Spoke with 6 middle school students and 3 STEM educators to understand how students relate to coding — most saw it as abstract, intimidating, and disconnected from things they cared about.',
            },
            {
              title: 'Competitive Analysis',
              body: 'Reviewed Scratch, LittleBits, and Makey Makey. Each excelled at one layer (visual coding, physical play, or real-world sensing) but none wove them together into a cohesive narrative.',
            },
            {
              title: 'Key Insight',
              body: 'Students engaged longest when coding had a clear "why" — a story outcome to unlock, a game state to change. Motivation came from narrative stakes, not technical achievement.',
            },
          ].map(({ title, body }) => (
            <motion.div key={title} {...fadeUp}>
              <h3 className="text-sm font-medium text-charcoal mb-2">{title}</h3>
              <p className="text-[13px] text-[#595350] leading-[1.8]">{body}</p>
            </motion.div>
          ))}
        </div>

        <InsightBox>
          "I just want to make something happen — like, I press a button and something in
          the story changes." — Student interview, age 12
        </InsightBox>

        {/* Two-column images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div {...fadeUp} className="aspect-[4/3] bg-[#e8e4df]" />
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="aspect-[4/3] bg-[#e8e4df]" />
        </div>
      </section>

      {/* ─── 02 Design Process ─── */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <motion.div {...fadeUp} className="relative mb-16">
          <SectionNumber n="02" />
          <div className="relative z-10 pt-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-warm-700 font-mono block mb-2">
              Design Process
            </span>
            <h2 className="text-display text-[40px] tracking-wide text-charcoal">
              From Metaphor to System
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
          <motion.div {...fadeUp}>
            <h3 className="text-sm font-medium text-charcoal mb-3">Framing the System</h3>
            <p className="text-[13px] text-[#595350] leading-[1.85] mb-4">
              Early sketches explored the kit as a &quot;world in a box.&quot; Each component
              maps to a layer of storytelling: the board is the setting, the Micro:Bit
              is the character&apos;s logic, and the cards are narrative choices.
            </p>
            <p className="text-[13px] text-[#595350] leading-[1.85]">
              I iterated on card mechanics over three paper prototype rounds, testing
              whether students could read a narrative prompt, identify the code action
              needed, and execute it without adult help.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="aspect-[4/3] bg-[#e8e4df]" />
        </div>

        {/* 3-col sketch grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[0, 0.1, 0.2].map((delay, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.7, delay }} className="aspect-square bg-[#e8e4df]" />
          ))}
        </div>

        <InsightBox>
          Testing round 2 showed that prompt cards with visual metaphors (not literal
          code labels) reduced time-to-first-action by ~40% compared to text-only cards.
        </InsightBox>

        <motion.div {...fadeUp} className="mt-8 aspect-[3/1] bg-[#dedad5]" />
      </section>

      {/* ─── 03 Solution ─── */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
        <motion.div {...fadeUp} className="relative mb-16">
          <SectionNumber n="03" />
          <div className="relative z-10 pt-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-warm-700 font-mono block mb-2">
              Solution
            </span>
            <h2 className="text-display text-[40px] tracking-wide text-charcoal">
              The ElfinBOX Kit
            </h2>
          </div>
        </motion.div>

        {/* Full-width solution image */}
        <motion.div {...fadeUp} className="w-full aspect-[16/9] bg-[#e8e4df] mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <motion.div {...fadeUp}>
            <h3 className="text-sm font-medium text-charcoal mb-3">Narrative Cards</h3>
            <p className="text-[13px] text-[#595350] leading-[1.85]">
              60 double-sided prompt cards. One side shows a story event (&quot;The bridge
              is breaking — what does your character do?&quot;); the other reveals the
              corresponding code block concept. Students flip the card only after
              attempting to code a response.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
            <h3 className="text-sm font-medium text-charcoal mb-3">Micro:Bit Interface</h3>
            <p className="text-[13px] text-[#595350] leading-[1.85]">
              A custom MakeCode extension maps to the board&apos;s physical zones (forest,
              river, village). Students code character actions that trigger LED
              responses and sound effects — immediate sensory feedback closes the
              loop between code and story outcome.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
          <motion.div {...fadeUp} className="md:col-span-2 flex flex-col gap-4">
            <h3 className="text-sm font-medium text-charcoal">Modular Board</h3>
            <p className="text-[13px] text-[#595350] leading-[1.85]">
              The tabletop board is made of interlocking tiles — teachers can reconfigure
              the world for different story arcs. Each tile includes a color-coded
              zone indicator that maps to card categories.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="md:col-span-3 aspect-[4/3] bg-[#e8e4df]" />
        </div>
      </section>

      {/* ─── 04 Reflection ─── */}
      <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-warm-100">
        <motion.div {...fadeUp} className="relative mb-16">
          <SectionNumber n="04" />
          <div className="relative z-10 pt-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-warm-700 font-mono block mb-2">
              Reflection
            </span>
            <h2 className="text-display text-[40px] tracking-wide text-charcoal">
              What I Learned
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div {...fadeUp} className="space-y-5">
            <p className="text-[14px] text-[#595350] leading-[1.85]">
              The biggest shift in my thinking came from watching students during
              testing. I&apos;d designed for comprehension — but what actually mattered
              was momentum. Students needed to feel like they were moving through the
              story, not stopping to figure out the tool.
            </p>
            <p className="text-[14px] text-[#595350] leading-[1.85]">
              This pushed me toward making every interaction feel consequential: the
              card flip, the code run, the LED response. Each step is a small reward
              that keeps the loop going.
            </p>
            <blockquote className="border-l-2 border-warm-300 pl-4 text-[13px] italic text-slate leading-[1.8] my-4">
              &ldquo;Design for momentum, not just clarity. Clarity without forward
              motion is just documentation.&rdquo;
            </blockquote>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="space-y-5">
            <h3 className="text-sm font-medium text-charcoal">If I revisited this</h3>
            <ul className="space-y-3">
              {[
                'Run a longer classroom pilot (4+ sessions) to test sustained engagement beyond novelty.',
                'Design a teacher dashboard — educators need visibility into where students are stuck.',
                'Explore a digital companion app that extends the story world beyond the physical kit.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[13px] text-[#595350] leading-[1.75]">
                  <span className="text-warm-400 font-mono shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ─── Next project nav ─── */}
      <motion.section
        {...fadeUp}
        className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto flex items-center justify-between border-t border-warm-100"
      >
        <span className="text-[11px] uppercase tracking-[0.18em] text-slate font-mono">
          Next project
        </span>
        <Link
          href="/projects/pyle"
          className="group flex items-center gap-3 text-display text-[28px] md:text-[40px] tracking-wide text-charcoal hover:text-warm-700 transition-colors"
        >
          PYLE
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
