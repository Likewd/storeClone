import { Col, Image, Row } from 'antd'
import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import appstore from '../../assets/appstore.png'
import googelpay from '../../assets/googelpay.png'
import card from '../../assets/card.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

const Footer = () => {
    return (
      <>
            <div className="bg-black px-3 md:px-8 lg:px-16 py-5">
                <Row gutter={4} >
                    <Col xs={24} sm={12} md={6} lg={6} className=''>
                        <h2 className='text-white font-black text-5xl font-fontArimo'>LOGO</h2>
                        <div className="py-2">
                            <p className='font-fontArimo text-base text-[#C1C1C1]'> is the biggest online platform for </p>
                            <p className='font-fontArimo text-base text-[#C1C1C1]'>   Community especially for those who </p>
                            <p className='font-fontArimo text-base text-[#C1C1C1]'>  are living as expatriates or</p>
                            <p className='font-fontArimo text-base text-[#C1C1C1]'>  immigrants in the UK</p>

                       </div>
                        <div className=" flex items-center gap-2">
                            <div className="w-8 h-8 cursor-pointer transition-all flex items-center justify-center rounded-full  bg-[#2D2C2C] hover:bg-buttonColor text-white">
                                <AiOutlineTwitter className='text-lg'></AiOutlineTwitter>
                                
                            </div>

                            <div className="w-8 h-8 cursor-pointer transition-all flex items-center justify-center rounded-full  bg-[#2D2C2C] hover:bg-buttonColor text-white">
                                <FaFacebookF className='text-lg'></FaFacebookF>

                            </div>
                            <div className="w-8 h-8 cursor-pointer transition-all flex items-center justify-center rounded-full  bg-[#2D2C2C] hover:bg-buttonColor text-white">
                                <FaInstagram className='text-lg'></FaInstagram>

                            </div>
                            <div className="w-8 h-8 cursor-pointer transition-all flex items-center justify-center rounded-full  bg-[#2D2C2C] hover:bg-buttonColor text-white">
                                <FaLinkedinIn className='text-lg'></FaLinkedinIn>
                            </div>
                        
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} className=''>
                        <h3 className='font-fontArimo font-semibold text-[24px] text-buttonColor'>
                            Guide & Tips
                        </h3>
                        <div className="py-2">
                            <p className='font-fontArimo text-base text-[#C1C1C1]  hover:text-white cursor-pointer'> How to Listing </p>
                            <p className='font-fontArimo text-base text-[#C1C1C1] hover:text-white cursor-pointer'>  How to Shopping </p>
                            <p className='font-fontArimo text-base text-[#C1C1C1] hover:text-white cursor-pointer'>How to Blog Post</p>
                            <p className='font-fontArimo text-base text-[#C1C1C1] hover:text-white cursor-pointer'>How to Create Store</p>

                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} className=''>
                        <h3 className='font-fontArimo font-semibold text-[24px] text-buttonColor'>
                           Information
                        </h3>
                        <ul className="py-2">
                            <li className='font-fontArimo text-base text-[#C1C1C1]  hover:text-buttonColor cursor-pointer'> How to Listing </li>
                            <li className='font-fontArimo text-base text-[#C1C1C1] hover:text-buttonColor cursor-pointer'>  How to Shopping </li>
                            <li className='font-fontArimo text-base text-[#C1C1C1] hover:text-buttonColor cursor-pointer'>How to Blog Post</li>
                            <li className='font-fontArimo text-base text-[#C1C1C1] hover:text-buttonColor cursor-pointer'>How to Create Store</li>

                        </ul>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6} className=''>
                        <h3 className='font-fontArimo font-semibold text-[24px] text-buttonColor'>
                            Help & Support
                        </h3>
                        <ul className="py-2">
                            <li className='font-fontArimo text-base text-[#C1C1C1]  hover:text-buttonColor cursor-pointer'>FAQ </li>
                            <li className='font-fontArimo text-base text-[#C1C1C1] hover:text-buttonColor cursor-pointer'>  Contact Us </li>
                            <li className='font-fontArimo text-base text-[#C1C1C1] hover:text-buttonColor cursor-pointer'>Privacy Policy</li>
                            <li className='font-fontArimo text-base text-[#C1C1C1] hover:text-buttonColor cursor-pointer'>Terms & Conditions </li>

                        </ul>
                        <div className="">
                            <Image src={appstore}></Image>
                            <Image src={googelpay}></Image>
                        </div>
                    </Col>
</Row>
            </div>


            <div className="bg-[#2D2C2C] px-3 md:px-8 lg:px-16 py-5">

                <div className="flex items-center justify-between">
                    <h2 className='font-fontArimo text-base text-[#C1C1C1]'>
                        &copy  All Copyright  2022.
                    </h2>
                    <div className=" flex items-center justify-center gap-1">
                        <Image src={card}></Image>
                        <Image src={card1}></Image>
                        <Image src={card2}></Image>
                        <Image src={card3}></Image>
                    </div>
               </div>
            </div>
      
      </>
   
  )
}

export default Footer