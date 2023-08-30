import TopBannerImage from "../../assets/Photos/TopBanner/mockup.png"
import StripBtn from "../../assets/Photos/TopBanner/powered-by-stripe.png"
import ProductHunt from "../../assets/Photos/TopBanner/ProductHunt.svg"
import {PiCurrencyDollarSimpleBold} from "react-icons/pi"
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md"

function TopBanner() {
    return (
        <div className="bg-white raleway mt-36 mb-8">
            {/* Top */}
            <div className="text-center mb-3">
                <h1 className="text-[50px] font-extrabold lora mb-6">Capture your memories</h1>
                <p className="text-[22px] text-Primary">
                    Start writing your thoughts and memories <br />
                    and have them synced and backed up in the Dropbox cloud
                </p>
            </div>
            {/* Image */}
            <div className="w-3/4 h-full mx-auto">
                <img className="max-w-full" src={TopBannerImage} alt="mockup.png" />
            </div>
            {/* Bottom segment */}
            <div className="text-center flex justify-center">
                <div>
                    <div>
                        <div className="mb-3 space-x-3 flex items-center">
                            <button className="Btn bg-Blue Shadow w-[205px] font-bold text-white inline-flex items-center justify-center">
                              <PiCurrencyDollarSimpleBold className="inline-block font-extrabold text-lg"/>  Buy glimpses
                            </button>
                            <button className="Btn bg-BtnGray Shadow inline-flex items-center justify-center">Learn more <MdOutlineKeyboardDoubleArrowRight className="ml-1"/></button>
                        </div>
                        <p className="text-[#6c757d] mb-3 text-xs">BUY NOW ONLY FOR  $12.99</p>
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
    )
}

export default TopBanner