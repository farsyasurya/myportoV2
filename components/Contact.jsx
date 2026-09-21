'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    title: 'Tn.',
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!form.name || !form.message) {
      alert('Nama dan pesan wajib diisi.');
      return;
    }

    const text = `Halo Muhammad Farsya Surya 👋

    Perkenalkan saya:

    Panggilan : ${form.title}
    Nama : ${form.name}
    No. WA : ${form.phone || '-'}

    Pesan :
    ${form.message}`;

    const url = `https://wa.me/6282287724985?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  };

return (
    <>
  <section
    id="contact"
    className="max-w-7xl mx-auto border-t border-slate-200/80 dark:border-white/5 py-20 px-6 md:px-12"
  >
    {/* Menggunakan max-w-xl agar form tidak terlalu lebar di layar besar & tetap rapi */}
    <div className="max-w-xl mx-auto">

      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400 mb-3 w-fit">
          <Mail size={20} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Let&apos;s Work Together
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-2 text-sm md:text-base max-w-md">
          Interested in collaborating? Fill out the form below and I&apos;ll reply via WhatsApp.
        </p>
      </div>

      {/* Form Card (Padding disesuaikan p-5 di HP, p-6 di Desktop) */}
      <div className="bg-white dark:bg-[#161923] border border-slate-200/80 dark:border-white/5 rounded-xl p-5 md:p-6 space-y-4 shadow-md">

        {/* Baris Panggilan & Nama (Sejajar di desktop/tablet, vertikal di HP) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-1">
            <label className="text-xs font-medium text-slate-700 dark:text-gray-300 mb-1.5 block">
              Panggilan
            </label>
            <select
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full text-sm rounded-lg bg-slate-50 dark:bg-[#0F1117] border border-slate-200 dark:border-white/10 px-3 py-2 text-slate-900 dark:text-white outline-none focus:border-blue-500 transition"
            >
              <option className="bg-white dark:bg-[#0F1117]">Tn.</option>
              <option className="bg-white dark:bg-[#0F1117]">Bapak</option>
              <option className="bg-white dark:bg-[#0F1117]">Ibu</option>
              <option className="bg-white dark:bg-[#0F1117]">Saudara</option>
              <option className="bg-white dark:bg-[#0F1117]">Saudari</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-slate-700 dark:text-gray-300 mb-1.5 block">
              Nama
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Masukkan nama..."
              className="w-full text-sm rounded-lg bg-slate-50 dark:bg-[#0F1117] border border-slate-200 dark:border-white/10 px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Input WhatsApp */}
        <div>
          <label className="text-xs font-medium text-slate-700 dark:text-gray-300 mb-1.5 block">
            Nomor WhatsApp <span className="text-slate-400 dark:text-gray-500 font-normal">(Opsional)</span>
          </label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="08xxxxxxxxxx"
            className="w-full text-sm rounded-lg bg-slate-50 dark:bg-[#0F1117] border border-slate-200 dark:border-white/10 px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Input Pesan */}
        <div>
          <label className="text-xs font-medium text-slate-700 dark:text-gray-300 mb-1.5 block">
            Pesan
          </label>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tulis pesan..."
            className="w-full text-sm rounded-lg bg-slate-50 dark:bg-[#0F1117] border border-slate-200 dark:border-white/10 px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 outline-none focus:border-blue-500 transition resize-none"
          />
        </div>

        {/* Tombol Kirim */}
        <button
          onClick={handleSubmit}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 text-sm font-medium transition shadow-md shadow-blue-600/20 active:scale-[0.98]"
        >
          <Send size={16} />
          Kirim ke WhatsApp
        </button>

      </div>

    </div>
  </section>

  {/* Footer Section */}
  <footer className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-slate-200/80 dark:border-white/5 text-xs text-slate-500 dark:text-gray-500">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      
      {/* Kiri: Links (Github & Email) */}
      <div className="flex items-center gap-4 text-slate-600 dark:text-gray-400">
        <a 
          href="https://github.com/farsyasurya"
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Github
        </a>
        <span className="text-slate-300 dark:text-white/10">|</span>
        <a 
          href="mailto:suryafarsya16@gmail.com"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          Email
        </a>
      </div>

      {/* Kanan: Copyright */}
      <div className="text-center sm:text-right font-mono">
        &copy; {new Date().getFullYear()} MFS. All rights reserved.
      </div>

    </div>
  </footer>
  </>
);
}