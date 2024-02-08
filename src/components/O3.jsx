import React from 'react';
import sand from './sand.webp';

function O3() {
  return (
    <div className='mx-auto max-w-[1100px]  xl:h-[75dvh] flex items-center'>
      <div className='w-full h-[100%]  flex justify-center md:pl-20 md:pr-20 sm:bg-pink-400 md:bg-transparent sm:pl-10 sm:pr-10 exsm:pl-10 exsm:pr-10 lg:h-[60dvh] xl:bg-green-600 exsm:w-[100%]'>
        <img className='max-w-full h-auto sm:h-[100%]  ' src={sand} alt="Piasek"></img>
      </div>
    </div>
  );
}

export default O3;
