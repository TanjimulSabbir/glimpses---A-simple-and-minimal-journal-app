import Info from "./Info"
import Social from "./Social"

function Footer() {
    return (
        <div className='w-full max-w-5xl mx-auto pt-10 pb-16  raleway flex justify-center items-center'>
           <Social></Social>
           <Info/>
        </div>
    )
}

export default Footer