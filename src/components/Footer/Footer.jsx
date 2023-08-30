import Info from "./Info"
import Social from "./Social"

function Footer() {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
            <div className='UniversalPadding raleway w-full max-w-5xl mx-auto pt-10 lg:flex space-y-8 lg:space-y-0 justify-center items-end'>
                <Social></Social>
                <Info />
            </div>
        </div>
    )
}

export default Footer