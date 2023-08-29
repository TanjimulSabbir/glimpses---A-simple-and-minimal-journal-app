import TopBannerImage from "../../assets/Photos/TopBanner/mockup.png"
import StripBtn from "../../assets/Photos/TopBanner/powered-by-stripe.png"
import ProductHunt from "../../assets/Photos/TopBanner/ProductHunt.svg"

function TopBanner() {
    return (
        <div className="bg-white raleway mt-16">
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
                        <div>
                            <button>Buy glimpses</button>
                            <button>Learn more</button>
                        </div>
                        <p>BUY NOW ONLY FOR  $12.99</p>
                        <div>
                            <img src={StripBtn} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={ProductHunt} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner