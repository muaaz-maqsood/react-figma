import React from 'react'
import img1 from "./images/Mask Group 1.png"
function Navbar() {
  return (
    <>
    <div className='w-full h-[91px] flex justify-between items-center px-8'>
        <img src={img1} alt='' />
        <ul className='hidden sm: lg:block text-white lg:flex lg:gap-10 lg:items-center font-medium text-[20px] leading-[24px]'>
            <li>About us</li>
            <li>Tutors</li>
            <li>Conferences</li>
            <li>Institutions</li>
        <button className='signupbtn w-[153px] h-[50px] rounded-[12px] text-white font-medium text-[18px] leading-[21.6px]'>Sign Up</button>
        </ul>
    </div>
</>
  )
}

export default Navbar
