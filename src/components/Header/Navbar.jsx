
export default function Navbar() {
    return (
        <div className="UniversalPadding flex bg-white shadow items-center justify-between py-6">
            <div>
                <img src="../../assets/Photos/logo-256x256.png" alt="" srcset="" />
            </div>
            <div className="flex space-x-6 items-center">
                <li>Home</li>
                <li>Features</li>
                <li>FAQ</li>
                <li className="relative">
                    <p>More</p>
                    <div className="absolute top-10 border rounded py-2 bg-white -left-1">
                        <li className="dropdown transition duration-500 hover:bg-gray-100 py-2 pl-3 pr-20">Contact</li>
                        <li className="dropdown transition duration-500 hover:bg-gray-100 py-2 pl-3 pr-20">Help</li>
                    </div>
                </li>
                <li>Blog</li>
            </div>
        </div>
    )
}
