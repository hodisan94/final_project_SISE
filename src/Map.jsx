import React, { Component } from 'react';
import {useState,useEffect,useRef} from 'react';
// import React, { Component } from 'react';
// import {GoogleMap , Marker} from "react-google-maps" 

import { GoogleMap, LoadScript ,MarkerF, InfoWindowF } from '@react-google-maps/api';
// import {Map,  GoogleApiWrapper,Marker} from "google-maps-react";
import './Map.css';

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

const API_URL = 'http://localhost:5000/get_all_Measurments'
// const API_URL = 'http://132.73.194.98:5000/get_all_Measurments'


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




const Map = () =>{


  const [measures_data , setMeasuresData] = useState([]);




  // const style = {
  //   width : "98.5%",
  //   height : "94%"
  // };





  const bringdata = async (title) => {

    console.log('hi');
    const response = await fetch(`${API_URL}`)
    // ,{
    //   mode: 'no-cors'
    // })
    const data = await response.json()
    // document.write("My message");
    setMeasuresData(oldmeasures_data => [...oldmeasures_data , ...data])
    // console.log(data)

  };

    useEffect(() => {
      bringdata()
      
    },[]);


    const containerStyle = {
      width: '99%',
      height: '94vh'
    };
    
    const center = {
      lat: 31.5,
      lng: 35,
    };
    const position = {
      lat: 31.5,
      lng: 35,
    };
    
    
    // const onLoad = marker => {
    //   console.log('marker: ', marker)
    // };

    // const onLoad = infoWindow => {
    //   console.log('infoWindow: ', infoWindow)
    // };

    const markers = [
      {
        id: 1,
        name: "Chicago, Illinois",
        location: { lat: 31.881832, lng: 35.023177 }
      },
      {
        id: 2,
        name: "Denver, Colorado",
        location: { lat: 31.739235, lng: 35.09025 }
      },
      {
        id: 3,
        name: "Los Angeles, California",
        location: { lat: 31.052235, lng: 35.243683 }
      },
      {
        id: 4,
        name: "New York, New York",
        location: { lat: 31.712776, lng: 35.005974 }
      }
    ];





    const [activeMarker, setActiveMarker] = useState(null);


    const handleActiveMarker = (marker) => {
      if (marker === activeMarker) {
        return;
      }
      setActiveMarker(marker);
    };
  
    // const handleOnLoad = (map) => {
    //   const bounds = new google.maps.LatLngBounds();
    //   markers.forEach(({ position }) => bounds.extend(position));
    //   map.fitBounds(bounds);
    // };
  
  return (
    <LoadScript 
    googleMapsApiKey='AIzaSyCs5HTHK1LhYzjHM3Wvbhcx2RpIcnFYvcs'>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        >


         {markers.map((location) =>(
          <MarkerF 
          position={location.location}
          onClick={() => handleActiveMarker(location.id)}
            >
              {activeMarker === location.id ? (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <div>{location.name}</div>
                </InfoWindowF>
              ) : null}
            {/* <Popup>
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

              
            </Popup> */}
          </MarkerF>
        ))};
          
          {/* <MarkerF
          // onLoad={onLoad}
          position={position}
          // title={"hi"} 
         /> */}

      </GoogleMap>
    </LoadScript>
  )



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
}



// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCs5HTHK1LhYzjHM3Wvbhcx2RpIcnFYvcs",
// })(MapG);


export default React.memo(Map)