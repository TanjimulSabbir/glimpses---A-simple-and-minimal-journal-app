
function Contact() {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
            <div className="UniversalPadding py-14">
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-extrabold lora mb-8">Join our mailing list to stay up to date</h1>
                    <p className="text-Primary text-center ">
                        Be the first to hear about the latest product releases & other exclusive  <br className=" hidden md:block" /> content. Don't worry, we'll never flood your inbox
                    </p>
                </div>
                <div className="w-full max-w-6xl mx-auto flex md:flex-row items-center justify-center">
                    <form className="flex flex-col md:flex-row items-center justify-center">
                        <div>
                            <input className="py-3 bg-gray-100 rounded px-3 w-64 placeholder:pl-1 placeholder:text-Primary" type="email" placeholder="Your Email" />
                        </div>
                        <div className="flex justify-center">
                            <button className="text-white text-sm uppercase md:ml-3 mt-3 md:mt-0 rounded py-3 px-6 font-bold bg-Blue">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact