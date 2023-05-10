import React from 'react'
import { AiOutlineDown, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";


import google from "../../assets/google.png"
import { IoNotificationsOutline, IoCartOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import {
  FaRegUser
} from "react-icons/fa";

const SearchHeader = () => {
  return (
    <header className='px-1 md:px-8 lg:px-16 relative bg-backgroundWhite min-h-20 relative  flex md:flex-row flex-col justify-between items-center '>
      <div className="flex  items-center justify-between md:justify-center px-3 md:p-0 gap-2 w-full md:w-auto">
        <img src={google} className='h-[70px] ' alt="googleIcon" />
        <div className="flex relative bg-[#F9F9F9] rounded-full h-12 w-12  md:hidden items-center justify-center  flex-col  ">
          <IoNotificationsOutline className=' text-textColor3 text-[28px] h-10'></IoNotificationsOutline>
          <div className="absolute w-6 h-6 rounded-full flex items-center -top-2 -right-2 justify-center bg-buttonColor font-fontArimo text-white">4</div>
        </div>
      </div>
      {/* mobileScreen */}

      <div className="flex md:hidden items-center justify-between  w-full px-3 md:p-0">
        <div className="flex items-center  rounded-lg sm:w-80 w-max-full  ">
          <input type="text" placeholder='Search....' className=' py-3 h-12  border-2 border-[#D0D0D0] px-2 bg-[#F9F9F9] placeholder:text-[#737373] font-fontArimo text-base font-[400] outline-none' />
          <button className=' bg-buttonColor px-3  sm:px-7  h-12 rounded-r-[13px] '> <AiOutlineSearch className='text-white text-xl'></AiOutlineSearch></button>
        </div>
        <div className=" flex items-center justify-center p-2 border-2 border-buttonColor ">
          <BiFilter className='text-[32px]'></BiFilter>
        </div>
      </div>

      {/* dexTOp Screen */}
      <div className="border-2 border-buttonColor  rounded-2xl  ">
        <div className="hidden md:flex  items-center h-16">
          <button className=' flex items-center h-full border-r-2 gap-2 px-3 '>
            <p className='font-fontArimo text-black text-[20px]'> Filter</p>
            <AiOutlineDown className='text-lg'></AiOutlineDown>
          </button>
          <input type="text" placeholder='Search....' className=' py-5 px-2 placeholder:text-[#737373] font-fontArimo text-base font-[400] outline-none 
              ' />
          <button className='h-full bg-buttonColor px-7 rounded-r-[13px] '> <AiOutlineSearch className='text-white text-xl'></AiOutlineSearch></button>
        </div>


      </div >
      <div className="flex 
       items-center  justify-center gap-2">

        <div className='flex  items-center justify-center  gap-4'>

          <div className="hidden md:flex  items-center justify-center flex-col h-16">
            <AiOutlineHeart className='text-textColor3 text-[28px]'></AiOutlineHeart>
            <span className='hidden lg:block text-textColor3 text-base font-fontArimo'>Which Lists</span>
          </div>


          <div className="hidden md:flex   items-center justify-center flex-col h-16 ">
            <div className="relative block">
              <div className="absolute w-6 h-6 rounded-full flex items-center -top-4 -right-4 justify-center bg-buttonColor font-fontArimo text-white">4</div>
              <IoCartOutline className=' text-textColor3 text-[28px]'></IoCartOutline>
            </div>
            <span className=' hidden lg:block text-textColor3 text-base font-fontArimo'>Cart</span>
          </div>


          <div className="hidden md:flex  items-center justify-center  flex-col h-16 ">
            <FaRegUser className=' text-textColor3 text-lg h-8'></FaRegUser>
            <span className='text-textColor3 hidden lg:block text-base font-fontArimo'>Sign In</span>
          </div>



          <div className="hidden relative bg-[#F9F9F9] rounded-full h-12 w-12  md:flex items-center justify-center  flex-col  ">
            <IoNotificationsOutline className=' text-textColor3 text-[28px] h-10'></IoNotificationsOutline>
            <div className="absolute w-6 h-6 rounded-full flex items-center -top-2 -right-2 justify-center bg-buttonColor font-fontArimo text-white">4</div>
          </div>

        </div>
      </div>

    </header>
  )
}

export default SearchHeader