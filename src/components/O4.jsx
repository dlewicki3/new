import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './O4.css'; // Import stylów CSS

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
      {/* Kontener dla całego modala */}
      <div className="k4">
        {/* Górna część modala */}
        <div className="gora44">
          {/* Kwadrat - główny przycisk otwierający modal */}
          <motion.div className="square1" onClick={handleAnimationButtonClick}>
            chuj
          </motion.div>
          {/* Drugi kwadrat - przycisk otwierający chuj2 */}
          <motion.div className="kwa44" onClick={handleChuj2Click}></motion.div>
        </div>
        {/* Dolna część modala */}
        <div className="dol44">
          {/* Elementy dolnej części */}
          <motion.div className="kwa44-dol" onClick={handleChuj3Click}></motion.div>
          <motion.div className="kwa44-dol" onClick={handleChuj4Click}></motion.div>
        </div>
      </div>

      {/* Modal chuj2 */}
      {isChuj2Visible && (
        <div className="modal-bg">
          <motion.div className="chuj2">
            <button className='end-btn' onClick={handleCloseButtonClick}>Zamknij</button>
          </motion.div>
        </div>
      )}

      {/* Modal chuj3 */}
      {isChuj3Visible && (
        <div className="modal-bg">
          <motion.div className="chuj3">
            <button className='end-btn' onClick={handleCloseButtonClick}>Zamknij</button>
          </motion.div>
        </div>
      )}

      {/* Modal chuj4 */}
      {isChuj4Visible && (
        <div className="modal-bg">
          <motion.div className="chuj4">
            <button className='end-btn' onClick={handleCloseButtonClick}>Zamknij</button>
          </motion.div>
        </div>
      )}

      {/* Główny modal */}
      {isOpen && (
        <div className="modal-bg">
          <motion.div className="big-square">
            <button className='end-btn' onClick={handleCloseButtonClick}>Zamknij</button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default O4;
