import React from 'react';
import im1 from '../images/im1.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-24 px-4 text-opacity-70'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
          <img src={im1} alt=' no img' className='w-[500px] mx-auto my-4'></img>
          <div className='flex flex-col justify-center'>
           <h1 className='md:text-2xl sm:text-xl flex justify-left font-bold uppercase mt-4  text-[#009680]'>Data Analytics Dashboard</h1>
           <h1 className="md:text-4xl sm:text-2xl text-xl font-semibold mt-4 ">Manage Data Analytics Centrally</h1>
           <p className='md:pt-4 sm:pt-3 font-semibold font-sans md:text-xl sm:text-.5xl'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fre. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.  </p>
           <button onClick={() => {}} className=" hover:bg-[#009686] bg-black w-[150px] rounded-md  font-semibold my-4 mx-auto md:mx-0 py-2 text-white">Get Started</button>
          </div>
        </div>
      
    </div>
  );
}

export default Analytics;
