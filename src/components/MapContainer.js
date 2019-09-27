import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
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
  }
      
      onMarkerClick = (props, marker, e) =>
      //shows info window by passing in marker and place changing info window state to true
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

      onClose = props => {
        // if the infowindow state is equal to true on close this changes it to false and marker is inactive
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false, 
            activeMarker: null
          })
        }
      }

      displayMarkers = () => {
      //map through array looks at each index
      return this.state.stores.map((store, index) => {
        //return each position from that ref point
        return <Marker key={index} id={index} position={{
          lat: store.latitutde,
          lng: store.longitude
        }}
        //add some functionality to prop being passed in
        onClick = {() => console.log("You clikced me!")} />
      })
    }
  
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 45.520, lng: -122.01}}
        >
        {this.displayMarkers()}
        <Marker
        onClick={this.onMarkerClick}
        name={'Some place need to add dynamic stuff here'}
        />
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
        >
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
        </div>
        </InfoWindow>
      </Map>
    );
  }
}
  

export default GoogleApiWrapper({
  apiKey: "AIzaSyCi0237UFPbZVMuAUSls22QBuk7XTce9ko"
})(MapContainer);

