import TopBannerImage from "../../assets/Photos/mockup.png"
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
            {/* Botton */}
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default TopBanner