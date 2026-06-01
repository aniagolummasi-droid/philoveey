import AboutSection from '../components/home/AboutSection'
import BenefitStrip from '../components/home/BenefitStrip'
import BestSellers from '../components/home/BestSellers'
import Collections from '../components/home/Collections'
import Hero from '../components/home/Hero'
import Testimonials from '../components/home/Testimonials'

function Home() {
  return (
    <>
      <Hero />
      <BenefitStrip />
      <Collections />
      <AboutSection />
      <BestSellers />
      <Testimonials />
    </>
  )
}

export default Home
