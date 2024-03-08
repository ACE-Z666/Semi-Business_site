import React from 'react';
import { ReactTyped,Typed } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white py-20 '>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='md:text-2xl sm:text-xl  text-[#009686] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold  md:py-2 pb-2'>Grow with data.</h1>
      <div className=' md:text-3xl md:pt-4 pb-2 sm:text-2xl sm:pt-2 text-xl flex justify-center font-semibold '><p>Fast, flexible financing for</p>
      <ReactTyped strings={['SMEs', 'Startups', 'Enterprise', 'BTC', 'BTB']} typeSpeed={120} backSpeed={140} loop className='md:text-3xl sm:text-2xl text-xl flex justify-center font-semibold text-[#9df7ee] text-opacity-80 pl-2'/>
      </div>
       <p className='md:text-2xl md:pt-4  sm:text-xl text-2/3xl pt-2 pb-2 text-opacity-65'>Monitor your data Ananlytics to increace revenue for BTB,BTC,& SMEs platforms</p>
       <button onClick={() => {}} className=" hover:bg-[#9df7ee] bg-[#009686] w-[150px] rounded-md font-semibold my-4 mx-auto py-2 text-black">Get Started</button>
      </div>
    </div>
  );
}
export default Hero;
