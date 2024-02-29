import React, { useState } from 'react';
import "./O5.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from 'framer-motion';

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
      
        
        <div className={`slajd slajd1 ${currentSlide === 1 ? 'active' : ''}`}>eeeec huj 1</div>
        <div className={`slajd slajd1 ${currentSlide === 2 ? 'active' : ''}`}>eeeec huj 2</div>
        <div className={`slajd slajd1 ${currentSlide === 3 ? 'active' : ''}`}>eeeec huj 3</div>
        <div className={`slajd slajd2 ${currentSlide === 4 ? 'active' : ''}`}>eeeeeeeeeeeeee4</div>
        <div className={`slajd slajd3 ${currentSlide === 5 ? 'active' : ''}`}>ppppppppppppp5</div>
        

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
