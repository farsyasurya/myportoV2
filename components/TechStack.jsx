"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function TechStackMarquee({ skills }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the list so the loop feels seamless
  const items = [...skills, ...skills];

useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  let frameId;
  let position = 0;
  const speed = 1;

  const step = () => {
    if (!isPaused) {
      position += speed;

      if (position >= el.scrollWidth / 2) {
        position = 0;
      }

      el.scrollLeft = position;
    }

    frameId = requestAnimationFrame(step);
  };

  frameId = requestAnimationFrame(step);

  return () => cancelAnimationFrame(frameId);
}, [isPaused]);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
    >
      {items.map((skill, i) => (
        <div
          key={`${skill.id}-${i}`}
          className="flex flex-col items-center justify-center gap-3 bg-[#161923] border border-white/5 hover:border-violet-500/30 hover:bg-[#1c202f] transition-all duration-300 rounded-2xl p-6 group "
        >
          <div className="relative w-12 h-12">
            <Image
              src={skill.image}
              alt={skill.name}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="text-gray-300 text-sm font-medium whitespace-nowrap">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}