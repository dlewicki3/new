import React, { useState } from 'react';
import "./O5.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from 'framer-motion';
import I1 from './I1.webp';
import I2 from './I2.webp';
import I3 from './I3.jpeg';
import I4 from './I4.webp';




function O5() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 5 ? 1 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 5 : prevSlide - 1));
  };

  return (
    <div className="o5">
      <div className="k5">
        <div className="slider">
      
        
        <div className={`slajd slajd1 ${currentSlide === 1 ? 'active' : ''}`}>
          <div className="fotka">
            <img className='foto5' src = {I1}></img>
          </div>
        </div>
        <div className={`slajd slajd1 ${currentSlide === 2 ? 'active' : ''}`}>
        <div className="fotka">
            <img className='foto5' src = {I2}></img>
          </div>
        </div>
        <div className={`slajd slajd1 ${currentSlide === 3 ? 'active' : ''}`}> 
        <div className="fotka">
            <img className='foto5' src = {I4}></img>
          </div></div>
        <div className={`slajd slajd2 ${currentSlide === 4 ? 'active' : ''}`}>
        <div className="fotka">
            <img className='foto5' src = {I3}></img>
          </div>
        </div>
        <div className={`slajd slajd3 ${currentSlide === 5 ? 'active' : ''}`}>
        <div className="fotka">
            <img className='foto5' src = {I2}></img>
          </div>
        </div>
        

        <div className="na-btn5">
        <motion.button className='lewy-btn5' onClick={prevSlide}
       whileHover={{ scale: 1.1,  }}
       whileTap={{ scale: 0.9 }}
       transition={{ type: "spring", stiffness: 600, damping: 20 }}
        >
          <IoIosArrowBack />
        </motion.button>
        <motion.button className='prawy-btn5' onClick={nextSlide}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <IoIosArrowForward />
        </motion.button>
        </div>

        </div>
        <div className="kropki">
          <span className={`kropka ${currentSlide === 1 ? 'active' : ''}`}></span>
          <span className={`kropka ${currentSlide === 2 ? 'active' : ''}`}></span>
          <span className={`kropka ${currentSlide === 3 ? 'active' : ''}`}></span>
          <span className={`kropka ${currentSlide === 4 ? 'active' : ''}`}></span>
          <span className={`kropka ${currentSlide === 5 ? 'active' : ''}`}></span>
        </div>
      </div>
    </div>
  );
}

export default O5;
