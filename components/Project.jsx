'use client';

import { useRef } from 'react';
import { FolderGit2, ArrowLeft, ArrowRight, GitBranch, ExternalLink } from 'lucide-react';

import Image from 'next/image';
import projects from '@/data/project';

export default function Project() {
  const sliderRef = useRef(null);

  // Fungsi untuk menggeser slider ke kiri atau kanan
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      // Geser sejauh ukuran lebar container card yang terlihat
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      sliderRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="project" className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/5">
      {/* Header & Navigasi Panah */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mb-3 w-fit">
            <FolderGit2 size={20} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          <p className="text-gray-400 mt-2 max-w-xl text-sm md:text-base">Some of the projects I&apos;ve worked on over the past few years.</p>
        </div>

        {/* Tombol Navigasi Panah Kanan-Kiri */}
        <div className="flex gap-3 justify-center md:justify-end shrink-0">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 rounded-xl border border-white/10 bg-[#161923] text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all active:scale-95"
            aria-label="Scroll left"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 rounded-xl border border-white/10 bg-[#161923] text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all active:scale-95"
            aria-label="Scroll right"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Wrapper Horizontal Slider Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          // KODE BARU (Sudah Responsif di HP)
          <div
            key={project.id}
            className="w-[85vw] sm:w-[320px] shrink-0 snap-start group bg-[#161923] border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/20 transition-all duration-300 shadow-lg"
          >
            {/* Image (Tinggi diperkecil dari h-52 ke h-40 agar card compact) */}
            <div className="relative h-40 bg-gray-950 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
            </div>

            {/* Content (Padding disesuaikan menjadi p-4) */}
            <div className="p-4 flex flex-col justify-between ">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base font-bold text-white truncate max-w-[70%]">{project.title}</h3>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-medium whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{project.description}</p>
              </div>

              <div>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button Action */}
                <div className="flex gap-2 mt-4 pt-3 border-t border-white/5 text-xs font-medium">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-white/10 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition"
                    >
                      <GitBranch size={14} />
                      Github
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
