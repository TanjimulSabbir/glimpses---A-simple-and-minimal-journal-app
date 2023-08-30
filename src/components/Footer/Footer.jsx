import Info from "./Info"
import Social from "./Social"

function Footer() {
    return (
        <div className='UniversalPadding raleway w-full max-w-5xl mx-auto pt-10 pb-16 md:flex space-y-8 md:space-y-0 justify-center items-center'>
           <Social></Social>
           <Info/>
        </div>
    )
}

export default Footer