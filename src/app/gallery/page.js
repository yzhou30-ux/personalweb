'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const galleryItems = [
  {
    src: '/images/illustrations/nanhuai-night.png',
    title: '南淮夜',
    category: 'Digital Painting',
    tall: true,
  },
  {
    src: '/images/gallery/orange-sculpture.jpeg',
    title: 'Orange Study',
    category: 'Photography',
    tall: false,
  },
  {
    src: '/images/illustrations/suizhengxuan.png',
    title: '岁正悬',
    category: 'Digital Painting',
    tall: true,
  },
  {
    src: '/images/gallery/comic-pages.jpg',
    title: 'Storyboard — Dream Sequence',
    category: 'Illustration',
    tall: false,
  },
  {
    src: '/images/illustrations/luohuaxi.png',
    title: '落花溪',
    category: 'Digital Painting',
    tall: true,
  },
  {
    src: '/images/illustrations/night-sky.jpg',
    title: 'Night Sky',
    category: 'Digital Painting',
    tall: false,
  },
  {
    src: '/images/projects/pizza-hut-box.jpg',
    title: 'Pizza Hut Box — Next Design Awards',
    category: 'Illustration / Packaging',
    tall: true,
  },
];

export default function GalleryPage() {
  return (
    <main>
      <Navigation />

      <div className="pt-28 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-display text-5xl md:text-6xl tracking-wide">Gallery</h1>
          <p className="text-sm text-slate mt-3 max-w-lg leading-relaxed">
            A collection of personal illustrations, digital paintings, photography,
            and visual experiments — the playful side of my practice.
          </p>
        </motion.div>
      </div>

      <div className="px-6 md:px-12 max-w-[1400px] mx-auto pb-24">
        <div className="masonry-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={600}
                  height={item.tall ? 900 : 450}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <div>
                    <span className="text-white/70 text-[10px] uppercase tracking-[0.15em] block mb-1">
                      {item.category}
                    </span>
                    <span className="text-white text-sm font-light">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
