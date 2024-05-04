import React, { useState } from 'react';
import { Link } from 'react-scroll'
import { TfiMenuAlt, TfiClose } from "react-icons/tfi";
const Navbar = () => {
  const [nav, SetNav]= useState(false)
  const handleNav = () => SetNav(!nav)

  
  return (

    <div>
      <nav className='fixed top-0 left-0 w-full bg-black bg-opacity-65 backdrop-blur-7 z-10'><div className="flex text-white justify-between items-center h-16 max-w-7xl mx-auto">
      <h1 className='w-full text-3xl mx-4 my-0 font-bold text-[#009686] uppercase'>Eclipso</h1>
      <ul className="hidden md:flex space-x-16 font-bold uppercase">
        <li className="cursor-pointer"><Link to="Home" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Home</Link></li>
        <li className="cursor-pointer"><Link to="Analytics" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Dashboard</Link></li>
        <li className="cursor-pointer"><Link to="Cards" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Plans</Link></li>
        <li className="cursor-pointer"><Link to="Newsletters" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Connect</Link></li>
      </ul></div></nav>
      <div className='cursor-pointer mx-4 block md:hidden'>
        {nav ? <TfiClose size={25} onClick={handleNav}/> : <TfiMenuAlt size={25} onClick={handleNav}/>}
        
    
      </div><nav className='fixed top-0 left-0 w-full bg-black bg-opacity-65 backdrop-blur-7 z-10'>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <h1 className='w-full text-3xl mx-4 my-4 font-bold text-[#009686] uppercase'>Eclipso</h1>
      <ul className='my-16 mx-2 space-y-10 font-bold uppercase'>
      <li className="cursor-pointer p-2 border-b border-gray-500"><Link to="Hero" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Home</Link></li>
      <li className="cursor-pointer p-2 border-b border-gray-500"><Link to="Analytics" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Dashboard</Link></li>
      <li className="cursor-pointer p-2 border-b border-gray-500"><Link to="Cards" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Plans</Link></li>
      <li className="cursor-pointer p-2 border-b border-gray-500"><Link to="Newsletters" spy={true} smooth={true} offset={-50} className="text-xl px-4 py-4">Connect</Link></li>
    </ul></div>
     </nav>
    </div>
   
  )}
export default Navbar