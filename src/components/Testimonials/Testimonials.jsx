import Reviews from "./Reviews"

const Testimonials = () => {
    return (
        <div className="my-24 bg-GrayBg">
            <div className="text-center mb-10">
                <h1 className="text-[32px] font-bold lora py-10">Testimonials</h1>
                <p className="text-Primary">
                    You are in a great company. <br />
                    See what they have to say below.
                </p>
            </div>
            <div>
                <Reviews/>
            </div>
        </div>
    )
}

export default Testimonials