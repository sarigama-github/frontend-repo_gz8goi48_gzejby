import { useEffect, useState } from 'react'
import { Menu, X, SunMedium, MoonStar, FileDown, Mail, Phone, Instagram, FileText } from 'lucide-react'

function useTheme() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light'
  )

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  return { theme, setTheme }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'personal', label: 'Data Pribadi' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'experience', label: 'Pengalaman' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'contact', label: 'Kontak' },
  ]

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Glassmorphism navbar */}
      <div className="backdrop-blur-lg bg-white/70 dark:bg-black/40 border-b border-white/20 dark:border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#home" onClick={(e)=>{e.preventDefault();handleNav('home')}} className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-500 to-indigo-600 shadow-inner" />
            <span className="font-semibold tracking-tight text-gray-900 dark:text-white">CV Digital</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-sm font-medium text-gray-700/90 dark:text-gray-200/90 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm shadow hover:shadow-lg transition-all"
            >
              <FileDown size={16} /> Download CV
            </a>

            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-100 hover:scale-105 transition"
            >
              {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/20 dark:border-white/10 bg-white/80 dark:bg-black/50 backdrop-blur-xl">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-lg text-gray-800 dark:text-gray-100 hover:bg-blue-50/60 dark:hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-3 px-3 py-2">
                <a href="mailto:you@example.com" className="p-2 rounded-lg bg-gray-100 dark:bg-white/10"><Mail size={18} /></a>
                <a href="https://wa.me/6281234567890" className="p-2 rounded-lg bg-gray-100 dark:bg-white/10"><Phone size={18} /></a>
                <a href="https://instagram.com/yourhandle" className="p-2 rounded-lg bg-gray-100 dark:bg-white/10"><Instagram size={18} /></a>
                <a href="/surat" className="ml-auto inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-600 text-white text-sm"><FileText size={16}/> Surat</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
