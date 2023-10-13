import React from 'react'
import Box from './Box'

function SectionThree() {
  return (
    <div className='w-[100%] pb-28 '>
        <h3 className='text-[40px] font-bold text-center py-10 text-[#092232]'>Make the world your comfort zone</h3>
        <div className=' w-[100%] sm:w-[90%] mx-auto py-4 flex flex-wrap gap-6 justify-center'>
                <Box data={{name:"Expert Tutors"}}/>
                <Box data={{name:"Verified Tutors"}}/>
                <Box data={{name:"Learn Anytime"}}/>
                <Box data={{name:"Affordable Prices"}}/>     
        </div>
    </div>
  )
}

export default SectionThree
