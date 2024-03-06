import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './O4.css'; // Import stylów CSS
import I1 from './I1.webp';
import I2 from './I2.webp';
import I3 from './I3.jpeg';
import I4 from './I4.webp';
import { MdClose } from "react-icons/md";
import { TiPlus } from "react-icons/ti";


function O4() {
  // Stan do śledzenia otwarcia modala i widoczności anime2, anime3 i anime4
  const [isOpen, setIsOpen] = useState(false);
  const [isAnime2Visible, setIsAnime2Visible] = useState(false);
  const [isAnime3Visible, setIsAnime3Visible] = useState(false);
  const [isAnime4Visible, setIsAnime4Visible] = useState(false);

  // Funkcja do zamknięcia wszystkich modali
  const handleCloseButtonClick = () => {
    setIsOpen(false);
    setIsAnime2Visible(false);
    setIsAnime3Visible(false);
    setIsAnime4Visible(false);
  };

  // Funkcja do otwarcia głównego modala
  const handleAnimationButtonClick = () => {
    setIsOpen(true);
  };

  // Funkcja do przełączania widoczności 
  const handleAnime2Click = () => {
    setIsAnime2Visible(!isAnime2Visible);
  };

  // Funkcja do przełączania widoczności 
  const handleAnime3Click = () => {
    setIsAnime3Visible(!isAnime3Visible);
  };

  // Funkcja do przełączania widoczności 
  const handleAnime4Click = () => {
    setIsAnime4Visible(!isAnime4Visible);
  };

  return (
    <div className="o4">
      <p className='big-txt4'>A small selection<br></br> of my work.</p>
      {/* Kontener dla całego modala */}
      <div className="k4">
        {/* Górna część modala */}
        <div className="gora44">
          {/* Kwadrat - główny przycisk otwierający modal */}
          <motion.div className="square1" onClick={handleAnimationButtonClick}>
            <motion.div className="na-foto4" whileHover={{ width: '95%' }} >
              <img className='foto4' src= {I1} alt="I1"></img>
            </motion.div>
          </motion.div>
          {/* Drugi kwadrat - przycisk otwierający anime2 */}
          <motion.div className="kwa44" onClick={handleAnime2Click}>
            <motion.div className="na-foto4" whileHover={{ width: '95%' }} >
              <img className='foto4' src= {I2} alt="I2"></img>
            </motion.div>
          </motion.div>
        </div>
        {/* Dolna część modala */}
        <div className="dol44">
          {/* Elementy dolnej części */}
          <motion.div className="kwa44-dol" onClick={handleAnime3Click}>
            <motion.div className="na-foto4" whileHover={{ width: '95%' }}>
              <img className='foto4' src= {I3} alt="I3"></img>
            </motion.div>
          </motion.div>
          <motion.div className="kwa44-dol2" onClick={handleAnime4Click}>
            <motion.div className="na-foto4" whileHover={{ width: '95%' }}>
              <img className='foto4' src= {I4} alt="I4"></img>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal anime2 */}
      {isAnime2Visible && (
        <div className="modal-bg">
          <motion.div className="anime2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
          >
            <div className="top4">
              
              <img className='foto44' src= {I2} alt="I2"></img>
            </div>
            <motion.button className='end-btn' onClick={handleCloseButtonClick}
             whileHover={{ scale: 1.3 }}
             whileTap={{ scale: 0.9 }}
            >
            <MdClose/>
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* Modal anime3 */}
      {isAnime3Visible && (
        <div className="modal-bg">
          <motion.div className="anime3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="top4">
              <img className='foto44' src= {I3} alt="I3"></img>
            </div>
            <motion.button className='end-btn' onClick={handleCloseButtonClick}
             whileHover={{ scale: 1.3 }}
             whileTap={{ scale: 0.9 }}
            >
            <MdClose/>
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* Modal anime4 */}
      {isAnime4Visible && (
        <div className="modal-bg">
          <motion.div className="anime4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="top4">
              <img className='foto44' src= {I4} alt="I4"></img>
            </div>
            <motion.button className='end-btn' onClick={handleCloseButtonClick}
             whileHover={{ scale: 1.3 }}
             whileTap={{ scale: 0.9 }}
            >
            <MdClose/>
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* Główny modal */}
      {isOpen && (
        <div className="modal-bg">
          <motion.div className="big-square"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 0.5 }}
          >
            <div className="top4">
              <img className='foto44' src= {I2} alt="I2"></img>
            </div>
            <motion.button className='end-btn' onClick={handleCloseButtonClick}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            > 
            <MdClose/>
            </motion.button>
          </motion.div>
        </div>
      )}
      <div className="more-pro-btn">Load more projects
      <TiPlus />
      </div>
    </div>
  );
}

export default O4;
