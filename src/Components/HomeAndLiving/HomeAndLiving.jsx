import React, { useState } from 'react'
import { Row, Col, Image, Card } from 'antd';
import home from "../../assets/home.png"
import home1 from "../../assets/home1.png"
import home2 from "../../assets/home2.png"
import home3 from "../../assets/home3.png"
import home4 from "../../assets/home4.png"

import cartIcon from "../../assets/cartIcon.svg"
import startIcon from "../../assets/startIcon.svg"

import CartIconre from "../../assets/CartIconre.svg"
import { AiFillHeart } from 'react-icons/ai';
import bannerimage1 from "../../assets/bannerimage1.png"
import bannerimage from "../../assets/bannerimage.png"
import bannerimagejpg from "../../assets/bannerimagejpg.jpg"

import { HiOutlineEye } from 'react-icons/hi2';
import { BsCart2 } from 'react-icons/bs';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const HomeAndLiving = () => {
    const [actvie, setactive] = useState(1)
    const [open, setopen] = useState(false)
    return (
        <div className=" xs:px-[3px]  mm:px-1 sm:px-3 md:px-8 lg:px-16 py-5">
            <div className=" flex items-center justify-between border-b-2 pb-2 ">
                <h2 className='relative before:rounded-md before:absolute before:h-1 before:bg-buttonColor before:w-[100%] before:-left-[1px] before:-bottom-[11px]   font-fontArimo font-extrabold text-backgroundBlack text-[20px]'>Home & Living</h2>

                <div className="hidden sm:flex items-center justify-center gap-3">
                    <button onClick={() => {
                        setactive(1)

                    }} className={`${actvie === 1 ? "  border-white border-2 border-b-buttonColor  text-buttonColor" : "bg-transparent text-[#444444] border border-white"}   text-[14px] cursor-pointer outline-none font-fontArimo`}>Home & Living</button>
                    <button onClick={() => {
                        setactive(2)

                    }} className={`${actvie === 2 ? " border-white border-2 border-b-buttonColor  text-buttonColor" : "bg-transparent text-[#444444] border border-white"}   text-[14px] cursor-pointer outline-none font-fontArimo`}>Flower & Plant</button>
             
                    <button onClick={() => {
                        setactive(3)

                    }} className={`${actvie === 3 ? "  border-white border-2 border-b-buttonColor  text-buttonColor" : "bg-transparent text-[#444444] border border-white"}   text-[14px] cursor-pointer outline-none font-fontArimo`}>Kitchen & Dining Items</button>
                    <button onClick={() => {
                        setactive(4)

                    }} className={`${actvie === 4 ? " border-white border-2 border-b-buttonColor  text-buttonColor" : "bg-transparent text-[#444444] border border-white"}   text-[14px] cursor-pointer outline-none font-fontArimo`}>Home & Office Appliance</button>

             
             
                </div>
                <div className='relative block sm:hidden'>
                    <div onClick={() => setopen((pre) => !pre)} className="sm:hidden  h-6 w-6 rounded-md flex cursor-pointer items-center justify-center flex-col border border-buttonColor">
                        <BiDotsVerticalRounded></BiDotsVerticalRounded>
                    </div>
                    {open && <div className='flex bg-white p-3 gap-3 min-w-[200px] absolute right-0 top-8 z-[1000] items-center justify-center flex-col'>
                        <button onClick={() => {
                            setactive(1)

                        }} className={`${actvie === 1 ? "  border-white border-2 border-b-buttonColor  text-buttonColor" : "bg-transparent text-[#444444] border border-white"}   text-[14px] cursor-pointer outline-none font-fontArimo`}>Home & Living</button>
                        <button onClick={() => {
                            setactive(2)

                        }} className={`${actvie === 2 ? " border-white border-2 border-b-buttonColor  text-buttonColor" : "bg-transparent text-[#444444] border border-white"}   text-[14px] cursor-pointer outline-none font-fontArimo`}>Flower & Plant</button>

                        <button onClick={() => {
                            setactive(3)

                        }} className={`${actvie === 3 ? "  border-white border-2 border-b-buttonColor  text-buttonColor" : "bg-transparent text-[#444444] border border-white"}   text-[14px] cursor-pointer outline-none font-fontArimo`}>Kitchen & Dining Items</button>
                        <button onClick={() => {
                            setactive(4)

                        }} className={`${actvie === 4 ? " border-white border-2 border-b-buttonColor  text-buttonColor" : "bg-transparent text-[#444444] border border-white"}   text-[14px] cursor-pointer outline-none font-fontArimo`}>Home & Office Appliance</button>



     </div>
                    }
                </div>
            </div>


            <div className="py-3 px-1  flex justify-between sm:items-center sm:justify-center lg:justify-between flex-wrap md:gap-7 lg:gap-12 xl:gap-16">



                <div className="   xs:w-[140px] mm:w-40  ml:w-44  ">

                    <div className=" relative   bg-[rgb(248,248,248)]  mm:p-4  flex items-center min-h-[215px] justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className=" absolute left-2 hidden  sm:flex flex-col gap-1 z-50">
                            <div className="w-6 h-6 bg-white flex cursor-pointer items-center justify-center">
                                <Image src={CartIconre} preview={false}></Image>
                            </div>
                            <div className="w-6 h-6 bg-white cursor-pointer flex items-center justify-center">
                                <HiOutlineEye></HiOutlineEye>

                            </div>
                            <div className="w-6 h-6 bg-white cursor-pointer flex items-center justify-center">
                                <AiFillHeart></AiFillHeart>

                            </div>
                            <div className="w-6 h-6 bg-white flex  cursor-pointer items-center justify-center">
                                <BsCart2></BsCart2>

                            </div>




                        </div>
                        <Image src={home} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className=" flex  items-start sm:items-start justify-between">

                            <div className="flex-col sm:flex-row flex sm:items-center  sm:gap-1 ">
                                <div className="flex items-center gap-1">
                                    <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                    <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                                </div>
                                <div className="flex ">
                                    <p className='font-fontArimo  font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                                </div>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex py-1 sm:py-0 mm:items-center mm:flex-row flex-col justify-start mm:gap-1">
                            <div className="inline-flex flex-row sm:items-center sm:justify-center gap-1">
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                            <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>(30 review)</p>
                        </div>
                    </div>
                </div>


                <div className="   xs:w-[140px] mm:w-40  ml:w-44  ">

                    <div className=" relative   bg-[rgb(248,248,248)]  mm:p-4  flex items-center min-h-[215px] justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className=" absolute left-2 hidden  sm:flex flex-col gap-1 z-50">
                            <div className="w-6 h-6 bg-white flex cursor-pointer items-center justify-center">
                                <Image src={CartIconre} preview={false}></Image>
                            </div>
                            <div className="w-6 h-6 bg-white cursor-pointer flex items-center justify-center">
                                <HiOutlineEye></HiOutlineEye>

                            </div>
                            <div className="w-6 h-6 bg-white cursor-pointer flex items-center justify-center">
                                <AiFillHeart></AiFillHeart>

                            </div>
                            <div className="w-6 h-6 bg-white flex  cursor-pointer items-center justify-center">
                                <BsCart2></BsCart2>

                            </div>




                        </div>
                        <Image src={home4} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className=" flex  items-start sm:items-start justify-between">

                            <div className="flex-col sm:flex-row flex sm:items-center  sm:gap-1 ">
                                <div className="flex items-center gap-1">
                                    <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                    <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                                </div>
                                <div className="flex ">
                                    <p className='font-fontArimo  font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                                </div>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex py-1 sm:py-0 mm:items-center mm:flex-row flex-col justify-start mm:gap-1">
                            <div className="inline-flex flex-row sm:items-center sm:justify-center gap-1">
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                            <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>(30 review)</p>
                        </div>
                    </div>
                </div>


                <div className="   xs:w-[140px] mm:w-40  ml:w-44  ">

                    <div className=" relative   bg-[rgb(248,248,248)]  mm:p-4  flex items-center min-h-[215px] justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className=" absolute left-2 hidden  sm:flex flex-col gap-1 z-50">
                            <div className="w-6 h-6 bg-white flex cursor-pointer items-center justify-center">
                                <Image src={CartIconre} preview={false}></Image>
                            </div>
                            <div className="w-6 h-6 bg-white cursor-pointer flex items-center justify-center">
                                <HiOutlineEye></HiOutlineEye>

                            </div>
                            <div className="w-6 h-6 bg-white cursor-pointer flex items-center justify-center">
                                <AiFillHeart></AiFillHeart>

                            </div>
                            <div className="w-6 h-6 bg-white flex  cursor-pointer items-center justify-center">
                                <BsCart2></BsCart2>

                            </div>




                        </div>
                        <Image src={home2} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className=" flex  items-start sm:items-start justify-between">

                            <div className="flex-col sm:flex-row flex sm:items-center  sm:gap-1 ">
                                <div className="flex items-center gap-1">
                                    <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                    <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                                </div>
                                <div className="flex ">
                                    <p className='font-fontArimo  font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                                </div>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex py-1 sm:py-0 mm:items-center mm:flex-row flex-col justify-start mm:gap-1">
                            <div className="inline-flex flex-row sm:items-center sm:justify-center gap-1">
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                            <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>(30 review)</p>
                        </div>
                    </div>
                </div>

                <div className="   xs:w-[140px] mm:w-40  ml:w-44  ">

                    <div className=" relative   bg-[rgb(248,248,248)]  mm:p-4  flex items-center min-h-[215px] justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className=" absolute left-2 hidden  sm:flex flex-col gap-1 z-50">
                            <div className="w-6 h-6 bg-white flex cursor-pointer items-center justify-center">
                                <Image src={CartIconre} preview={false}></Image>
                            </div>
                            <div className="w-6 h-6 bg-white cursor-pointer flex items-center justify-center">
                                <HiOutlineEye></HiOutlineEye>

                            </div>
                            <div className="w-6 h-6 bg-white cursor-pointer flex items-center justify-center">
                                <AiFillHeart></AiFillHeart>

                            </div>
                            <div className="w-6 h-6 bg-white flex  cursor-pointer items-center justify-center">
                                <BsCart2></BsCart2>

                            </div>




                        </div>
                        <Image src={home1} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className=" flex  items-start sm:items-start justify-between">

                            <div className="flex-col sm:flex-row flex sm:items-center  sm:gap-1 ">
                                <div className="flex items-center gap-1">
                                    <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                    <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                                </div>
                                <div className="flex ">
                                    <p className='font-fontArimo  font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                                </div>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex py-1 sm:py-0 mm:items-center mm:flex-row flex-col justify-start mm:gap-1">
                            <div className="inline-flex flex-row sm:items-center sm:justify-center gap-1">
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                            <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>(30 review)</p>
                        </div>
                    </div>
                </div>


                <div className=" hidden ml:block   xs:w-[140px] mm:w-40  ml:w-44  ">

                    <div className=" relative   bg-[rgb(248,248,248)]  mm:p-4  flex items-center min-h-[215px] justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className=" absolute left-2 hidden  sm:flex flex-col gap-1 z-50">
                            <div className="w-6 h-6 bg-white flex cursor-pointer items-center justify-center">
                                <Image src={CartIconre} preview={false}></Image>
                            </div>
                            <div className="w-6 h-6 bg-white cursor-pointer flex items-center justify-center">
                                <HiOutlineEye></HiOutlineEye>

                            </div>
                            <div className="w-6 h-6 bg-white cursor-pointer flex items-center justify-center">
                                <AiFillHeart></AiFillHeart>

                            </div>
                            <div className="w-6 h-6 bg-white flex  cursor-pointer items-center justify-center">
                                <BsCart2></BsCart2>

                            </div>




                        </div>
                        <Image src={home} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className=" flex  items-start sm:items-start justify-between">

                            <div className="flex-col sm:flex-row flex sm:items-center  sm:gap-1 ">
                                <div className="flex items-center gap-1">
                                    <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                    <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                                </div>
                                <div className="flex ">
                                    <p className='font-fontArimo  font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                                </div>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex py-1 sm:py-0 mm:items-center mm:flex-row flex-col justify-start mm:gap-1">
                            <div className="inline-flex flex-row sm:items-center sm:justify-center gap-1">
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                                <Image src={startIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                            <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>(30 review)</p>
                        </div>
                    </div>
                </div>







            </div>

           
        </div>
    )
}

export default HomeAndLiving