
import React from 'react';
import First from './components/First'
import Home from './components/Home';
import Robo from './components/Robo';
import Marquee from './components/Marquee';
import Asocitin from './components/Asocitin';
import Cards from './components/cards';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='Main'>
      <First></First>
      <Home>p</Home>
      <Robo></Robo>
      <Marquee></Marquee>
      <div className='second-page'>
      <Asocitin></Asocitin>
      <Cards></Cards>
        </div>
      </div>
    
  )
}

export default App;
