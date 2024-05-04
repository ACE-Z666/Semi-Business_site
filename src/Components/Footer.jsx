import React from 'react';
import { TfiTwitterAlt, TfiFacebook, TfiLinkedin, TfiInstagram } from "react-icons/tfi";

const Footer = () => {
  return (
    <div id='Footer' className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl my-0 font-bold text-[#009686] uppercase'>Eclipso</h1>
            <p className='py-4'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <div className=' flex space-x-12 my-6'>
            <TfiTwitterAlt size={25}/>
            <TfiFacebook size={25}/>
            <TfiLinkedin size={25}/>
            <TfiInstagram size={25}/>
        </div>


        </div>
      
        <div className='lg:col-span-2 flex justify-between mx-6 md:mt-6'>
            <div>
              <h6 className='text-gray-400 font-semibold pb-2'>Solutions</h6>
              <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'> Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
                
              </ul>

            </div>

            <div>
              <h6 className='text-gray-400 font-semibold pb-2'>Support</h6>
              <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>Status</li>
                
              </ul>

            </div>

            <div>
              <h6 className='text-gray-400 font-semibold pb-2'>Company</h6>
              <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blogs</li>
                <li className='py-2 text-sm'> Jobs</li>
                <li className='py-2 text-sm'> Contact</li>
                <li className='py-2 text-sm'> Career</li>
                
              </ul>

            </div>

            <div>
              <h6 className='text-gray-400 font-semibold pb-2'>Legal</h6>
              <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
                
                
              </ul>

            </div>
        </div>
     
    </div>
  );
}

export default Footer;
