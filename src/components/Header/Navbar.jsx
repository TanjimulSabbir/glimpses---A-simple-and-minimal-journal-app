import { useState } from "react"
import { GoTriangleDown } from "react-icons/go"
import { MdOutlineMenu } from "react-icons/md"
import NavLogo from "../../assets/Photos/logo-256x256.png"

export default function Navbar() {
    const [drowDown, setDropDown] = useState(false)
    return (
        <div className="NavbarPadding flex bg-white shadow-md items-center justify-between py-4 text-Primary">
            <div className="hidden md:flex items-center pl-7">
                <div className="relative">
                    <img className="w-11 h-11" src={NavLogo} alt="glimpses" />
                </div>
                <span className="text-black text-xl text-center font-bold leading-relaxed tracking-wide ">glimpses</span>
            </div>

            <div className="mt-14 ml-4 md:mt-0 md:ml-0">
                <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 md:items-center pr-14 ">
                    <li>Home</li>
                    <li>Features</li>
                    <li>FAQ</li>
                    {/* More Button */}
                    <li className="relative" onClick={() => setDropDown(!drowDown)}>

                        <p className={`${drowDown && "text-black"} flex space-x-1 items-center`}>
                            More
                            <GoTriangleDown className="text-black" />
                        </p>
                        {/* DropwDown Menut */}
                        <div className={`${drowDown ? "block" : "hidden"} absolute top-8 border rounded py-2 bg-white -left-1 text-black`}>
                            <li className="dropdown transition duration-300 hover:bg-gray-100">Contact</li>
                            <li className="dropdown transition duration-300 hover:bg-gray-100">Help</li>
                        </div>
                    </li>
                    <li>Blog</li>
                </div>
            </div>
            {/* Small Device */}
            <div className="absolute top-4 inset-0 px-4 md:hidden">
                <div className="flex items-center justify-between relative">
                    <div className="relative">
                        <img className="w-11 h-11" src={NavLogo} alt="glimpses" />
                    </div>
                    <p className="text-black text-xl text-center font-bold leading-relaxed tracking-wide">glimpses</p>
                    <MdOutlineMenu className="text-3xl text-black mr-2"/>
                </div>
            </div>
        </div>
    )
}
