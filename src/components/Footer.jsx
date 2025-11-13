export default function Footer(){
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} CV Digital. Semua hak dilindungi.</p>
        <div className="text-xs text-gray-500 dark:text-gray-400">Didesain dengan TailwindCSS & animasi halus.</div>
      </div>
    </footer>
  )
}
