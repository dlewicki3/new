import React from 'react'
import './O7.css';
import code from './code.png';
import right from './right.webp';
import left from './left.webp';

function O7() {
  return (
 <div className="o7">
    <div className="k7">
        <div className="gora7">
            <div className="left7" >
                <p className='clean-txt7'>Clean, efficient code.</p>
                <img className='na-foto-7' src={code}></img>
            </div>
            <div className="right7">
                <p className='big-txt-7'>Fast turnaround times.
</p>
                <div className="na-color">
                    <span className='top-span' >
Months
                    </span>
                    <span className='bottom-span'>Weeks</span>
                    <span className='bottom-span'></span>
                </div>
            </div>
        </div>
        <div className="dol7">
        <div className="left7-bottom">
            <div className="na-foto7-left">
                <img className='foto7' src= {left}></img>
            </div>
        </div>
            <div className="right7-bottom">
<div className="na-foto7-right">
<img className='foto77' src= {right}></img>
</div>

            </div>
        </div>
    </div>
 </div>
  )
}

export default O7