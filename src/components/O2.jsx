import React from 'react'
import Icon1 from './Icon1.svg';
import Icon2 from './icon2.svg';
import Icon3 from './icon3.svg';
import Icon4 from './icon4.svg';
import Icon5 from './icon5.svg';
import Icon6 from './icon6.svg';

function O2() {
  return (
    <div className='h-[12dvh] w-full mx-auto max-w-[1100px] pl-32 pr-32 flex justify-center exsm:pl-10 exsm:pr-10'>
        <div className='w-[100%] h-[12dvh] flex justify-between items-center max-w-[1100px] exsm:flex-col md:flex-row exsm:w-[100%]'>
<div className='flex w-1/2  exsm:w-full exsm:h-1/2  sm:bg-transparent'>

        <div className='w-[33%] h-full flex items-center justify-center'>
            <img className='w-3/4 h-1/2' src = {Icon1}></img>
        </div>
        <div className='w-[33%] h-full flex items-center justify-center'>
        <img className=' w-3/4 h-1/2' src = {Icon2}></img>
        </div>
        <div className='w-[33%] h-full flex items-center justify-center'>
        <img className='w-3/4 h-1/2' src = {Icon3}></img>
        </div>
        </div> 

<div className='flex h-20 w-1/2  exsm:w-full exsm:h-1/2'>
        <div className='w-[33%] h-full flex items-center justify-center '>
        <img className='w-3/4 h-1/2' src = {Icon4}></img>
        </div>
        <div className='w-[33%]  h-full flex items-center justify-center'>
        <img className='w-1/2 h-1/2' src = {Icon5}></img>
        </div>
        <div className='w-[33%]  h-full flex items-center justify-center'>
        <img className='w-1/2 h-1/2' src = {Icon6}></img>
        </div>
        </div>
        </div>

    </div>
  )
}

export default O2