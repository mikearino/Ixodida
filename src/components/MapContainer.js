import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores:[
        {latitutde:45.633, longitude:-120.909},
        {latitutde:45.700, longitude:-121.403},
        {latitutde:45.546, longitude:-122.373},
        {latitutde:45.703, longitude:-121.505},
        {latitutde:45.710, longitude:-121.362},
        {latitutde:45.682, longitude:-121.300},
        {latitutde:45.595, longitude:-121.870},
      ]
    }


    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
          lat: store.latitutde,
          lng: store.longitude
        }}
      })
    }
  }
  
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 45.520, lng: -122.01}}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCi0237UFPbZVMuAUSls22QBuk7XTce9ko"
})(MapContainer);