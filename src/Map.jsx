import React, { Component } from 'react';
import {useState,useEffect,useRef} from 'react';
// import React, { Component } from 'react';
// import {GoogleMap , Marker} from "react-google-maps" 

import { GoogleMap, LoadScript ,MarkerF, InfoWindowF } from '@react-google-maps/api';
// import {Map,  GoogleApiWrapper,Marker} from "google-maps-react";
import './Map.css';

import ClickAwayListener from 'react-click-away-listener';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { marker } from 'leaflet';




// import L from 'leaflet';
// import {
//     MapContainer, TileLayer, Marker, Popup, Pane, Circle
// } from 'react-leaflet'
// import 'leaflet/dist/leaflet.css';
// import './style.css';

// import {GoogleApiWrapper,GoogleMap} from 'google-maps-react';

// import {withGoogleMap,GoogleMap,Marker,GoogleApiWrapper } from 'react-google-maps'
// import { MapContainer } from 'react-leaflet';

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const API_URL = 'http://localhost:5000/get_all_Measurments'
const API_URL = 'http://132.73.84.182/web/get_all_Measurments'

const API_KEY = process.env.REACT_API_GOOGLE_MAPS_API_KEY;


// let DefaultIcon = L.icon({
//     iconUrl: icon
//     // shadowUrl: iconShadow
// });






// let markers = [[32.0833,34.8167],[32.0571,34.7528]]

// L.Marker.prototype.options.icon = DefaultIcon;


// Map => using react - leaflet ;

// const MapG = () =>{

//   const [measures_data , setMeasuresData] = useState([]);




//   const style = {
//     width : "98.5%",
//     height : "94%"
//   };


//   const position = {
//     lat: 31.5,
//     lng: 35,
//   }
  
//   const onLoad = marker => {
//     console.log('marker: ', marker)
//   }


//   const bringdata = async (title) => {

//     console.log('hi');
//     const response = await fetch(`${API_URL}`)
//     // ,{
//     //   mode: 'no-cors'
//     // })
//     const data = await response.json()
//     // document.write("My message");
//     setMeasuresData(oldmeasures_data => [...oldmeasures_data , ...data])
//     // console.log(data)

//   };

//     useEffect(() => {
//       bringdata()
      
//     },[]);







// const containerStyle = {
//   width: '99%',
//   height: '94vh'
// };

// const center = {
//   lat: 31.5,
//   lng: 35,
// };

const containerStyle = {
  width: '99%',
  height: '88vh'
};

const center = {
  lat: 31.5,
  lng: 35,
};

const colors = {
  green: "./green-dot.png",
  yellow: "./yellow-dot.png",
  orange: "./orange-dot.png",
  red: "./red-dot.png",
  purple: "./purple-dot.png"
}


const Map = () =>{


  const [measures_data , setMeasuresData] = useState([]);




  // const style = {
  //   width : "98.5%",
  //   height : "94%"
  // };





  const bringdata = async (title) => {

    console.log('hi');
    console.log('trying to load data');

    const response = await fetch(`${API_URL}`)

    const data = await response.json()
    console.log('hi again')
    console.log(data)
    console.log("hey again")
    // document.write("My message");
    setMeasuresData([])
    setMeasuresData(oldmeasures_data => [...oldmeasures_data , ...data])
    // console.log(measures_data)
    // console.log(data)

  };


  const bringdata_filterd = async (num) => {

    // console.log('hi');
    // console.log('trying to load data');

    const filterd_data = []

    const response = await fetch(`${API_URL}`)

    const data = await response.json()
    // console.log('hi again')
    // console.log(data)
    // console.log(data.length)

    // console.log("hey again")

    // console.log(num)

    if (num == '1'){
      setMeasuresData([])
      for (var i=0 ; i < data.length ; i++){
        if (data[i].Latitude > 32.5){
          filterd_data.push(data[i])
        }
      }
    }
    else if (num == '2'){
      setMeasuresData([])
      for (i=0 ; i < data.length ; i++){
        if (data[i].Latitude < 31.6){
          filterd_data.push(data[i])
        }
      }
    }
    else if (num == '3'){
      setMeasuresData([])
      for (i=0 ; i < data.length ; i++){
        if (data[i].Latitude > 31.6 && data[i].Latitude < 32.5){
          filterd_data.push(data[i])
        }
      }
    }
    else if (num == '4'){
      setMeasuresData([])
      // setMeasuresData(oldmeasures_data => [...oldmeasures_data , ...filterd_data])
      for (i=0 ; i < data.length ; i++){
        if (data[i].m_value <= 2){
          filterd_data.push(data[i])
        }
      }
    }
    else if (num == '5'){
      setMeasuresData([])
      // setMeasuresData(oldmeasures_data => [...oldmeasures_data , ...filterd_data])
      for (i=0 ; i < data.length ; i++){
        if (data[i].m_value >= 3 && data[i].m_value < 6){
          filterd_data.push(data[i])
        }
      }
    }
    else if (num == '6'){
      setMeasuresData([])
      // setMeasuresData(oldmeasures_data => [...oldmeasures_data , ...filterd_data])
      for (i=0 ; i < data.length ; i++){
        if (data[i].m_value >= 6){
          filterd_data.push(data[i])
        }
      }
    }
    console.log(filterd_data)
    // setMeasuresData([filterd_data])
    // document.write("My message");
    setMeasuresData(oldmeasures_data => [...oldmeasures_data , ...filterd_data])
    // console.log(measures_data)
    // console.log(data)

  };

    useEffect(() => {
      bringdata()
      
    },[]);




    const markers = measures_data;




    const [activeMarker, setActiveMarker] = useState(null);

    // const [markerColoer, setMarkerColer] = useState(null);
    // const [popup, setPopup] = useState(false)
    // const [isMap , setIsMap]= useState(false);
     



    const handleActiveMarker = (marker) => {
      if (marker === activeMarker) {
        return;
      }
      setActiveMarker(marker);
    };

    const handleMarkerColor = (marker) => {
      if (marker.m_value <= 2 ){
        return colors.green
      }
      else if (marker.m_value === 3){
        return colors.yellow
      }
      else if (marker.m_value === 4 || marker.m_value === 5 ){
        return colors.orange
      }
      else if (marker.m_value === 6 ){
        return colors.red
      }
      else{
        return colors.purple
      }

    }

  

  
  return (
    <div className='topnav'>
      <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle className="button1" variant="success" id="dropdown-custom-1">
        Map Filters
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item><button className="button1" onClick={()=>setMeasuresData([])}>Clear map</button></Dropdown.Item>
        <Dropdown.Item><button className="button1" onClick={()=>bringdata([])}>Set markers</button></Dropdown.Item>
        <Dropdown.Item> <button className="button1" onClick={()=>{setMeasuresData([]); bringdata_filterd(['1']);}}>North</button></Dropdown.Item>
        <Dropdown.Item> <button className="button1" onClick={()=>{setMeasuresData([]); bringdata_filterd(['3']);}}>Center</button></Dropdown.Item>
        <Dropdown.Item> <button className="button1" onClick={()=>{setMeasuresData([]); bringdata_filterd(['2']);}}>South</button></Dropdown.Item>
        <Dropdown.Item> <button className="button1" onClick={()=>{setMeasuresData([]); bringdata_filterd(['4']);}}>Low light pollution</button></Dropdown.Item>
        <Dropdown.Item> <button className="button1" onClick={()=>{setMeasuresData([]); bringdata_filterd(['5']);}}>Moderate light pollution</button></Dropdown.Item>
        <Dropdown.Item> <button className="button1" onClick={()=>{setMeasuresData([]); bringdata_filterd(['6']);}}>High light pollution</button></Dropdown.Item>


      </Dropdown.Menu>
    </Dropdown>
      
    <div className='test'>
    {window.google === undefined   ?( 
    <LoadScript 
    googleMapsApiKey='AIzaSyCs5HTHK1LhYzjHM3Wvbhcx2RpIcnFYvcs'
    > 


      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        >




         {markers.map((location) =>(
          <MarkerF 
          position={{lat:location.Latitude,lng:location.Longitude}}
          icon={handleMarkerColor(location)}
          onClick={() => handleActiveMarker(location.m_date)}
          
            >
              {activeMarker === location.m_date ? (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div>
                  <p><b>Value:  {location.m_value}<br></br>
                  Date:   {location.m_date}<br></br>  
                  Elevation: {location.Elevation}<br></br> 
                  Cloud Cover: {location.CloudCover}<br></br>

                  {
                    (location.Device !== 'None')
                    ?(
                      <b>Device Type: {location.Device}</b>
                    ):
                    <div className="empty">

                    </div>
                    }
                  </b></p>
                    </div>
                </InfoWindowF>
              ) : null}

          </MarkerF>
        ))};
          


      </GoogleMap>
    </LoadScript> ):
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}>
          


         {markers.map((location) =>(
          
          <MarkerF 
          position={{lat:location.Latitude,lng:location.Longitude}}
          
 
          icon={handleMarkerColor(location)}

          onClick={() => handleActiveMarker(location.m_date)}
            >
              {activeMarker === location.m_date ? (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div>
                  <p><b>Value:  {location.m_value}<br></br>
                  Date:   {location.m_date}<br></br>  
                  Elevation: {location.Elevation}<br></br> 
                  Cloud Cover: {location.CloudCover}<br></br>
                  Latitude: {location.Latitude}<br></br>
                  Longitude: {location.Longitude}<br></br>
                  {
                    (location.Device !== 'None')
                    ?(
                      <b>Device Type: {location.Device}</b>
                    ):
                    <div className="empty">

                    </div>
                    }
                  </b></p>
                    </div>
                </InfoWindowF>
              ) : null}

          </MarkerF>
        ))};
          

      </GoogleMap>
    }
      {/* <button
        type="button"
        onClick={()=>setMeasuresData([])}
      >CLEAR MAP</button>
      <button
        type="button"
        onClick={()=>bringdata([])}
      >SET MAP MARKERS</button> */}

</div>
</div>

  )
}
  


//     return (
//         // console.log(response)
//         <Map initialCenter={{
//           lat : 31.5, 
//           lng : 35,
//         }}
//         google={this.props.google}
//         zoom ={8}
//         containerStyle = {style}
//         />


//         // <MapContainer center={[31.5, 35]}
//         //   zoom={8}
//         //   scrollWheelZoom={true}
//         //   style={{height:'93vh',width:'195vh',paddingLeft:'20vh'}}>
//         // <TileLayer
//         //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         // />
//         // {measures_data.map((location) =>(
//         //   <Marker position={[location.Latitude,location.Longitude]}>
//         //     <Popup>
//         //       <div>
//         //       <p><b>Value:  {location.m_value}<br></br>
//         //       Date:   {location.m_date}<br></br>  
//         //       Elevation: {location.Elevation}<br></br> 
//         //       Cloud Cover: {location.CloudCover}<br></br>
//         //       {
//         //         (location.Device !== 'None')
//         //         ?(
//         //           <b>Device Type: {location.Device}</b>
//         //         ):
//         //         <div className="empty">

//         //         </div>
//         //         }
//         //       </b></p>
//         //       </div>

              
//         //     </Popup>
//         //   </Marker>
//         // ))};

      
        

//         //  </MapContainer>

//     );



// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCs5HTHK1LhYzjHM3Wvbhcx2RpIcnFYvcs",
// })(MapG);


export default React.memo(Map)