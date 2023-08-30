import Reviews from "./Reviews"

const Testimonials = () => {
    return (
        <div className="py-10 bg-GrayBg raleway">
            <div className="text-center mb-4">
                <h1 className="text-[32px] font-bold lora mb-10">Testimonials</h1>
                <p className="text-Primary">
                    You are in a great company. <br />
                    See what they have to say below.
                </p>
            </div>
            <div className="w-full max-w-6xl mx-auto">
                <Reviews/>
            </div>
        </div>
    )
}

export default Testimonials