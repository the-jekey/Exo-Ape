import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Work from './Components/Work';
import Play from './Components/Play';
import Images from './Components/Images';
import Spread from './Components/Spread';


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();





  return (
    <div>
      <div className="w-full">
        <Navbar />
        <Landing />
        <Work />
        <Play />
        <Images />
        <Spread/>
      </div>
    </div>
  )
}

export default App
