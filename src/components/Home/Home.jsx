import TopBanner from '../TopBanner/TopBanner'
import Features from '../Features/Features'
import Company from '../Company/Company'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <div className="overflow-visible">
            <TopBanner />
            <Features />
            <Company />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;