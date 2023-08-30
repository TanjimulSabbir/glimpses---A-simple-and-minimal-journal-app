import TopBannerImage from "../../assets/Photos/TopBanner/mockup.png"
import StripBtn from "../../assets/Photos/TopBanner/powered-by-stripe.png"
import ProductHunt from "../../assets/Photos/TopBanner/ProductHunt.svg"
import { PiCurrencyDollarSimpleBold } from "react-icons/pi"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"

function TopBanner() {
    const Btn1 = "Btn bg-Blue Shadow w-[205px] font-bold text-white inline-flex items-center justify-center"
    const Btn2 = "Btn bg-BtnGray Shadow inline-flex items-center justify-center";
    const Btn1Icon = <> <PiCurrencyDollarSimpleBold className="inline-block font-extrabold text-lg" /></>;
    const Btn2Icon = <> <MdOutlineKeyboardDoubleArrowRight className="ml-1" /></>
    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <div className="UniversalPadding bg-white raleway mt-36 mb-8">
                {/* Top */}
                <div className="text-center mb-3">
                    <h1 className="text-[50px] font-extrabold lora mb-6 leading-tight">Capture your memories</h1>
                    <p className="text-[22px] text-Primary">
                        Start writing your thoughts and memories <br />
                        and have them synced and backed up in the Dropbox cloud
                    </p>
                </div>
                {/* Image */}
                <div className="lg:w-3/4 h-full mx-auto">
                    <img className="max-w-full" src={TopBannerImage} alt="mockup.png" />
                </div>
                {/* Bottom segment */}
                <div className="text-center md:flex justify-center">
                    <div>
                        <div className="flex items-center flex-col">
                            <div className="mb-3 md:space-x-3 space-y-3 md:space-y-0 flex flex-col md:flex-row items-center justify-center">
                                <button className={Btn1}>
                                    {Btn1Icon}  Buy glimpses
                                </button>
                                <button className={Btn2}>Learn more {Btn2Icon}
                                </button>
                            </div>

                            <p className="text-[#6c757d] my-3 text-xs">BUY NOW ONLY FOR  <span className="font-bold">$12.99</span></p>

                            <div className="flex justify-center">
                                <img className="Stripe" src={StripBtn} alt="" />
                            </div>
                        </div>
                        <div className="mt-14 flex items-center justify-center">
                            <img className="ProductHunt" src={ProductHunt} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner