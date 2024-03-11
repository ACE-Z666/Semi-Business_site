/* eslint-disable no-undef */
import React from 'react'
import { Link } from 'react-scroll';

const Navlink = (
    { href,children}
) => {
  return (
    <div>
    <Link
     
      to={href.slice(1)} 
      spy={true}
      smooth={true}
      offset={-50} 
      className="text-xl hover:underline px-4 py-2"
    >
      
      {children}
    </Link>
    </div>
  )
}

export default Navlink
