
export default function Navbar() {
    return (
        <div className="UniversalPadding flex bg-white shadow-md items-center justify-between py-6 text-Primary">
            <div>
                <img src="../../assets/Photos/logo-256x256.png" alt="" srcset="" />
            </div>
            <div className="flex space-x-5 items-center">
                <li>Home</li>
                <li>Features</li>
                <li>FAQ</li>
                <li className="relative">
                    <p>More</p>
                    <div className="absolute top-8 border rounded py-2 bg-white -left-1 text-black">
                        <li className="dropdown transition duration-500 hover:bg-gray-100 py-1 pl-5 pr-20">Contact</li>
                        <li className="dropdown transition duration-500 hover:bg-gray-100 py-1 pl-5 pr-20">Help</li>
                    </div>
                </li>
                <li>Blog</li>
            </div>
        </div>
    )
}
