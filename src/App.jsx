import ditherKnight from './ditherKnight.svg';
import utopiaLogo from './UTOPIA.svg';
import redGlobe from './redGlobe.svg';
import ellipse10 from './Ellipse 10.svg'
import ellipse11 from './Ellipse 11.svg'
import ellipse12 from './Ellipse 12.svg'
import ellipse13 from './Ellipse 13.svg'
import ellipse14 from './Ellipse 14.svg'
import ellipse15 from './Ellipse 15.svg'

import './App.css';
import {useRef, useEffect, useState} from "react";


function App() {

const [isPaused, setIsPaused] = useState(false);

const handleDotEnter = () => {
  setIsPaused(true);
};

const handleDotLeave = () => {
  setIsPaused(false);
};


  return (
    <div className="App">

        <header className="App-header">

        <div className={`orbital-container ${isPaused ? 'paused' : ''}`}>
          <div 
            className="orbital-dot" 
            onMouseEnter={handleDotEnter}
            onMouseLeave={handleDotLeave}
            style={{
              top: "0px",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          />
          <div 
            className="orbital-dot" 
            oonMouseEnter={handleDotEnter}
            onMouseLeave={handleDotLeave}
            style={{
              top: "50%",
              right: "0px",
              transform: "translateY(-50%)"
            }}
          />
          <div 
            className="orbital-dot" 
            onMouseEnter={handleDotEnter}
            onMouseLeave={handleDotLeave}
            style={{
              bottom: "0px",
              left: "50%",
              transform: "translateX(-50%)"
            }}
          />
          <div 
            className="orbital-dot" 
            onMouseEnter={handleDotEnter}
            onMouseLeave={handleDotLeave}
            style={{
              top: "50%",
              left: "0px",
              transform: "translateY(-50%)"
            }}
          />
        </div>
        
        <img
          src = {redGlobe}
          className={`App-logo-globe ${isPaused ? 'paused' : ''}`}
          alt="logo"
          style = {{width: '500px', height: 'auto'}}/>

        <img 
          src={ditherKnight} 
          className={`App-logo ${isPaused ? 'paused' : ''}`}
          alt="logo" 
          style = {{width: '500px', height: 'auto'}}/>

         <img 
          src={ellipse10} 
          className={`App-logo-globe-dot ${isPaused ? 'paused' : ''}`}
          alt="logo" 
          style = {{width: '5px', height: 'auto'}}/>

          <img 
          src={ellipse11} 
          className={`App-logo-globe-dot ${isPaused ? 'paused' : ''}`}
          alt="logo" 
          style = {{width: '530px', height: 'auto'}}/>

          <img 
          src={ellipse12} 
          className={`App-logo-globe-dot ${isPaused ? 'paused' : ''}`}
          alt="logo" 
          style = {{width: '540px', height: 'auto'}}/>

          <img 
          src={ellipse13} 
          className={`App-logo-globe-dot ${isPaused ? 'paused' : ''}`}
          alt="logo" 
          style = {{width: '550px', height: 'auto'}}/>

          <img 
          src={ellipse14} 
          className={`App-logo-globe-dot ${isPaused ? 'paused' : ''}`}
          alt="logo" 
          style = {{width: '560px', height: 'auto'}}/>

          <div className="App-header-text">
          <img 
            src={utopiaLogo} 
            alt="logo" 
            style = {{width: '600px', height: 'auto'}}
            />
           </div>

        

     

      </header>
    </div>
  );
}

export default App;
