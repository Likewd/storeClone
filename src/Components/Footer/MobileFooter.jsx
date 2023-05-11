import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsShop } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { IoCartOutline, IoHomeOutline } from 'react-icons/io5'

const MobileFooter = () => {
    return (
        <div className='bg-white  w-full fixed bottom-0 xs:px-[3px] border-2  '>
            <div className="flex items-center justify-center relative">
                <div className="bg-buttonColor absolute -top-6 w-14 flex items-center border-4 border-white justify-center h-14 shadow-lg rounded-full">
                    <AiOutlinePlus className=' text-white text-[28px]'></AiOutlinePlus>
                </div>
                <div className="flex items-center justify-between w-[90%] gap-2">
                    <div className="flex   items-center justify-center flex-col h-16">
                        <IoHomeOutline className=' text-textColor3 text-[28px]'></IoHomeOutline>
                    </div>
                    <div className="flex   items-center justify-center flex-col h-16">
                        <BsShop className=' text-textColor3 text-[28px]'></BsShop>
                    </div>
                    <div className="flex   items-center justify-center flex-col h-16">
                        <CiUser className=' text-textColor3 text-[28px]'></CiUser>
                    </div>
                    <div className="flex   items-center justify-center flex-col h-16 ">
                        <div className="relative block">
                            <div className="absolute w-6 h-6 rounded-full flex items-center -top-4 -right-4 justify-center bg-buttonColor font-fontArimo text-white">4</div>
                            <IoCartOutline className=' text-textColor3 text-[28px]'></IoCartOutline>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileFooter