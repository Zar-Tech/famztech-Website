import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
