

import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function Robo() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="robo" >
        {/* Add multiple images to cycle through */}
        <div className='rocover one'><img className="image first-image" src="src/assets/robo 2.png" alt="Robot 2" /></div>
       <div className='rocover two'><img className="image second-image" src="src/assets/robo.png" alt="Robot 3" /> </div>

    </div>
  );
}

export default Robo;
{/*  */}