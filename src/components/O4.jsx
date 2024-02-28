import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './O4.css'; // Import stylów CSS
import I1 from './I1.webp';
import I2 from './I2.webp';
import I3 from './I3.jpeg';
import I4 from './I4.webp';
import { MdClose } from "react-icons/md";


function O4() {
  // Stan do śledzenia otwarcia modala i widoczności chuj2, chuj3 i chuj4
  const [isOpen, setIsOpen] = useState(false);
  const [isChuj2Visible, setIsChuj2Visible] = useState(false);
  const [isChuj3Visible, setIsChuj3Visible] = useState(false);
  const [isChuj4Visible, setIsChuj4Visible] = useState(false);

  // Funkcja do zamknięcia wszystkich modali
  const handleCloseButtonClick = () => {
    setIsOpen(false);
    setIsChuj2Visible(false);
    setIsChuj3Visible(false);
    setIsChuj4Visible(false);
  };

  // Funkcja do otwarcia głównego modala
  const handleAnimationButtonClick = () => {
    setIsOpen(true);
  };

  // Funkcja do przełączania widoczności chuj2
  const handleChuj2Click = () => {
    setIsChuj2Visible(!isChuj2Visible);
  };

  // Funkcja do przełączania widoczności chuj3
  const handleChuj3Click = () => {
    setIsChuj3Visible(!isChuj3Visible);
  };

  // Funkcja do przełączania widoczności chuj4
  const handleChuj4Click = () => {
    setIsChuj4Visible(!isChuj4Visible);
  };

  return (
    <div className="o4">
      <p className='big-txt4'>A small selection<br></br> of my work.</p>
      {/* Kontener dla całego modala */}
      <div className="k4">
        {/* Górna część modala */}
        <div className="gora44">
          {/* Kwadrat - główny przycisk otwierający modal */}
          
          <motion.div className="square1" onClick={handleAnimationButtonClick}  
  
          >
            <div className="na-foto4">
              <img className='foto4' src= {I1}></img>
            </div>
          </motion.div>


          {/* Drugi kwadrat - przycisk otwierający chuj2 */}
          <motion.div className="kwa44" onClick={handleChuj2Click}>
          <div className="na-foto4">
              <img className='foto4' src= {I2}></img>
            </div>

          </motion.div>
        </div>
        {/* Dolna część modala */}
        <div className="dol44">
          {/* Elementy dolnej części */}
          <motion.div className="kwa44-dol" onClick={handleChuj3Click}>
        
          <div className="na-foto4">
           
              <img className='foto4' src= {I3}></img>
            </div>
          </motion.div>
          <motion.div className="kwa44-dol2" onClick={handleChuj4Click}>
          <div className="na-foto4">
              <img className='foto4' src= {I4}></img>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal chuj2 */}
      {isChuj2Visible && (
        <div className="modal-bg">
          <motion.div className="chuj2">
            <div className="top4">
              <img className='foto44'src= {I2}>

              </img>
            </div>
            <button className='end-btn' onClick={handleCloseButtonClick}>
            <MdClose/>
            </button>
          </motion.div>
        </div>
      )}

      {/* Modal chuj3 */}
      {isChuj3Visible && (
        <div className="modal-bg">
          <motion.div className="chuj3">
          <div className="top4">
              <img className='foto44'src= {I3}>

              </img>
            </div>
            <button className='end-btn' onClick={handleCloseButtonClick}>
            <MdClose/>
            </button>
          </motion.div>
        </div>
      )}

      {/* Modal chuj4 */}
      {isChuj4Visible && (
        <div className="modal-bg">
          <motion.div className="chuj4">
          <div className="top4">
              <img className='foto44'src= {I4}>

              </img>
            </div>
            <button className='end-btn' onClick={handleCloseButtonClick}>
            <MdClose/>
            </button>
          </motion.div>
        </div>
      )}

      {/* Główny modal */}
      {isOpen && (
        <div className="modal-bg">
          <motion.div className="big-square"
     
          >
            
          <div className="top4">
              <img className='foto44'src= {I2}>

              </img>
            </div>
            <button className='end-btn' onClick={handleCloseButtonClick}> 
            <MdClose/>
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default O4;
