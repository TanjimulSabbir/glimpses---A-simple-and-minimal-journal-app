import Info from "./Info"
import Social from "./Social"

function Footer() {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
            <div className='UniversalPadding raleway w-full max-w-5xl mx-auto py-10 md:flex space-y-8 md:space-y-0 justify-center items-center'>
                <Social></Social>
                <Info />
            </div>
        </div>
    )
}

export default Footer