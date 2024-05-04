import React from 'react';
import { TfiUser } from "react-icons/tfi";

const Cards = () => {
  return (

    <div id='Cards' className="bg-white w-full px-4 py-36">
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-20'>
        <div className='w-full p-4 rounded-lg  shadow-lg shadow-gray-400 flex flex-col hover:scale-105 duration-300'>
                <TfiUser size={70} className='mx-auto mt-8'/>
                <h2 className='text-3xl font-semibold py-8 text-center mx-auto'>Single User</h2>
                <p className=' text-center text-4xl font-bold'>Only 799/-</p>
              <div className='py-4'>
                <p className='text-center text-xl border-b border-gray-300 mx-12 mt-4 font-semibold'>500GB Storage</p>
                <p className='text-center text-xl border-b border-gray-300 mx-12 mt-4 font-semibold'>1 Granted User</p>
                <p className='text-center text-xl border-b border-gray-300 mx-12 mt-4 font-semibold'>Send upto 2GB</p>
            </div>
            <button className="hover:bg-[#79dad5] bg-[#009686] w-[150px] rounded-md font-semibold my-4 py-2 text-black border border-black mx-auto">Start Trial</button>
        </div>
        <div className='w-full p-4 rounded-lg  shadow-lg shadow-gray-400 flex flex-col hover:scale-125 duration-300 mt-8 scale-110'>
                <TfiUser size={70} className='mx-auto ' />
                <h2 className='text-3xl font-semibold py-8 text-center mx-auto'>Single User</h2>
                <p className=' text-center text-4xl font-bold'>Only 799/-</p>
              <div className='py-4'>
                <p className='text-center text-xl border-b border-gray-300 mx-12 mt-4 font-semibold'>500GB Storage</p>
                <p className='text-center text-xl border-b border-gray-300 mx-12 mt-4 font-semibold'>1 Granted User</p>
                <p className='text-center text-xl border-b border-gray-300 mx-12 mt-4 font-semibold'>Send upto 2GB</p>
            </div>
            <button className="hover:bg-[#ffffff] bg-[#000000] w-[150px] rounded-md font-semibold my-4 py-2 text-[#009686] border border-black mx-auto">Start Trial</button>
        </div>
        <div className='w-full p-4 rounded-lg  shadow-lg shadow-gray-400 flex flex-col hover:scale-105 duration-300 mt-8'>
                <TfiUser size={70} className='mx-auto ' />
                <h2 className='text-3xl font-semibold py-8 text-center mx-auto'>Single User</h2>
                <p className=' text-center text-4xl font-bold'>Only 799/-</p>
              <div className='py-4'>
                <p className='text-center text-xl border-b border-gray-300 mx-12 mt-4 font-semibold'>500GB Storage</p>
                <p className='text-center text-xl border-b border-gray-300 mx-12 mt-4 font-semibold'>1 Granted User</p>
                <p className='text-center text-xl border-b border-gray-300 mx-12 mt-4 font-semibold'>Send upto 2GB</p>
            </div>
            <button className="hover:bg-[#79dad5] bg-[#009686] w-[150px] rounded-md font-semibold my-4 py-2 text-black border border-black mx-auto">Start Trial</button>
        </div>

      </div>
    </div>
  );
}

export default Cards;
