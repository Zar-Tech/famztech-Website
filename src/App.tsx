import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeSection from './sections/HomeSection'
import ProductsSection from './sections/ProductsSection'
import AppDevelopmentSection from './sections/AppDevelopmentSection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="main-content">
        <HomeSection />
        <ProductsSection />
        <AppDevelopmentSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
