import React from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs";
import Img2 from "./images/White-in-Basic4.png"
import Navbar from './Navbar';



function FirstSec() {
  return (
    <>
            <div className='h-auto bg-[#047585]'>
                <Navbar />
                <div className='w-[100%] mx-auto h-auto mt-10'>
                    <h1 className='text-[#FEECC0] text-center text-[50px] sm:text-[70px] md:[90px] md:ml-[-30px] lg:text-[122px] leading-[146.4px] font-black '>
                        Shimentor
                    </h1>
                    <h2 className='text-[20px] text-center px-[50px]  mt-[-20px] sm: md:ml-[-70px] font-bold lg:text-[30px] lg:leading-[36px]  lg:text-center text-white'>
                        By the students of <span>today</span>,
                    </h2>
                    <h3 className='text-[20px] px-[50px]  text-center md:ml-[-70px] font-semibold lg:text-[30px] lg:leading-[36px] lg:text-center text-white'>
                        For the students of <span>tomorrow</span>
                    </h3>
                    <h4 className=' text-[13px] text-center px-[35px] mt-[15px] sm: md:ml-[-80px] font-medium lg:text-[20px] lg:leading-[24px] lg:text-center text-white lg:mt-8'>
                        Tutoring and mentorship <span className='bgspan p-1'>for IB/A-Level students</span>
                    </h4>
                    
                </div>
                <div className='inp w-auto mt-8 lg:w-[820px] h-[66px] rounded-[12px] bg-[#228E9E]  mx-auto lg:mt-8'>
                    <input className='inp1 w-[95%] sm: lg:w-[795px] bg-[#228E9E] h-[50px] rounded-[12px] mt-2 ml-3 text-center' type="text"
                        placeholder='' />
                    <div className='lg:flex'>
                        <AiOutlineSearch className='w-[20px] mt-[-33px] ml-5 sm:text-white lg:w-[21.26px] h-[20.87px] lg:mt-[-33px] lg:ml-8'/>
                        <h1 className='heading2 text-[12px] mt-[-22px] ml-14 sm:text-[18px] lg:w-[480px] font-medium lg:text-[22px] lg:leading-[30px] text-white lg:mt-[-40px] lg:ml-8'>
                            Course title or keyword
                        </h1>
                        <h2 className='text-white  mt-[-22px] ml-48 sm:ml-96 sm:text-[22px] sm:mt-[-32px] md:ml-[500px] lg:mt-[-40px] lg:ml-5 lg:text-[22px] lg:leading-[30px] font-light'>
                            Location
                        </h2>
                        <div className='icondiv  w-[45px] h-[45px] ml-[260px] mt-[-32px] p-1 sm:ml-[565px] sm:mt-[-41px] md:ml-[685px] lg:w-[60px] lg:h-[50px]  lg:mt-[-49px] rounded-[12px] lg:ml-[82px]'>
                            <BsArrowRight className=' mx-auto w-[25px] mt-2 text-white h-[25px] sm: lg:w-[30px] lg:h-[30px] lg:mx-auto lg:mt-2'/>
                        </div>
                    </div>
                </div>
                <img className='Img2 w-[341px] mx-auto mt-12' src={Img2} placeholder=''/>





            </div>
        </>

  )
}

export default FirstSec
