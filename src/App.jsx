import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, PersonalData, Skills, Education, Experience, Portfolio, CoverLetter, Contact } from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white dark:from-[#0b1220] dark:via-[#0b1220] dark:to-[#0b1220]">
      {/* Sticky Navbar with glassmorphism */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Personal Data */}
      <PersonalData />

      {/* Skills */}
      <Skills />

      {/* Education timeline */}
      <Education />

      {/* Experience */}
      <Experience />

      {/* Portfolio grid */}
      <Portfolio />

      {/* Cover letter section (also has its own dedicated page) */}
      <CoverLetter />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
