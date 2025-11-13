import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CoverLetter } from '../components/Sections'

export default function CoverLetterPage(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white dark:from-[#0b1220] dark:via-[#0b1220] dark:to-[#0b1220]">
      <Navbar />
      <div className="pt-24">
        <CoverLetter />
      </div>
      <Footer />
    </div>
  )
}
