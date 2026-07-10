'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';

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
      <header
        className={`fixed top-5  z-50 duration-300
        ${scroll ? 'bg-black/70 backdrop-blur-xl border border-white/10 shadow-xl' : 'bg-black/40 backdrop-blur-lg border border-white/5'}
        rounded-full w-full`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl">
            MFS
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {menus.map((menu) => (
              <a key={menu.name} href={menu.href} className="relative text-gray-300 hover:text-white duration-300 group">
                {menu.name}
                <span className="absolute left-0 -bottom-1 w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-3">
            <button className=" p-2 rounded-full bg-white/5 hover:bg-white/10 duration-300 text-white " >
              <Moon size={18} />
            </button>

            <button
              className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium duration-300"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-lg duration-300 md:hidden
        ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="pt-28 flex flex-col items-center gap-8 text-xl">
          {menus.map((menu) => (
            <a key={menu.name} href={menu.href} onClick={() => setOpen(false)} className="text-gray-300 hover:text-violet-400 duration-300">
              {menu.name}
            </a>
          ))}

          <button
            className="mt-4 bg-violet-600 px-6 py-3 rounded-full text-white"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </>
  );
}
