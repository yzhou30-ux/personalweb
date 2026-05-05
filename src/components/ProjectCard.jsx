'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      <Link
        href={project.href || '#'}
        className={`group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center py-12 ${
          isEven ? '' : 'md:direction-rtl'
        }`}
      >
        {/* Image */}
        <div className={`relative overflow-hidden rounded-lg aspect-[4/3] ${isEven ? '' : 'md:order-2'}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Warm overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-warm-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Info */}
        <div className={`flex flex-col gap-4 ${isEven ? '' : 'md:order-1 md:text-right'}`}>
          <span className="text-[12px] uppercase tracking-[0.18em] text-warm-700 font-mono font-medium">
            {project.category}
          </span>
          <h3 className="text-display text-[32px] md:text-[44px] leading-[1.1] tracking-wide">
            {project.title}
          </h3>
          <p className={`text-[#4a4a4a] text-[14px] leading-[1.75] max-w-md ${isEven ? '' : 'md:self-end'}`}>
            {project.description}
          </p>
          <div className={`flex gap-2 flex-wrap mt-2 ${isEven ? '' : 'md:justify-end'}`}>
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-wider text-warm-700 font-medium border border-warm-200 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className={`inline-flex items-center gap-2 text-sm text-warm-700 mt-4 group-hover:gap-3 transition-all ${isEven ? '' : 'md:self-end'}`}>
            View project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
