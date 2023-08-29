import { useState } from "react"
import { GoTriangleDown } from "react-icons/go"
import { SlMenu } from "react-icons/sl"
import NavLogo from "../../assets/Photos/logo-256x256.png"

export default function Navbar() {
    const [drowDown, setDropDown] = useState(false);
    const [NavbarOPen, setNavBarOpen] = useState(false)
    const dropDonwStyle = "dropdown transition duration-300 hover:bg-gray-100";

    return (
        <div className="NavbarPadding md:flex bg-white shadow-md items-center justify-between py-4 text-Primary">

            {/* Large Device */}
            <div className="hidden md:flex items-center pl-7">
                <div className="relative">
                    <img className="w-11 h-11" src={NavLogo} alt="glimpses" />
                </div>
                <span className="text-black text-xl text-center font-bold leading-relaxed tracking-wide ">glimpses</span>
            </div>

            {/* Small Device */}

            <div className="flex items-center justify-between px-4 md:hidden">
                <div>
                    <img className="w-11 h-11" src={NavLogo} alt="glimpses" />
                </div>

                <p className="text-black text-xl text-center font-bold leading-relaxed tracking-wide">glimpses</p>

                <p onClick={() => setNavBarOpen(!NavbarOPen)} className={`cursor-pointer mr-5 border border-gray-300 px-4 py-2 rounded focus-visible:border-black`}> <SlMenu className="text-2xl text-black" /></p>
            </div>

            {/* Menu */}
            <div className={`${NavbarOPen ? "block" : "hidden"} md:block mt-2 ml-4 md:mt-0 md:ml-0`}>
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
                        <div className={`${drowDown ? "block" : "hidden"} md:absolute mt-4 md:mt-0 top-8 border rounded py-2 bg-white -left-1 text-black`}>
                            <li className={dropDonwStyle}>Contact</li>
                            <li className={dropDonwStyle}>Help</li>
                        </div>
                    </li>
                    <li>Blog</li>
                </div>
            </div>
        </div>
    )
}
