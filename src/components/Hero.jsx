import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur border border-white/30 dark:border-white/10 shadow-sm mb-4">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-600 dark:text-gray-300">Tersedia untuk bekerja</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
            Nama Lengkap Anda
          </h1>
          <p className="mt-3 text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-semibold">
            Jabatan / Posisi Profesional
          </p>

          <p className="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
            Ringkasan singkat tentang Anda dan nilai yang Anda berikan, dalam 1—2 kalimat yang padat dan profesional.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur border border-white/40 dark:border-white/10 text-gray-800 dark:text-gray-100 hover:-translate-y-0.5 transition"
            >
              Hubungi Saya
            </a>
          </div>
        </motion.div>

        {/* Right: 3D Spline + profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative h-[420px] md:h-[520px]"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-xl">
            <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Floating avatar */}
          <div className="absolute -bottom-8 left-6 md:left-10 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop"
              alt="Foto Profil"
              className="h-20 w-20 rounded-full ring-4 ring-white dark:ring-white/10 object-cover"
            />
            <div className="px-4 py-3 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur border border-white/40 dark:border-white/10 shadow">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Terbuka untuk project freelance</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">Respon cepat via WhatsApp</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
