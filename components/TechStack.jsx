'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function TechStackMarquee({ skills }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the list so the loop feels seamless
  const items = [...skills, ...skills];

useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  let frameId;
  let position = el.scrollLeft;
  const speed = 1;

  const handleScroll = () => {
    position = el.scrollLeft;
  };

  el.addEventListener("scroll", handleScroll);

  const step = () => {
    if (!isPaused) {
      position += speed;

      if (position >= el.scrollWidth / 2) {
        position -= el.scrollWidth / 2;
      }

      el.scrollLeft = position;
    }

    frameId = requestAnimationFrame(step);
  };

  frameId = requestAnimationFrame(step);

  return () => {
    cancelAnimationFrame(frameId);
    el.removeEventListener("scroll", handleScroll);
  };
}, [isPaused]);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
    >
      {items.map((skill, i) => (
        <div
          key={`${skill.id}-${i}`}
          // 1. Mengubah padding dari p-6 menjadi p-3 (atau p-4 jika ingin sedikit lebih longgar)
          // 2. Mengurangi gap antar konten dari gap-3 menjadi gap-2
          className="flex flex-col items-center justify-center gap-2 bg-[#161923] border border-white/5 hover:border-violet-500/30 hover:bg-[#1c202f] transition-all duration-300 rounded-xl p-3.5 group shrink-0"
        >
          {/* 3. Memperkecil ukuran container gambar dari w-12 h-12 (48px) menjadi w-8 h-8 (32px) */}
          <div className="relative w-8 h-8">
            <Image
              src={skill.image}
              alt={skill.name}
              width={32} // Disesuaikan dengan w-8
              height={32} // Disesuaikan dengan h-8
              className="object-contain"
            />
          </div>
          {/* 4. Memperkecil ukuran teks dari text-sm menjadi text-xs */}
          <span className="text-gray-300 text-xs font-medium whitespace-nowrap">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
