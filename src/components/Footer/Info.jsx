import Social from "./Social"


function Info() {
    return (
        <div className="flex-1 flex items-center justify-around">

            <div>
                <h1 className="mb-2 text-Secondary font-bold">Product</h1>
                <div className="text-sm text-Primary">
                    <li>About</li>
                    <li>Features</li>
                    <li>F.A.Q</li>
                </div>
            </div>
            <div>
                <h1 className="mb-2 text-Secondary font-bold">Support</h1>
                <div className="text-sm text-Primary">
                    <li>Contact</li>
                    <li>Community</li>
                    <li>Blog</li>
                </div>
            </div>
            <div>
                <h1 className="mb-2 text-Secondary font-bold">More</h1>
                <div className="text-sm text-Primary">
                    <li>Term and Policy</li>
                    <li>Privacy Policy</li>
                    <li>GDPR Policy</li>
                </div>
            </div>

        </div>
    )
}

export default Info