import {GoTriangleDown} from "react-icons/go"
export default function Navbar() {
    return (
        <div className="NavbarPadding flex bg-white shadow-md items-center justify-between py-6 text-Primary">
            <div>
                <img src="../../assets/Photos/logo-256x256.png" alt="" srcset="" />
            </div>
            <div className="flex space-x-5 items-center">
                <li>Home</li>
                <li>Features</li>
                <li>FAQ</li>
                <li className="relative">
                    <p className="flex space-x-1 items-center">More <GoTriangleDown className="text-black"/></p>
                    <div className="absolute top-8 border rounded py-2 bg-white -left-1 text-black">
                        <li className="dropdown transition duration-300 hover:bg-gray-100">Contact</li>
                        <li className="dropdown transition duration-300 hover:bg-gray-100">Help</li>
                    </div>
                </li>
                <li>Blog</li>
            </div>
        </div>
    )
}
