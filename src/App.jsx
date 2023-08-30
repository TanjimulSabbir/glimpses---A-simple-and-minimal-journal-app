import './App.css'
import Navbar from './components/Header/Navbar'
import Home from './components/Home/Home'


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
      </div>
    </>
  )
}

export default App
