import React from 'react'
import img2 from "./images/image 43.png"
function SectionTwo() {
    return (
        <div className='h-auto w-[100%]  flex flex-col  md:flex-row flex-wrap '>
            <div className='w-[98%] lg:w-[50%] h-[713px] flex justify-center items-center'>
                <div className='w-[93%] px-7 h-auto '>
                    <h1 className='text-[#092232] text-[30px] md:text-[40px] lg:text-[3rem] font-bold w-[95%] lg:w-[565px]'>High school is hard
                        Getting into a good university is even harder</h1>
                    <p className='text-[26px] text-[#092232] mt-2'>Academic Success just got a bit easier with</p>
                    <button className='w-[250px] h-[60px] bg-[#027080] text-white mt-4 rounded-[12px]'>Learn More</button>
                </div>
            </div>

            <div className='w-[98%] lg:w-[50%] h-auto lg:h-[713px] flex items-center justify-center'>
                <div className='w-[806px] h-[604px]'>
                    <img src={img2} alt="" />
                </div>
            </div>


        </div>
    )
}

export default SectionTwo
