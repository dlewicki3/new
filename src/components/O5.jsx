import React, { useRef, useEffect } from 'react';
import './O5.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function O5() {
  const chujRef = useRef(null);
  const chuj2Ref = useRef(null);
  const chuj3Ref = useRef(null);
  const chuj4Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animateOnScroll = (ref, yOffset) => {
      gsap.fromTo(
        ref.current,
        { y: yOffset },
        {
          y: -400, // zmniejszam odległość przesunięcia
          pin: true,
          scrollTrigger: {
            trigger: ref.current,
            toggleActions: 'restart none none reverse',
            scrub: true,
            start: '50% center',
            end: '+=1000px', // zmniejszam odległość przesunięcia
          },
        }
      );
    };

    animateOnScroll(chujRef, 0);
    animateOnScroll(chuj2Ref, 0);
    animateOnScroll(chuj3Ref, 0);
    animateOnScroll(chuj4Ref, 0);

  }, [chujRef, chuj2Ref, chuj3Ref, chuj4Ref]);

  return (
    <div className="o5">
      <div className="over-k5"> My workflow to <br /> make the web flow</div>
      <div className="k5">
        <div className="pin" ref={chujRef}></div>
        <div className="pin2" ref={chuj2Ref}></div>
        <div className="pin3" ref={chuj3Ref}></div>
        <div className="pin4" ref={chuj4Ref}></div>
      </div>
    </div>
  );
}

export default O5;
