// import logo from './logo.svg';
import React from 'react';
import {useState,useEffect,useRef} from 'react';
import Home from'./Home';

import './App.css';
import Map from './Map';
import About from './About';
// import Data from './Data';



// import ClickAwayListener from 'react-click-away-listener';

// import CsvDownloadButton from 'react-json-to-csv'
import csvDownload from 'json-to-csv-export'

// const API_URL = 'http://localhost:5000/get_all_Measurments'
const API_URL = 'http://132.73.84.182/web/get_all_Measurments'


function App() {

  const [measures_data , setMeasuresData] = useState([]);

  const [isMap , setIsMap]= useState(false);
  const [isHome , setIsHome]= useState(true);
  const [isAbout , setIsAbout]= useState(false);
  // const [isData, setIsData]= useState(false);




  // const [popup, setPopup] = useState(false)

  const bringdata = async (title) => {
  
    // console.log('hi');
    const response = await fetch(`${API_URL}`)
    // ,{
    //   mode: 'no-cors'
    // })
    const data = await response.json()
    // document.write("My message");
    setMeasuresData(oldmeasures_data => [...oldmeasures_data , ...data])
  };

  useEffect(() => {
      bringdata()
      
    },[]);

  const toggleHome  = () =>{
    if (isHome === false){
      setIsHome(true)
      setIsMap(false)
      setIsAbout(false)
      // setIsData(false)


    }
  }

  const toggleMap  = () =>{
    if (isMap === false){
      setIsHome(false)
      setIsMap(true)
      setIsAbout(false)
      // setIsData(false)

    }
  }

  const toggleAbout  = () =>{
    if (isAbout === false){
      setIsHome(false)
      setIsMap(false)
      setIsAbout(true)
      // setIsData(false)

    }
  }

  // const toggleData  = () =>{
  //   if (isData === false){
  //     setIsHome(false)
  //     setIsMap(false)
  //     setIsAbout(false)
  //     setIsData(true)
  //   }
  // }

  const dataToConvert = {
    data: measures_data,
    filename: 'data_report',
    delimiter: ',',
    headers: ['m_value', "m_date", "Latitude","Longitude","Elevation", "CloudCover", "Device","ImageUri","user_id"]
  }



  return (
    <div className="App">
      <header>
        <div class="topnav">
        <a href="#home"
        onClick={() => toggleHome(true)}>Home</a>
        <a href="#map"
        onClick={() => toggleMap()}>Map</a>
        {/* <a href="#news" 
        onClick={() => toggleHome()}>News</a>
        <a href="#contact" 
        onClick={() => toggleHome()}>Contact</a> */}
        <a href="#about" 
        onClick={() => toggleAbout()}>About</a>
        <div className='Data'>
        <a  href="#download"
        // onClick={() => toggleData()}>Download Data as csv</a>  
        onClick={() => csvDownload(dataToConvert)}>Download Data as csv</a>
        </div>
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
          <Map >

          </Map>
          ):
          <div className="empty">

         </div>
        }

      </div>
      <div className='about'>
        {
          isAbout
          ?(
          <About>

          </About>
          ):
          <div className="empty">

         </div>
        }
        {/* <div className='data'>
        {
          isData
          ?(
          <Data>

          </Data>
          ):
          <div className="empty">

         </div>
        }
        </div> */}

      </div>
    </div>
  );
}

export default App;
