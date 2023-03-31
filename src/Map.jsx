import React, { Component } from 'react';
import {useState,useEffect,useRef} from 'react';

import L from 'leaflet';
import {
    MapContainer, TileLayer, Marker, Popup, Pane, Circle
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
// import './style.css';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const API_URL = 'http://localhost:5000/get_all_Measurments'

let DefaultIcon = L.icon({
    iconUrl: icon
    // shadowUrl: iconShadow
});


// let markers = [[32.0833,34.8167],[32.0571,34.7528]]

L.Marker.prototype.options.icon = DefaultIcon;


// Map => using react - leaflet ;)

const Map = () =>{

  const [measures_data , setMeasuresData] = useState([]);

  const bringdata = async (title) => {

    console.log('hi');
    const response = await fetch(`${API_URL}`)
    // ,{
    //   mode: 'no-cors'
    // })
    const data = await response.json()
    // document.write("My message");
    setMeasuresData(oldmeasures_data => [...oldmeasures_data , ...data])
    console.log(data)

  };
    // const response = fetch(`${API_URL}`);
    // const data =  response.json();
    // const locations = [
    //   {"name": "light1", "Position": [32.0833,34.8167]},
    //   {"name": "light2", "Position": [32.0571,34.7528]},
    //   {"name": "light3", "Position": [31.5, 35]},
    // ]
    useEffect(() => {
      bringdata()

    },[]);
    return (
        // console.log(response)
        <MapContainer center={[31.5, 35]}
          zoom={8}
          scrollWheelZoom={true}
          style={{height:'93vh',width:'195vh'}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {measures_data.map((location) =>(
          <Marker position={[location.Latitude,location.Longitude]}>
            <Popup>
              {'Value: ' + location.m_value +  ', Date: ' + location.m_date + ', Elevation: ' + location.Elevation + ', Cloud Cover: ' + location.CloudCover}
            </Popup>
          </Marker>
        ))};

      
        

         </MapContainer>

    )
}

export default Map;