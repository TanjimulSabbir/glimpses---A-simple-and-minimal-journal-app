import TopBannerImage from "../../assets/Photos/TopBanner/mockup.png"
import StripBtn from "../../assets/Photos/TopBanner/powered-by-stripe.png"
import ProductHunt from "../../assets/Photos/TopBanner/ProductHunt.svg"

function TopBanner() {
    return (
        <div className="bg-white">
            {/* Top */}
            <div className="text-center">
                <h1>Capture your memories</h1>
                <p className="w-1/3 mx-auto text-center">
                    Start writing your thoughts and memories
                    and have them synced and backed up in the Dropbox cloud
                </p>
            </div>
            {/* Image */}
            <div>
                <img src={TopBannerImage} alt="mockup.png" />
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