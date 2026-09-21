import Navbar from '@/components/Navbar';
import TechStackMarquee from '@/components/TechStack';
import Experience from '@/components/Work';
import Project from '@/components/Project';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { Mail, Download, MapPin, Code, FolderGit2 } from 'lucide-react';

import profile from '@/data/profile';
import skills from '@/data/skill';
import experiences from '@/data/work';


export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100 dark:bg-[#0F1117] text-slate-700 dark:text-gray-300 antialiased selection:bg-blue-500/30 selection:text-white transition-colors duration-300">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="max-w-7xl mx-auto min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-24 px-6 md:px-12 lg:px-16 pt-32 pb-20"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-justify order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Hi, I&apos;m{' '}
              <span className="text-blue-600 dark:text-blue-400">
                {profile.name.split(' ')[1] || profile.name}
              </span> 👋
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">{profile.job}</h2>
            <p className="text-base md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">{profile.description}</p>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-600 dark:text-gray-400 mb-8 font-medium">
              <MapPin size={18} className="text-blue-600 dark:text-blue-500" />
              <span>{profile.location}</span>
            </div>  

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
              >
                <Mail size={18} />
                Let&apos;s Talk
              </a>

              <a
                href={profile.cv}
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-slate-800 border border-slate-300/80 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white dark:border-white/10 px-8 py-3.5 rounded-xl font-semibold transition-all shadow-sm active:scale-[0.98]"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>

          {/* Photo Showcase */}
          <div className="flex-1 flex justify-center order-1 lg:order-2">
            <div className="relative w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-3xl overflow-hidden bg-white/80 dark:bg-[#1a1440]/50 p-3 border border-slate-200/80 dark:border-white/10 shadow-xl dark:shadow-[0_0_50px_-15px_rgba(139,92,246,0.4)] transition-all">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 dark:from-blue-600/20 to-transparent" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section id="tech" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 border-t border-slate-200/80 dark:border-white/5">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400 mb-3">
              <Code size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Tech Stack & Tools</h2>
            <p className="text-slate-600 dark:text-gray-400 mt-2">Teknologi yang saya gunakan sehari-hari</p>
          </div>

          {/* Grid diubah menjadi grid dinamis dengan lebar minimal agar seimbang di layar besar */}
        <TechStackMarquee skills={skills} />
        </section>
        {/* EXPERIENCE SECTION */}
        <Experience />

        <Project />

        <Contact />
      </main>
    </>
  );
}
