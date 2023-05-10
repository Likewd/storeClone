import React, { useEffect, useRef, useState } from 'react'
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { Image } from 'antd';
import storeLogo1 from "../../assets/storeLogo1.png"
import storeLogo2 from "../../assets/storeLogo2.png"


const PapulerStoreName = () => {

    const [actvie, setactive] = useState("leftstore")
    const [scrollPosition, setScrollPosition] = useState(0);
    const [LeftisDisable, setLeftisDisable] = useState(false)
    const [RightisDisable, setRightisDisable] = useState(false)

    useEffect(() => {

        const container = document.getElementById('containerStore');
        const isScrollAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth;
        if (isScrollAtEnd) {
            setRightisDisable(isScrollAtEnd)
            setLeftisDisable(false)

        }
        else {
            setLeftisDisable(false)
            setRightisDisable(false)
        }

        if (scrollPosition === 0) {
            setLeftisDisable(true)
            setRightisDisable(false)
        }
    }, [scrollPosition, LeftisDisable, RightisDisable])

    const handleScroll = (scrollOffset) => {
        const container = document.getElementById('containerStore');
        const newScrollPosition = scrollPosition + scrollOffset;
        container.scrollLeft = newScrollPosition;
        setScrollPosition(newScrollPosition);
    };
  return (
      <div className=" px-3 md:px-8 lg:px-16 py-5">
          <div className=" flex items-center justify-between border-b-2 pb-2 ">
              <h2 className='relative before:rounded-md before:absolute before:h-1 before:bg-buttonColor before:w-[100%] before:-left-[1px] before:-bottom-[11px]   font-fontArimo font-extrabold text-backgroundBlack text-[20px]'>Popular Store Name</h2>
              <div className=" flex items-center justify-center gap-3">
                  <button  disabled={LeftisDisable} onClick={() => {
                      setactive("leftstore")
                      handleScroll(-50)
                  }} className={`${actvie === "leftstore" ? "bg-buttonColor border-buttonColor border text-white" : "bg-transparent border-buttonColor border text-textColor1"}  w-6 h-6 text-[14px] cursor-pointer outline-none flex items-center justify-center rounded-md`}><HiChevronLeft></HiChevronLeft></button>
                  <button  disabled={RightisDisable} onClick={() => {
                      setactive("rightstore")
                      handleScroll(50)
                  }} className={`${actvie === "rightstore" ? "bg-buttonColor text-white border-buttonColor border" : "bg-transparent border-buttonColor border text-textColor1"}  w-6 h-6 text-[14px] flex items-center outline-none justify-center rounded-md`}><HiChevronRight></HiChevronRight></button>
              </div>
          </div>

          <div className="">
              <div id="containerStore" style={{ overflowX: 'auto', overflow: "hidden" }} className={` w-full py-10 px-3 overflow-auto flex items-start justify-start gap-10`} >


                  <div className="cursor-pointer  min-w-[150px]  bg-white   min-h-24  h-24 flex items-center justify-center flex-col">
                      <div className="  flex items-center justify-center  ">
                          <Image src={storeLogo1} alt='product' className='h-auto  ' preview={false}></Image>
                      </div>
                      <div className="">
                          <p className='font-fontArimo py-1 m-0 leading-3 font-extrabold  text-base text-center text-black'>Devon Lane</p>
                      </div>
                  </div>

                  <div className="cursor-pointer min-w-[150px] bg-white   min-h-24 h-24 flex items-center justify-center flex-col">
                      <div className="  flex items-center justify-center  ">
                          <Image src={storeLogo2} alt='product' className=' ' preview={false}></Image>
                      </div>
                      <div className="">
                          <p className='font-fontArimo py-1 m-0 leading-3 font-extrabold  text-base text-center text-black'>Guy Hawkins</p>
                      </div>
                  </div>


                  <div className="cursor-pointer  min-w-[150px] bg-white   min-h-24  h-24 flex items-center justify-center flex-col">
                      <div className="  flex items-center justify-center  ">
                          <Image src={storeLogo1} alt='product' className=' ' preview={false}></Image>
                      </div>
                      <div className="">
                          <p className='font-fontArimo py-1 m-0 leading-3 font-extrabold  text-base text-center text-black'>Jane Cooper</p>
                      </div>
                  </div>


                  <div className="cursor-pointer   min-w-[150px] bg-white   min-h-24  h-24 flex items-center justify-center flex-col">
                      <div className="  flex items-center justify-center  ">
                          <Image src={storeLogo2} alt='product' className='h-auto  ' preview={false}></Image>
                      </div>
                      <div className="">
                          <p className='font-fontArimo  py-1 m-0 leading-3 font-extrabold  text-base text-center text-black'>Darlene Robertson</p>
                      </div>
                  </div>

                  <div className="cursor-pointer  min-w-[150px] bg-white   min-h-24  h-24 flex items-center justify-center flex-col">
                      <div className="  flex items-center justify-center  ">
                          <Image src={storeLogo1} alt='product' className=' ' preview={false}></Image>
                      </div>
                      <div className="">
                          <p className='font-fontArimo py-1 m-0 leading-3 font-extrabold  text-base text-center text-black'>Guy Hawkins</p>
                      </div>
                  </div>


                  <div className="cursor-pointer min-w-[150px] bg-white   min-h-24  h-24 flex items-center justify-center flex-col">
                      <div className="  flex items-center justify-center  ">
                          <Image src={storeLogo2} alt='product' className=' ' preview={false}></Image>
                      </div>
                      <div className="">
                          <p className='font-fontArimo py-1 m-0 leading-3 font-extrabold  text-base text-center text-black'>Darlene Robertson</p>
                      </div>
                  </div>

                  



                  <div className="cursor-pointer  min-w-[150px]  bg-white   min-h-24  h-24 flex items-center justify-center flex-col">
                      <div className="  flex items-center justify-center  ">
                          <Image src={storeLogo1} alt='product' className='h-auto  ' preview={false}></Image>
                      </div>
                      <div className="">
                          <p className='font-fontArimo py-1 m-0 leading-3 font-extrabold  text-base text-center text-black'>Devon Lane</p>
                      </div>
                  </div>

                  <div className="cursor-pointer  min-w-[150px]  bg-white   min-h-24  h-24 flex items-center justify-center flex-col">
                      <div className="  flex items-center justify-center  ">
                          <Image src={storeLogo2} alt='product' className=' ' preview={false}></Image>
                      </div>
                      <div className="">
                          <p className='font-fontArimo py-1 m-0 leading-3 font-extrabold  text-base text-center text-black'>Guy Hawkins</p>
                      </div>
                  </div>


                  <div className="cursor-pointer  min-w-[150px]  bg-white   min-h-24  h-24 flex items-center justify-center flex-col">
                      <div className="  flex items-center justify-center  ">
                          <Image src={storeLogo1} alt='product' className=' ' preview={false}></Image>
                      </div>
                      <div className="">
                          <p className='font-fontArimo py-1 m-0 leading-3 font-extrabold  text-base text-center text-black'>Jane Cooper</p>
                      </div>
                  </div>


                  <div className="cursor-pointer   min-w-[150px] bg-white   min-h-24  h-24 flex items-center justify-center flex-col">
                      <div className="  flex items-center justify-center  ">
                          <Image src={storeLogo2} alt='product' className='h-auto  ' preview={false}></Image>
                      </div>
                      <div className="">
                          <p className='font-fontArimo py-1 m-0 leading-3 font-extrabold  text-base text-center text-black'>Darlene Robertson</p>
                      </div>
                  </div>

               

               




















              </div>
          </div>
          </div>
  )
}

export default PapulerStoreName