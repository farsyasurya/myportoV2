import { Briefcase } from 'lucide-react';
import work from '@/data/work';
import Image from 'next/image';

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-3 md:px-12 py-24 border-t border-slate-200/80 dark:border-white/5">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-3">
          <Briefcase size={20} />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Work Experience</h2>

        <p className="text-slate-600 dark:text-gray-400 mt-3 max-w-xl">My professional journey building web applications and digital products.</p>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Container Utama dengan Batas Scroll jika lebih dari 3 item */}
        <div className=" overflow-y-auto pr-4 space-y-8 scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
          {/* Wrapper Timeline */}
          <div className="relative border-l border-slate-300 dark:border-white/10 ml-3 pl-6 md:pl-8 space-y-6">
            {work.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline Dot - Dikunci posisinya agar presisi di garis */}
                <div className="absolute top-6 -left-[31px] w-3.5 h-3.5 rounded-full bg-blue-600 dark:bg-blue-500 border-2 border-slate-100 dark:border-[#0F1117] group-hover:scale-110 transition-transform" />

                {/* Card - Lebih compact */}
                <div className="bg-white dark:bg-[#161923] border border-slate-200/80 dark:border-white/5 rounded-xl p-4 md:p-5 hover:border-blue-500/40 shadow-sm transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Sisi Kiri: Logo & Info Utama */}
                    <div className="flex gap-4 items-start">
                      {/* Ukuran Logo Diperkecil */}
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-slate-100 dark:bg-white border border-slate-200/60 dark:border-transparent p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                        <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                      </div>

                      <div>
                        {/* Susunan teks di HP: Logo -> Sampingnya Nama PT -> Bawahnya Lokasi & Posisi */}
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base leading-tight">{item.company}</p>
                        <p className="text-xs text-slate-500 dark:text-gray-500 mt-0.5">📍 {item.location}</p>

                        {/* Posisi Jabatan di bawah Nama PT */}
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.position}
                        </h3>
                      </div>
                    </div>

                    {/* Sisi Kanan / Bawah: Periode Tanggal yang Lebih Minimalis */}
                    <span className="text-xs font-mono text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-md px-2.5 py-1 w-fit self-start sm:self-center">
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>

                  {/* Deskripsi */}
                  <ul className="mt-4 space-y-2 border-t border-slate-200/80 dark:border-white/5 pt-3">
                    {item.description.map((desc, index) => (
                      <li key={index} className="flex gap-2.5 text-xs md:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mt-1.5 shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Badge - Ditampilkan di paling bawah deskripsi kerja */}
                  {item.tech && item.tech.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-white/5 flex flex-wrap gap-1.5">
                      {item.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] md:text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
