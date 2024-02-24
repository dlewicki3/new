import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './O4.css';

function O4() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSquareClick = () => {
    // setIsOpen(true); // Usuń tę linię, aby uniknąć uruchamiania animacji po kliknięciu w diva "square2"
  };

  const handleCloseButtonClick = () => {
    setIsOpen(false);
    // Włącz ponownie możliwość przewijania po zamknięciu animacji
    document.body.style.overflow = 'auto';
  };

  const handleAnimationButtonClick = () => {
    setIsOpen(true);
    // Wyłącz możliwość przewijania po uruchomieniu animacji
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="o4">
      <div className="k4">
        <motion.div
          className="square2"
          // Dodaj animację dla cienia na kliknięcie
          onClick={handleSquareClick}
        >
          <button onClick={handleAnimationButtonClick}>Uruchom animację</button> {/* Dodaj przycisk do uruchamiania animacji */}
        </motion.div>

        {isOpen && (
          <div className="modal-bg">
            <motion.div
              className="big-square"
             
            >
              <button onClick={handleCloseButtonClick}>Zamknij</button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}

export default O4;
