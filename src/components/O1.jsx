import React, { useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { motion, useAnimation } from 'framer-motion';

function O1() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    controls1.start({ opacity: 1, y: 0 });
    controls2.start({ opacity: 1, y: 0 });
    controls3.start({ opacity: 1 });
  }, [controls1, controls2, controls3]);

  return (
    <div className='w-full h-[85vh] flex justify-center items-center flex-col mx-auto max-w-[1100px] pl-10 pr-10'>
      <div className='flex flex-col justify-center items-center w-3/4 md:pl-20 md:pr-20 sm:'>

        <motion.p
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
          className='h-auto text-blue-900 font-normal leading-[0.9] tracking-[-12px] text-center sm:text-[100px] md:text-[120px] exsm:text-[80px] exsm:text-[70px] exsm:tracking-[-6px] mt-[50px]'>
          Exceptional <br /> Webflow sites.
        </motion.p>

        <motion.p
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.3, delay:0.05 }}
          className='text-xl text-[#687076] font-medium text-center mt-10 sm:text-[18px] exsm:text-[15px]'>
          High-end Webflow development for design-driven companies
          <br /> where attention to detail and passionate dedication matter.
        </motion.p>

      </div>
      <motion.button
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.3, delay:0.1 }}
        className='h-8 w-auto text-niebieski flex justify-end items-center font-medium text-lg mt-10 sm:text-[16px] exsm:text-[15px]'>
        Start a project request <IoIosArrowForward />
      </motion.button>
    </div>
  )
}

export default O1;
