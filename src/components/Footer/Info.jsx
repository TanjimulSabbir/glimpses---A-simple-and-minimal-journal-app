

function Info() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="mb-2 text-Secondary font-bold">Product</h1>
                <div className="text-sm text-[#4b4c4d]">
                    <li>About</li>
                    <li>Features</li>
                    <li>F.A.Q</li>
                </div>
            </div>
            <div>
                <h1 className="mb-2 text-Secondary font-bold">Support</h1>
                <div className="text-sm text-[#4b4c4d]">
                   <li>Contact</li>
                   <li>Community</li>
                   <li>Blog</li>
                </div>
            </div>
            <div>
                <h1 className="mb-2 text-Secondary font-bold">More</h1>
                <div className="text-sm text-[#4b4c4d]">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>GDPR Policy</li>
                </div>
            </div>
            
        </div>
    )
}

export default Info