import { motion } from 'framer-motion'
import { CheckCircle2, Briefcase, Building2, Mail, Phone, MapPin, CalendarDays, Instagram, Send } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      {/* Section: About Me */}
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Tentang Saya
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg bg-white/70 dark:bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/40 dark:border-white/10 shadow"
        >
          Versi teks (mudah di-edit): Saya adalah profesional di bidang [tulis bidang Anda] dengan pengalaman [x] tahun. Fokus pada [keahlian inti], terbiasa bekerja dengan standar tinggi, serta berorientasi pada hasil. Mencari peluang untuk berkontribusi di lingkungan yang dinamis dan kolaboratif.
        </motion.p>
      </div>
    </section>
  )
}

export function PersonalData() {
  const items = [
    { icon: 'user', label: 'Nama', value: 'Nama Lengkap Anda' },
    { icon: 'map', label: 'Tempat, Tanggal Lahir', value: 'Kota, 01 Januari 2000' },
    { icon: 'home', label: 'Alamat', value: 'Jl. Contoh No. 123, Kota, Provinsi' },
    { icon: 'phone', label: 'Nomor HP/WA', value: '+62 812-3456-7890' },
    { icon: 'mail', label: 'Email', value: 'you@example.com' },
  ]

  const IconMap = {
    user: CheckCircle2,
    map: MapPin,
    home: Building2,
    phone: Phone,
    mail: Mail,
  }

  return (
    <section id="personal" className="py-16">
      {/* Section: Data Pribadi */}
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        {items.map((it) => {
          const Ico = IconMap[it.icon]
          return (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-white/40 dark:border-white/10 shadow"
            >
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300">
                <Ico size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{it.label}</p>
                <p className="font-semibold text-gray-900 dark:text-white">{it.value}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export function Skills() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS/Tailwind', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'UI/UX', level: 70 },
  ]

  return (
    <section id="skills" className="py-16">
      {/* Section: Skills */}
      <div className="max-w-5xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8"
        >
          Keahlian
        </motion.h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((s) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-gray-900 dark:text-white">{s.name}</p>
                <span className="text-sm text-blue-600 dark:text-blue-400">{s.level}%</span>
              </div>
              <div className="h-2 bg-gray-200/70 dark:bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" style={{ width: `${s.level}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  const timeline = [
    { title: 'S1 Teknik Informatika', place: 'Universitas Contoh', time: '2018 - 2022', desc: 'Konsentrasi Rekayasa Perangkat Lunak.' },
    { title: 'SMA IPA', place: 'SMA Negeri 1 Kota', time: '2015 - 2018', desc: 'Aktif di organisasi siswa dan lomba sains.' },
  ]

  return (
    <section id="education" className="py-16">
      {/* Section: Pendidikan */}
      <div className="max-w-5xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8"
        >
          Pendidikan
        </motion.h3>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/60 to-indigo-600/60" />
          <div className="space-y-8">
            {timeline.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur rounded-2xl p-5 shadow"
              >
                <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-white dark:ring-white/10" />
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{t.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{t.place}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400"><CalendarDays size={16} /> {t.time}</div>
                </div>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  const items = [
    { company: 'PT Teknologi Maju', role: 'Frontend Intern', period: 'Jan 2022 - Jun 2022', points: ['Membangun komponen UI reusable', 'Mengoptimasi performa halaman', 'Berkolaborasi dalam tim Agile'] },
    { company: 'Studio Kreatif', role: 'Freelance Web Designer', period: '2021 - Sekarang', points: ['Desain landing page premium', 'Implementasi TailwindCSS', 'Integrasi animasi Framer Motion'] },
  ]

  return (
    <section id="experience" className="py-16">
      {/* Section: Pengalaman */}
      <div className="max-w-5xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8"
        >
          Pengalaman Kerja / PKL
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{exp.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{exp.role}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-lg bg-blue-600/10 text-blue-700 dark:text-blue-300">{exp.period}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {exp.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 text-blue-600" size={18} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Portfolio() {
  const projects = Array.from({ length: 6 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    desc: 'Deskripsi singkat project yang menonjolkan hasil dan peran Anda.',
    img: `https://picsum.photos/seed/portfolio-${i}/800/600`,
  }))

  return (
    <section id="portfolio" className="py-16">
      {/* Section: Portofolio */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8"
        >
          Portofolio
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              href="#"
              className="group rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur shadow hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-900 dark:text-white">{p.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CoverLetter() {
  return (
    <section id="surat" className="py-20">
      {/* Section: Surat Lamaran Kerja */}
      <div className="max-w-3xl mx-auto px-4">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6"
        >
          Surat Lamaran Kerja
        </motion.h3>
        <div className="rounded-3xl p-8 bg-white/80 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur shadow leading-relaxed text-gray-800 dark:text-gray-200">
          <p className="mb-3">Kepada Yth.</p>
          <p className="mb-3 font-semibold">HRD [Nama Perusahaan]</p>
          <p className="mb-3">di Tempat</p>
          <p className="mt-6 mb-3">Dengan hormat,</p>
          <p className="mb-3">Melalui surat ini, saya bermaksud mengajukan lamaran kerja untuk posisi [posisi yang dilamar]. Saya memiliki pengalaman di bidang [bidang terkait] serta kompetensi [sebutkan kompetensi] yang relevan dengan kebutuhan perusahaan.</p>
          <p className="mb-3">Saya terbiasa bekerja secara kolaboratif, berorientasi pada target, dan adaptif terhadap perubahan. Besar harapan saya untuk dapat berkontribusi dan berkembang bersama [Nama Perusahaan].</p>
          <p className="mb-6">Demikian surat lamaran ini saya sampaikan. Atas perhatian dan kesempatannya, saya ucapkan terima kasih.</p>
          <p>Hormat saya,</p>
          <p className="font-semibold mt-1">[Nama Lengkap]</p>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20">
      {/* Section: Kontak */}
      <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur"
        >
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Hubungi Saya</h4>
          <form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
            <input className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-white/40 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nama" />
            <input className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-white/40 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
            <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-white/40 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Pesan" />
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:shadow-lg transition"><Send size={18}/>Kirim</button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur"
        >
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sosial Media</h4>
          <div className="space-y-3">
            <a href="https://instagram.com/yourhandle" className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-white/40 dark:border-white/10 hover:-translate-y-0.5 transition">
              <Instagram size={18} className="text-pink-500"/> @yourhandle
            </a>
            <a href="https://wa.me/6281234567890" className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-white/40 dark:border-white/10 hover:-translate-y-0.5 transition">
              <Phone size={18} className="text-green-500"/> +62 812-3456-7890
            </a>
            <a href="mailto:you@example.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-white/40 dark:border-white/10 hover:-translate-y-0.5 transition">
              <Mail size={18} className="text-blue-500"/> you@example.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
