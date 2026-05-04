'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const illustrations = [
  { src: '/images/illustrations/nanhuai-night.png', title: '南淮夜', aspect: 'aspect-[9/16]' },
  { src: '/images/illustrations/suizhengxuan.png', title: '岁正悬', aspect: 'aspect-[9/16]' },
  { src: '/images/illustrations/luohuaxi.png', title: '落花溪', aspect: 'aspect-[9/16]' },
  { src: '/images/illustrations/night-sky.jpg', title: 'Night Sky', aspect: 'aspect-[16/9]' },
  { src: '/images/gallery/comic-pages.jpg', title: 'Storyboard', aspect: 'aspect-[4/3]' },
  { src: '/images/gallery/orange-sculpture.jpeg', title: 'Orange Study', aspect: 'aspect-[4/3]' },
];

export default function IllustrationStrip() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-8 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display text-[36px] md:text-[48px] tracking-wide">
            Illustration & Gallery
          </h2>
          <p className="text-[14px] text-[#6b6b6b] mt-2">
            Personal explorations in digital painting, photography, and visual storytelling
          </p>
        </motion.div>
        <Link
          href="/gallery"
          className="text-xs uppercase tracking-[0.15em] text-warm-500 hover:text-warm-600 transition-colors hidden sm:block"
        >
          View all →
        </Link>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 overflow-x-auto pb-6 px-6 md:px-12 scrollbar-hide snap-x snap-mandatory">
        {illustrations.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex-shrink-0 snap-start group cursor-pointer"
          >
            <div className="relative h-[340px] md:h-[420px] w-auto overflow-hidden rounded-lg">
              <Image
                src={item.src}
                alt={item.title}
                width={400}
                height={420}
                className="h-full w-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Title overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-light">{item.title}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
