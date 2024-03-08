import React, { useState } from 'react'
import { TfiMenuAlt, TfiClose } from "react-icons/tfi";
const Navbar = () => {
  const [nav, SetNav]= useState(false)
  const handleNav = () => SetNav(!nav)

  return (
    <div className="flex text-white justify-between items-center h-16 max-w-7xl mx-auto">
      <h1 className='w-full text-3xl mx-4 my-0 font-bold text-[#009686] uppercase'>React.</h1>
      <ul className='hidden md:flex space-x-16 font-bold uppercase'>
      <li className="cursor-pointer">Home</li>
      <li className="cursor-pointer">About</li>
      <li className="cursor-pointer">Financing</li>
      <li className="cursor-pointer">Bitcoins</li>
      <li className="cursor-pointer">Contact</li>
      </ul>
      <div className='cursor-pointer mx-4 block md:hidden'>
        {nav ? <TfiClose size={25} onClick={handleNav}/> : <TfiMenuAlt size={25} onClick={handleNav}/>}
        
    
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className='w-full text-3xl mx-4 my-4 font-bold text-[#009686] uppercase'>React.</h1>
      <ul className='my-16 mx-2 space-y-10 font-bold uppercase'>
      <li className="cursor-pointer p-2 border-b border-gray-500">Home</li>
      <li className="cursor-pointer p-2 border-b border-gray-500">About</li>
      <li className="cursor-pointer p-2 border-b border-gray-500">Financing</li>
      <li className="cursor-pointer p-2 border-b border-gray-500">Bitcoins</li>
      <li className="cursor-pointer p-2 border-b border-gray-500">Contact</li>
      </ul>

      </div>
    </div>
  )
}

export default Navbar
