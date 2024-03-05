import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./O9.css";
import { FaPlus } from "react-icons/fa6";



function O9() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleAccordion4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleAccordion5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleAccordion6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggleAccordion7 = () => {
    setIsOpen7(!isOpen7);
  };
  return (
    <motion.div className="o9">
      <div className="k9">
        <p className='big-txt-9'>
        Frequently asked questions.
        </p>
        <div className="na-akordeon">



        <div className="question" onClick={toggleAccordion1}>
        What services do you offer exactly?
        <div className="naplusa">
        <FaPlus />

             </div>
        </div>
        <AnimatePresence>
          {isOpen1 && (
            <motion.div
              className="answer"
              initial={{ height: 0}}
              animate={{ height: "auto"}}
              exit={{ height: 0}}
              transition={{ duration: 0.2 }}
            >
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga praesentium delectus eaque velit, omnis vitae?
          
            </motion.div>
          )}
        </AnimatePresence>

        <div className="question" onClick={toggleAccordion2}>
        Do you require finalized designs when reaching out?
        <div className="naplusa">
        <FaPlus />

             </div>
        </div>
        <AnimatePresence>
          {isOpen2 && (
            <motion.div
              className="answer"
              initial={{ height: 0}}
              animate={{ height: "auto"}}
              exit={{ height: 0}}
              transition={{ duration: 0.2 }}
            >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga praesentium delectus eaque velit, omnis vitae?
            </motion.div>
          )}
        </AnimatePresence>

        <div className="question" onClick={toggleAccordion3}>
Lorem ipsum dolor sit amet consectetur?
<div className="naplusa">
        <FaPlus />

             </div>
        </div>
        <AnimatePresence>
          {isOpen3 && (
            <motion.div
              className="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga praesentium delectus eaque velit, omnis vitae?
            </motion.div>
          )}
        </AnimatePresence>
        <div className="question" onClick={toggleAccordion4}>
Lorem ipsum dolor sit?
<div className="naplusa">
        <FaPlus />

             </div>
        </div>
        <AnimatePresence>
          {isOpen4 && (
            <motion.div
              className="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga praesentium delectus eaque velit, omnis vitae?
            </motion.div>
          )}
        </AnimatePresence>

        <div className="question" onClick={toggleAccordion5}>
Lorem ipsum dolor sit amet consectetur.
<div className="naplusa">
        <FaPlus />

             </div>
        </div>
        <AnimatePresence>
          {isOpen5 && (
            <motion.div
              className="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga praesentium delectus eaque velit, omnis vitae?
            </motion.div>
          )}
        </AnimatePresence>



       
      

        
     

      </div>
    </div>
    </motion.div>
  );
}

export default O9;
