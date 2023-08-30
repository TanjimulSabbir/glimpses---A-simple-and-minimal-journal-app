import { FaLeaf, FaLock, FaAnchor, FaCalendarAlt, FaDropbox, FaPaperPlane } from "react-icons/fa";
import Services from "./Services";


function Features() {
    const Icons = { FaLeaf, FaLock, FaAnchor, FaCalendarAlt, FaDropbox, FaPaperPlane };
    return (
        <div className="bg-GrayBg raleway">
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
    )
}

export default Features