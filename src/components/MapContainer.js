import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import firebase from './Firebase.js';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const formStyles = {
  position: 'absolute',
  bottom: '10px'
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lats: '',
      longs: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markers:[
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
      //shows info window by passing in marker and place changing info window state to true  
      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

      // if the infowindow state is equal to true on close this changes it to false and marker is inactive
      onClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false, 
            activeMarker: null
          })
        }
      }

      displayMarkers = () => {
      //map through array looks at each index
      return this.state.markers.map((marker, index) => {
        //return each position from that ref point
        return <Marker 
          key={index} 
          id={index} 
          position={{
            lat: marker.latitutde,
            lng: marker.longitude
          }}
        //add some functionality to prop being passed in
          onClick={this.onMarkerClick} 
          name={"Some info needs to go here"}
        />
      })
    }
    
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit= (e) => {
      e.preventDefault();
      const pinsRef = firebase.database().ref('pins');
      const pin = {
        latsValue: this.state.lats,
        longsValue: this.state.longs
      }
      pinsRef.push(pin);
      this.setState({
        lats: '',
        longs: ''
      });
    }
  
  render() {
    return (
      <div>
      <section styles= {formStyles} className="add-pin">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="lats" placeholder="Enter lats" onChange={this.handleChange} value={this.state.lats} />
          <input type="text" name="longs" placeholder="Enter longs" onChange={this.handleChange} value={this.state.longs} />
          <button>Add Pin</button>
        </form>
      </section>
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{ lat: 45.520, lng: -122.01}}
        zoomControl={true}>
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    </div>
    );
  }
}
  

export default GoogleApiWrapper({
  apiKey: "AIzaSyCi0237UFPbZVMuAUSls22QBuk7XTce9ko"
})(MapContainer);

