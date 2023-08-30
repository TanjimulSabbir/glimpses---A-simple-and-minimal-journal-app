import './App.css'
import Company from './components/Company/Company'
import Features from './components/Features/Features'
import Navbar from './components/Header/Navbar'
import Testimonials from './components/Testimonials/Testimonials'
import TopBanner from './components/TopBanner/TopBanner'

function App() {
  return (
    <>
      <Navbar/>
      <TopBanner/>
      <Features/>
      <Company/>
      <Testimonials/>
    </>
  )
}

export default App
