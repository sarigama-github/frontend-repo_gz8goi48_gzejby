import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ResumePage(){
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white dark:from-[#0b1220] dark:via-[#0b1220] dark:to-[#0b1220] print:bg-white">
      <Navbar />
      <main className="pt-24 max-w-3xl mx-auto px-4 print:px-0">
        {/* Resume content - print friendly */}
        <div className="bg-white dark:bg-white rounded-2xl shadow print:shadow-none print:border-0 border border-gray-200 overflow-hidden">
          <div className="p-8 text-gray-900">
            <div className="flex items-center gap-4 mb-6">
              <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=128&auto=format&fit=crop" alt="Foto" className="w-20 h-20 rounded-full object-cover" />
              <div>
                <h1 className="text-2xl font-bold">Nama Lengkap Anda</h1>
                <p className="text-gray-600">Jabatan / Posisi Profesional</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h2 className="font-semibold text-gray-900">Ringkasan</h2>
                  <p className="text-gray-700">Tuliskan ringkasan singkat tentang kompetensi inti dan pengalaman utama Anda.</p>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Pengalaman</h2>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Perusahaan A — Frontend Developer (2022 - Sekarang)</li>
                    <li>Perusahaan B — Intern (2021)</li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Pendidikan</h2>
                  <p className="text-gray-700">S1 Teknik Informatika — Universitas Contoh (2018 - 2022)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h2 className="font-semibold text-gray-900">Kontak</h2>
                  <p className="text-gray-700">you@example.com</p>
                  <p className="text-gray-700">+62 812-3456-7890</p>
                  <p className="text-gray-700">Kota, Indonesia</p>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Keahlian</h2>
                  <p className="text-gray-700">HTML, CSS/Tailwind, JavaScript, React, UI/UX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3 print:hidden">
          <button onClick={handlePrint} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:shadow-lg transition">Download PDF</button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
