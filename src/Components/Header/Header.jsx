import React, { useState } from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
const Header = () => {
    const [active, setactive] = useState(1)
    return (
        <header className=' px-1 md:px-8 lg:px-16 relative bg-backgroundWhite  h-20  md:flex hidden justify-between items-center '>
            <div className="flex  items-center justify-center gap-4">
                <div className='flex  items-center justify-center gap-2 '> <FiPhoneCall className='text-textColor1 font-fontArimo text-lg'></FiPhoneCall> <span className='text-textColor3 font-fontArimo text-lg font-[400]'>123-345-678</span></div>
                <div className='flex  items-center justify-center gap-2'> <CiMail className='text-textColor1 font-fontArimo text-[24px] font-semibold'></CiMail> <span className='text-textColor3 font-fontArimo text-lg font-[400]'>seehereme@gmail.com</span></div>
            </div>
            <div className="flex  items-center justify-center gap-10  ">
                <div className="border-borderColor border rounded-lg">
                    <button onClick={() => setactive(1)} className={`${active === 1 ? "bg-buttonColor text-white " : "bg-transparent text-textColor3  "} rounded-lg px-3 py-2 outline-none  font-fontArimo text-base  w-20`}>English</button>
                    <button onClick={() => setactive(2)} className={`${active === 2 ? "bg-buttonColor text-white " : "bg-transparent text-textColor3 "} px-3 py-2 rounded-lg outline-none font-fontArimo text-base      w-20 `}>বাংলা</button>
                </div >
                <div className='flex  items-center justify-center gap-4'>
                    <ImFacebook className='text-textColor text-lg'></ImFacebook>
                    <BsTwitter className='text-textColor text-lg'></BsTwitter>
                    <FaLinkedinIn className='text-textColor text-lg'></FaLinkedinIn>
                    <FaInstagram className='text-textColor text-lg'></FaInstagram>
                </div>
            </div>
        </header>
    )
}

export default Header