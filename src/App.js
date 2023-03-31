// import logo from './logo.svg';
import {useState,useEffect,useRef} from 'react';
import Home from'./Home';

import './App.css';
import Map from './Map';

function App() {

  const [isMap , setIsMap]= useState(false);
  const [isHome , setIsHome]= useState(true);


  const toggleMap  = () =>{
    if (isMap === false){
      setIsMap(true)
      setIsHome(false)
    }
  }

  const toggleHome  = () =>{
    if (isHome === false){
      setIsHome(true)
      setIsMap(false)
    }
  }

  return (
    <div className="App">
      <header>
        <div class="topnav">
        <a class="active" href="#home"
        onClick={() => toggleHome()}>Home</a>
        <a href="#map" 
        onClick={() => toggleMap()}>Map</a>
        <a href="#news" 
        onClick={() => toggleHome()}>News</a>
        <a href="#contact" 
        onClick={() => toggleHome()}>Contact</a>
        <a href="#about" 
        onClick={() => toggleHome()}>About</a>
        </div>
      </header>

      <div className='home'>
        {
          isHome
          ?
          (
            <Home>
            </Home>
          ):
          <div className="empty">

          </div>
        }

      </div>

      <div className='map'>
        {
          isMap
          ?(
          <Map>

          </Map>
          ):
          <div className="empty">

         </div>
        }
        {/* <Map>

        </Map> */}

      </div>
    </div>
  );
}

export default App;
