import './App.css'
import Company from './components/Company/Company'
import Features from './components/Features/Features'
import Navbar from './components/Header/Navbar'
import TopBanner from './components/TopBanner/TopBanner'

function App() {
  return (
    <>
      <Navbar/>
      <TopBanner/>
      <Features/>
      <Company/>
    </>
  )
}

export default App
