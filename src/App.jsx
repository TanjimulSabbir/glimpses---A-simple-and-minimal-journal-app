import './App.css'
import Company from './components/Company/Company'
import Contact from './components/Contact/Contact'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'
import Testimonials from './components/Testimonials/Testimonials'
import TopBanner from './components/TopBanner/TopBanner'

function App() {
  return (
    <>
      <Navbar />
      <TopBanner />
      <Features />
      <Company />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
