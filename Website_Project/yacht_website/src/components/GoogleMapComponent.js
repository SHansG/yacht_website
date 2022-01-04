import React from "react";
import GoogleMapReact from 'google-map-react';



const Marker = () => (
    <div style={{
      color: 'white', 
      background: 'red',
      height: '30px',
      width: '30px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }} />
  );


function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 54.394688941757956,
      lng: 18.672903009173435
    },
    zoom: 16
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%', padding: '10px 10px', position: 'flex' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        defaultOptions={{fullscreenControl: false, zoomControl : false}}
      >
        <Marker
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;