import React, { useEffect, useRef, useState } from 'react'
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import { Image } from 'antd';
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import product3 from "../../assets/product3.png"
import product4 from "../../assets/product4.png"
import product5 from "../../assets/product5.png"
import product6 from "../../assets/product6.png"
import product7 from "../../assets/product7.png"
const ShopbyCatagary = () => {
  const [actvie, setactive] = useState("left")
  const [scrollPosition, setScrollPosition] = useState(0);
  const [LeftisDisable, setLeftisDisable] = useState(false)
  const [RightisDisable, setRightisDisable] = useState(false)

useEffect(() => {

  const container = document.getElementById('container');
  const isScrollAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth;
 if (isScrollAtEnd)
 {
   setRightisDisable(isScrollAtEnd)
   setLeftisDisable(false)
    
  } 
 else {
   setLeftisDisable(false)
   setRightisDisable(false)
  }

  if (scrollPosition === 0)
  {
    setLeftisDisable(true)
    setRightisDisable(false)
    }
}, [scrollPosition, LeftisDisable, RightisDisable])

  const handleScroll = (scrollOffset) => {
    const container = document.getElementById('container');
    const newScrollPosition = scrollPosition + scrollOffset;
    container.scrollLeft = newScrollPosition;
    setScrollPosition(newScrollPosition);
  };
  return (
    <div className=" px-3 md:px-8 lg:px-16 py-5">
      <div className=" flex items-center justify-between border-b-2 pb-2 ">
        <h2 className='relative before:rounded-md before:absolute before:h-1 before:bg-buttonColor before:w-[100%] before:-left-[1px] before:-bottom-[11px]   font-fontArimo font-extrabold text-backgroundBlack text-[20px]'>Shop by Category</h2>
        <div className=" flex items-center justify-center gap-3">
          <button id='scrollLeftButton' disabled={LeftisDisable} onClick={() => {
            setactive("left")
            handleScroll(-50)
          }} className={`${actvie === "left"  ? "bg-buttonColor border-buttonColor border text-white" : "bg-transparent border-buttonColor border text-textColor1"}  w-6 h-6 text-[14px] cursor-pointer outline-none flex items-center justify-center rounded-md`}><HiChevronLeft></HiChevronLeft></button>
          <button id='scrollRightButton' disabled={RightisDisable} onClick={() => {
            setactive("right")
            handleScroll(50)
          }} className={`${actvie === "right" ? "bg-buttonColor text-white border-buttonColor border" : "bg-transparent border-buttonColor border text-textColor1"}  w-6 h-6 text-[14px] flex items-center outline-none justify-center rounded-md`}><HiChevronRight></HiChevronRight></button>
        </div>
      </div>
      <div className="">
        <div id="container" style={{ overflowX: 'auto', overflow: "hidden" }} className={` w-full py-10 px-3 overflow-auto flex items-start justify-start gap-10`} >
        

          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product1} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Men</p>
              <p className='font-fontArimo text-sm text-center text-textColor1 leading-3'>Clothing </p>
            </div>
          </div>
          


          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product2} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Women’s
                </p>
              <p className='font-fontArimo text-sm text-center text-textColor1 leading-3'>Clothing </p>
            </div>
          </div>



          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product3} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Television</p>
            </div>
          </div>



          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product4} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Security
                </p>
              <p className='font-fontArimo text-sm text-center text-textColor1 leading-3'>System </p>
            </div>
          </div>



          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product7} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Sunglass &
                </p>
              <p className='font-fontArimo text-sm text-center text-textColor1 leading-3'>Eyewear </p>
            </div>
          </div>
          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product5} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Jesrcy
              </p>
            </div>
          </div>


          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product6} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Toys and
                </p>
              <p className='font-fontArimo text-sm text-center text-textColor1 leading-3'>Games </p>
            </div>
          </div>


          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product1} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>T-shirts</p>
            </div>
          </div>
          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product4} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Security
              </p>
              <p className='font-fontArimo text-sm text-center text-textColor1 leading-3'>System </p>
            </div>
          </div>



          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product7} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Sunglass &
              </p>
              <p className='font-fontArimo text-sm text-center text-textColor1 leading-3'>Eyewear </p>
            </div>
          </div>
          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product5} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Jesrcy
              </p>
            </div>
          </div>


          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product6} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>Toys and
              </p>
              <p className='font-fontArimo text-sm text-center text-textColor1 leading-3'>Games </p>
            </div>
          </div>


          <div className="shadow-shadow border rounded-md cursor-pointer bg-white  w-24  min-h-24 h-24 flex items-center justify-center flex-col">
            <div className="h-16 w-24  flex items-center justify-center ">
              <Image src={product1} alt='product' className='h-16  ' preview={false}></Image>
            </div>
            <div className="h-14 w-24 ">
              <p className='font-fontArimo p-0 m-0 h-4 leading-3  text-sm text-center text-textColor1'>T-shirts</p>
            </div>
          </div>
        
        

          

          

          
          
         
        
      
         

         




        </div>
      </div>

    </div>
  )
}

export default ShopbyCatagary