import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlinePlus } from "react-icons/ai";
import { PageLink } from '../../assets/data'
const UserNavigation = () => {
  const [toggle, settoggle] = useState(false);
  const [active, setactive] = useState("home");

  return (
    <header className='border px-3 md:px-8 lg:px-16 relative bg-[#151515]   h-16 flex items-center justify-between '>
      {/* DeskTop Version  */}

      <div className=" justify-between hidden sm:flex items-center  w-[90%] overflow-y-auto   ">
        <ul className="list-none flex  flex-row gap-10">
          {PageLink.map((title) => (
            <li
              key={title.id}
              onClick={() => {
                setactive(title.id);
              }}
              className={` transitionAll ${active === title.id ? "text-backgroundgreen" : "text-white"
                } text-base  font-[400]  font-fontArimo  hover:text-backgroundgreen`}
            >
              <a href={`#${title.id}`} className>
                {" "}
                {title.title}
              </a>
            </li>
          ))}
        </ul>

      </div>
      <div className="bg-green-500  rounded-xl h-12 p-4 ml-2 text-white flex items-center justify-center ">
        <AiOutlinePlus className='text-white text-xl'></AiOutlinePlus>    <span className='font-fontArimo text-[22px]'>Post</span>
      </div>

      {/* Mobile Version  */}
      <div className="flex sm:hidden  justify-between items-center">
        <div className="relative flex   justify-end items-center ">
          {toggle === false ? (
            <AiOutlineMenu
              className={`text-xl block cursor-pointer text-white`}
              onClick={() => settoggle(!toggle)}
            ></AiOutlineMenu>
          ) : (
            <AiOutlineClose
              className={`text-xl block cursor-pointer text-white`}
              onClick={() => settoggle(!toggle)}
            ></AiOutlineClose>
          )}
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 absolute top-10 right-0 bg-black   w-[300px] z-10`}
          >
            <ul className="list-none  flex flex-col gap-5">
              {PageLink.map((title) => (
                <li
                  key={title.id}
                  onClick={() => {
                    settoggle(false);
                    setactive(title.id);
                  }}
                  className={` transitionAll ${active === title.id ? "text-green-500" : "text-white"
                    } text-base decoration-2 font-bold  font-fontRoboto  hover:text-HeaderText  hover:underline`}
                >
                  <a href={`#${title.id}`} className>
                    {" "}
                    {title.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </header>
  )
}

export default UserNavigation