import React from 'react';

const Newsletters = () => {
  return (
    <div className='w-full py-16 text-white'>
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 lg:col-span-2">
        <div className="lg:col-span-2 md:col-span-2 my-4 mx-4 items-left">
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p className='font-semibold sm:mt-2 mt-1'>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-6'>
        <div className="flex flex-col sm:flex-row md:items-center sm:items-center mx-4 justify-between w-full">
            <input type='email' placeholder='Enter Email' className='input font-sans text-gray-700 bg-white rounded-lg shadow-md px-4 py-4 max-w-7xl mx-0 transition duration-400 ease-in-out w-11/12  sm:mt-2 flex'></input>
            
            <button onClick={() => {}} className="hover:bg-[#7fd6cd] bg-[#009686] w-[150px] rounded-md font-semibold md:mx-4 my-4 py-2 text-black " >Notify Me</button>
            
        </div>
        <p className='font-semibold ml-4 my-2 '>We care about the protection of your data. Read our <span className='text-[#009686]'>Privacy Policy.</span></p>
       </div>
      </div>
    </div>
  );
}
export default Newsletters;
