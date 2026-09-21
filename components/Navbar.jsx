'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const menus = [
  {
    name: 'Tech Stack',
    href: '#tech',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Project',
    href: '#project',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 px-4 max-w-5xl mx-auto transition-all duration-300">
        <div
          className={`duration-300 rounded-full px-6 py-3 flex items-center justify-between border ${
            scroll
              ? 'bg-white/80 dark:bg-black/70 backdrop-blur-xl border-slate-200/80 dark:border-white/10 shadow-lg dark:shadow-black/50'
              : 'bg-white/60 dark:bg-black/40 backdrop-blur-lg border-slate-200/50 dark:border-white/5 shadow-sm'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="text-slate-900 dark:text-white font-extrabold text-xl tracking-tight">
            MFS<span className="text-blue-600 dark:text-blue-500">.</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {menus.map((menu) => (
              <a
                key={menu.name}
                href={menu.href}
                className="relative text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 group"
              >
                {menu.name}
                <span className="absolute left-0 -bottom-1 w-0 bg-blue-600 dark:bg-violet-500 transition-all duration-300 group-hover:w-full h-0.5 rounded-full" />
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-300 shadow-md shadow-blue-600/20 active:scale-95"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-slate-800 dark:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-slate-100/95 dark:bg-black/90 backdrop-blur-xl duration-300 md:hidden flex flex-col justify-center items-center ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-xl font-medium">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              onClick={() => setOpen(false)}
              className="text-slate-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-violet-400 transition-colors"
            >
              {menu.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white font-semibold text-base shadow-lg shadow-blue-600/30 transition-all active:scale-95"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </>
  );
}
