import React, { useEffect } from 'react';
import Icon1 from './Icon1.svg';
import Icon2 from './icon2.svg';
import Icon3 from './icon3.svg';
import Icon4 from './icon4.svg';
import Icon5 from './icon5.svg';
import Icon6 from './icon6.svg';
import { motion, useAnimation } from 'framer-motion';

function O2() {
  const controls1 = useAnimation();
  useEffect(() => {
    controls1.start({ opacity: 1, y: 0 });
  }, [controls1]);
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay:0.11 }}
    className='h-[12dvh] w-full mx-auto max-w-[1100px] pl-32 pr-32 flex justify-center exsm:pl-10 exsm:pr-10'>
      <div className='w-[100%] h-[12dvh] flex justify-between items-center max-w-[1100px] exsm:flex-col md:flex-row exsm:w-[100%]'>
        <div className='flex w-1/2 exsm:w-full exsm:h-[90px]sm:bg-transparent'>
          <div className='w-[33%] h-full flex items-center justify-center '>
            <img className='w-3/4 h-[30px]' src={Icon1} loading='lazy' alt='Icon 1' />
          </div>
          <div className='w-[33%] h-full flex items-center justify-center '>
            <img className='w-3/4 h-[30px]' src={Icon2} loading='lazy' alt='Icon 2' />
          </div>
          <div className='w-[33%] h-full flex items-center justify-center'>
            <img className='w-3/4 h-[30px]' src={Icon3} loading='lazy' alt='Icon 3' />
          </div>
        </div>
        <div className='flex h-20 w-1/2 exsm:w-full exsm:h-[90px]'>
          <div className='w-[33%] h-full flex items-center justify-center '>
            <img className='w-3/4 h-[30px]' src={Icon4} loading='lazy' alt='Icon 4' />
          </div>
          <div className='w-[33%] h-full flex items-center justify-center'>
            <img className='w-1/2 h-[30px]' src={Icon5} loading='lazy' alt='Icon 5' />
          </div>
          <div className='w-[33%] h-full flex items-center justify-center'>
            <img className='w-1/2 h-[30px]' src={Icon6} loading='lazy' alt='Icon 6' />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default O2;
