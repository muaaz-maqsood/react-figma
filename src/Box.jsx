import React from 'react'
import IMG from "./images/Rectangle 637.png"
function Box(props) {
  return (
    <div className='h-[299px] w-[390px] '>
        <img src={IMG} alt="" className='h-[56px] w-[56px] mt-4 ml-4' />
        <h5 className='text-[24.906px] text-[#3A3A3A] font-bold py-4 px-4'>{props.data.name}</h5>
        <p className='text-[18px]  font-medium text-[#515A60] w-[350px] px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices facilisi ac leo interdum neque consectetur hendrerit. Enim viverra nisl sodales rhoncus felis. </p>
    </div>
  )
}

export default Box
