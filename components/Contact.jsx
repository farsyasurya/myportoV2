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
    <section
      id="contact"
      className="border-t border-white/5 py-24 px-6"
    >
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-12">

          <div className="inline-flex p-3 rounded-xl bg-blue-500/10 text-blue-400 mb-4">
            <Mail size={22} />
          </div>

          <h2 className="text-4xl font-bold text-white">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-4">
            Interested in collaborating? Fill out the form below and I'll
            reply via WhatsApp.
          </p>

        </div>

        <div className="bg-[#161923] border border-white/5 rounded-2xl p-8 space-y-5">

          {/* Panggilan */}

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Panggilan
            </label>

            <select
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full rounded-xl bg-[#0F1117] border border-white/10 px-4 py-3 text-white outline-none focus:border-blue-500"
            >
              <option>Tn.</option>
              <option>Bapak</option>
              <option>Ibu</option>
              <option>Saudara</option>
              <option>Saudari</option>
            </select>
          </div>

          {/* Nama */}

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Nama
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Masukkan nama..."
              className="w-full rounded-xl bg-[#0F1117] border border-white/10 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* WA */}

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Nomor WhatsApp
              <span className="text-gray-500"> (Opsional)</span>
            </label>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
              className="w-full rounded-xl bg-[#0F1117] border border-white/10 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Pesan */}

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Pesan
            </label>

            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tulis pesan..."
              className="w-full rounded-xl bg-[#0F1117] border border-white/10 px-4 py-3 text-white outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 rounded-xl py-3 font-semibold transition"
          >
            <Send size={18} />
            Kirim ke WhatsApp
          </button>

        </div>

      </div>
    </section>
  );
}