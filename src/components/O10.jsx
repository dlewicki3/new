import React from 'react';
import './O10.css';
import { IoIosArrowForward } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

function O10() {
  return (
    <div className="o10">
      <div className="k10">
        <div className="top">
        <div className="na-zdjeciu">
            <p className='big-txt10'>
                Intrested in <br></br>worked together
            </p>
            <button className='button10'>Start a project request <IoIosArrowForward /></button>
        </div>
       
        </div>
        <div className="bottom">
          <div className="kwa10" >
      <p className='thick-txt'> Why Webflow</p>
      <p className='thin-txt'> Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.</p>
          </div>
          <div className="kwa10">
          <p className='thick-txt'> About</p>
      <p className='thin-txt'> Lorem ipsum dolor <br></br> sit amet consectetur </p>
          </div>
        </div>
        <div className="fottage">
          <div className="left10">Dominik Lewicki. All rights © </div>

          <div className="right10">
            <div className="klocek">
            <BsTwitterX />
            </div>
            <div className="klocek">Privacy</div>
            <div className="klocek">Contact</div>
            <div className="klocek">Legal notice</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default O10;
