import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

function Navbar() {
  return (
<div className=' sm:text-base w-full h-12 mx-auto z-50 flex justify-between items-center fixed left-1/2 transform -translate-x-1/2 backdrop-filter backdrop-blur-15 lg:p-0 md:pl-5 sm:pl-5 sm:pr-5 exsm:pl-5 exsm:pr-5 exsm:text-sm      backdrop-blur-lg      ' >

<div class="w-full max-w-[1100px]  flex justify-between items-center mx-auto h-full border-b border-solid border-borderColor ">

  <div className='exsm:text-base font-[500] tracking-[-1.6px] sm:text-xl text-[#11181c]'>Dominik Lewicki</div>

  <ul className="hidden  md:flex bg-transparent lg:bg-transparent h-10 items-center   text-[#687076]" >

  <li className='p-3'>Home</li>
  <li className='p-3'>About</li>
  <li className='p-3'>Contact</li>
  <li className='p-3'>Process</li>

</ul>

  <button className='h-8 w-auto text-niebieski flex justify-end items-center font-medium '  >Project request 
<div className='text-xl'> <IoIosArrowForward />
</div>
  </button>

</div>


</div>
  )
}

export default Navbar