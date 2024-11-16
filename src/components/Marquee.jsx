import { motion } from 'framer-motion';
import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function Marquee() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <motion.h1 
          initial={{x:"0"}} 
          animate={{x:"-100%"}} 
          transition={{ease:"linear", repeat: Infinity, duration: 8}} 
          className="marquee-text"
        >
          GAME ON...
        </motion.h1>
        <motion.h1 
          initial={{x:"0"}} 
          animate={{x:"-100%"}} 
          transition={{ease:"linear", repeat: Infinity, duration: 8}} 
          className="marquee-text"
        >
          GAME ON...
        </motion.h1>
        <motion.h1 
          initial={{x:"0"}} 
          animate={{x:"-100%"}} 
          transition={{ease:"linear", repeat: Infinity, duration: 8}} 
          className="marquee-text"
        >
          GAME ON...
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
