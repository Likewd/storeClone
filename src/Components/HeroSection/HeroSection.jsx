import React from 'react'
import { Button, Col, Divider, Image, Popover, Row } from 'antd';
import heroimage from '../../assets/heroimage.png'
import heroimageside1 from '../../assets/heroimageside1.png'
import heroimageside2 from '../../assets/heroimageside2.png'
import rectangle from '../../assets/rectangle.png'
import { HiChevronRight } from "react-icons/hi2";
const HeroSection = () => {
    const content = (
        <div>
            <p className='text-backgroundBlack font-fontArimo font-[400] text-base p-1 cursor-pointer  min-w-[140px] hover:text-[#42B00F]     '>Home decor</p>
            <p className='text-backgroundBlack font-fontArimo font-[400] text-base p-1 cursor-pointer min-w-[140px] hover:text-[#42B00F]     '>Kitchen & dining items</p>

        </div>
    );
    return (

        <Row className='  px-3 md:px-8 lg:px-16 py-5 gap-3
         hit-[360px]
           justify-between' >
            <Col xs={0} sm={0} md={5}  className='bg-[#FCFCFC] hidden md:inline-block'>
                <div>
                    <h2 className='text-backgroundBlack px-4 py-3 font-[700] text-lg font-fontArimo'>Shops</h2>
                    <Divider className='p-0 m-0'></Divider>
                    <Popover placement="left" content={content} className='border-none block  h-14   ' >
                        <Button className=' popoover flex font-[400] text-base font-fontArimo   items-center justify-between w-full    hover:text-[#42B00F]     '><p className='text-sm lg:text-base'>Consumer Food  </p> <HiChevronRight className=' font-[400] text-base  flex   '></HiChevronRight></Button>
                    </Popover>
                </div>
                <div>
                    <Divider className='p-0 m-0'></Divider>
                    <Popover placement="left" content={content} className='border-none block  h-14  ' >
                        <Button className=' popoover flex font-[400] text-base font-fontArimo   items-center justify-between w-full    hover:text-[#42B00F]     '><p className='text-sm lg:text-base'>Men’s Clothing </p> <HiChevronRight className=' font-[400] text-base  flex   '></HiChevronRight></Button>
                    </Popover>
                </div>
                <div>
                    <Divider className='p-0 m-0'></Divider>
                    <Popover placement="left" content={content} className='border-none block  h-14  ' >
                        <Button className=' popoover flex font-[400] text-base font-fontArimo   items-center justify-between w-full    hover:text-[#42B00F]     '><p className='text-sm lg:text-base'>Women’s Clothing  </p> <HiChevronRight className=' font-[400] text-base  flex   '></HiChevronRight></Button>
                    </Popover>
                </div>
                <div>
                    <Divider className='p-0 m-0'></Divider>
                    <Popover placement="left" content={content} className='border-none block  h-14  ' >
                        <Button className=' popoover flex font-[400] text-base font-fontArimo   items-center justify-between w-full    hover:text-[#42B00F]     '><p className='text-sm lg:text-base'>Fashion & Beauty  </p> <HiChevronRight className=' font-[400] text-base  flex   '></HiChevronRight></Button>
                    </Popover>
                </div>
                <div>
                    <Divider className='p-0 m-0'></Divider>
                    <Popover placement="left" content={content} className='border-none block  h-14  ' >
                        <Button className=' popoover flex font-[400] text-base font-fontArimo   items-center justify-between w-full    hover:text-[#42B00F]     '><p className='text-sm lg:text-base'>Home & Living </p> <HiChevronRight className=' font-[400] text-base  flex   '></HiChevronRight></Button>
                    </Popover>
                </div>

            </Col>
            <Col xs={24} sm={24} md={18} lg={18} flex="auto" className='  flex items-center'>
                <Row gutter={[4, 4]}  >
                    <Col sm={16} xs={24} >
                        <Image

                            preview={false}
                            src={heroimage}
                        />
                    </Col>
                    <Col sm={8} xs={24} className='flex sm:items-end  justify-between sm:flex-col flex-col gap-2   '>
                        <Image

                            preview={false}
                            src={heroimageside1}

                        />
                        <Image

                            preview={false}
                            src={heroimageside2}
                        />
                    </Col>
                    <Col span={24}>
                        <div className="bg-[#F9F9F9] h-auto mt-1 sm:mt-0 md:h-10  flex items-center justify-start">
                            <div className="h-10 hidden lg:flex">
                                <Image

                                    preview={false}
                                    src={rectangle}
                                />
                            </div>
                            <div className=" flex md:flex-row flex-col md:items-center items-start justify-evenly w-full ">
                                <p className='text-[#444444] font-fontArimo text-sm font-[400] text-center'>Wrap new offers / gift every signle day on Weekends - New Coupon Code: Haapy2023 </p>
                                <button className='bg-buttonColor text-white font-fontArimo text-sm font-[400] p-2 w-full sm:w-28 rounded-lg mt-2 sm:mt-0'>Get Coupon</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default HeroSection