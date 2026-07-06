import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeSection from './sections/HomeSection'
import ProductsSection from './sections/ProductsSection'
import AppDevelopmentSection from './sections/AppDevelopmentSection'
import ServicesSection from './sections/ServicesSection'
import HardwareSection from './sections/HardwareSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="main-content">
        <HomeSection />
        <ProductsSection />
        <AppDevelopmentSection />
        <ServicesSection />
        <HardwareSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
