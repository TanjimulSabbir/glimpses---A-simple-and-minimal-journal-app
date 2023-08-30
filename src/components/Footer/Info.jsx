

function Info() {
    return (
        <div className="flex-1 flex flex-col md:flex-row space-y-5 md:space-y-0 text-center md:justify-around">

            <div>
                <h1 className="mb-3 text-Secondary font-bold">Product</h1>
                <div className="text-sm text-Primary space-y-1">
                    <li><a href="">About</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">F.A.Q</a></li>
                </div>
            </div>
            <div>
                <h1 className="mb-3 text-Secondary font-bold">Support</h1>
                <div className="text-sm text-Primary space-y-1">
                    <li><a href="">Contact</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="">Blog</a></li>
                </div>
            </div>
            <div>
                <h1 className="mb-3 text-Secondary font-bold">More</h1>
                <div className="text-xs text-Primary space-y-1">
                    <li><a href="">Term and Policy</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">GDPR Policy</a></li>
                </div>
            </div>
        </div>
    )
}

export default Info;