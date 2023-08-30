import Services from "./Services";

function Features() {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
            <div className="UniversalPadding bg-GrayBg raleway pb-16">
                <div className="text-center py-8 FeatureIntro">
                    <h1 className="text-[32px] font-bold lora mb-10">Features</h1>
                    <p className="text-Primary text-center">
                        Minimalist design, privacy-focused with high performance is been the key mantra for glimpses journal app in its journey in the last 4 years.
                    </p>
                </div>
                <div className="">
                    <Services />
                </div>
            </div>
        </div>
    )
}

export default Features