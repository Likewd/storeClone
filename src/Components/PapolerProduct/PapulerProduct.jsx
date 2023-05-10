import React, { useState } from 'react'
import { Row, Col, Image, Card } from 'antd';
import populerProduct from "../../assets/populerProduct.png"
import populerProduct1 from "../../assets/populerProduct1.png"
import populerProduct2 from "../../assets/populerProduct2.png"
import populerProduct3 from "../../assets/populerProduct5.png"
import populerProduct4 from "../../assets/populerProduct4.png"
import cartIcon from "../../assets/cartIcon.svg"
import startIcon from "../../assets/startIcon.svg"

import CartIconre from "../../assets/CartIconre.svg"
import { AiFillEye, AiFillHeart } from 'react-icons/ai';
import { IoEyeOutline } from 'react-icons/io5';
import { HiOutlineEye } from 'react-icons/hi2';
import { BsCart2 } from 'react-icons/bs';

const PapulerProduct = () => {
    const [showNumber, setshowNumber] = useState(8)
    return (
        <div className=" px-3 md:px-8 lg:px-16 py-5">
            <div className=" flex items-center justify-between border-b-2 pb-2 ">
                <h2 className='relative before:rounded-md before:absolute before:h-1 before:bg-buttonColor before:w-[100%] before:-left-[1px] before:-bottom-[11px]   font-fontArimo font-extrabold text-backgroundBlack text-[20px]'>Popular Products</h2>
                <div className=" flex items-center justify-center gap-3">
                    <button className='font-fontArimo text-base font-[400] text-buttonColor '>View All</button>
                </div>
            </div>
            <div className="py-3 px-1 border flex items-center justify-center lg:justify-between flex-wrap gap-5">
                <div className="w-44">
                    
                    <div className=" relative min-h-[215px]  bg-[rgb(248,248,248)]  p-4  flex items-center min-h-[215px] justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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

                <div className="w-44">

                    <div className=" relative min-h-[215px]  bg-[rgb(248,248,248)]  p-4  flex items-center justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct1} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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


                <div className="w-44">

                    <div className=" relative min-h-[215px]   bg-[rgb(248,248,248)]  p-4  flex items-center justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct3} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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


                <div className="w-44">

                    <div className=" relative min-h-[215px]  bg-[rgb(248,248,248)]  p-4  flex items-center justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct4} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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




                <div className="w-44">

                    <div className=" relative min-h-[215px]  bg-[rgb(248,248,248)]  p-4  flex items-center justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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

                


                <div className="w-44">

                    <div className=" relative min-h-[215px]  bg-[rgb(248,248,248)]  p-4  flex items-center justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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

                <div className="w-44">

                    <div className=" relative min-h-[215px]  bg-[rgb(248,248,248)]  p-4  flex items-center justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct1} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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


                <div className="w-44">

                    <div className=" relative min-h-[215px]   bg-[rgb(248,248,248)]  p-4  flex items-center justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct3} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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


                <div className="w-44">

                    <div className="min-h-[215px]  relative  bg-[rgb(248,248,248)]  p-4  flex items-center justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-[#D60101] z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Stock Out</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct4} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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





                <div className="w-44">

                    <div className=" min-h-[215px]  relative  bg-[rgb(248,248,248)]  p-4  flex items-center justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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

                <div className="w-44">

                    <div className=" min-h-[215px]  relative  bg-[rgb(248,248,248)]  p-4  flex items-center justify-center">
                        <div className="absolute right-0 top-2 flex items-center justify-start w-20 h-6 bg-buttonColor z-50">
                            <div className="triangle"></div>
                            <p className='font-fontArimo font-semibold text-[10px]  p-0 px-1 m-0 text-white'>Sale 20%</p>
                        </div>
                        <div className="absolute left-2  flex flex-col gap-1 z-50">
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
                        <Image src={populerProduct} preview={false} alt='populerProduct' className='object-cover h-40'></Image>
                    </div>
                    <div className="">
                        <div className="">
                            <h2 className='text-[#444444] font-fontArimo text-[14px] '> Product Name</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <p className='font-fontArimo font-extrabold text-base text-backgroundBlack'>$50.99</p>
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1] line-through'>$50.99</p>
                            </div>
                            <div className="">
                                <p className='font-fontArimo font-normal text-[14px] text-[#A1A1A1]'>30+ sold</p>
                            </div>
                            <div className="">
                                <Image src={cartIcon} preview={false} className='cursor-pointer'></Image>
                            </div>
                        </div>
                        <div className="flex items-center justify-start gap-1">
                            <div className="inline-flex flex-row items-center justify-center gap-1">
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

export default PapulerProduct