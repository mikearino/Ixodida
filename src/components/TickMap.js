import React from "react";
import MapContainer from "./MapContainer";
import { Map, GoogleApiWrapper } from "google-maps-react";

const TickMap = () => {
  return (
    <div className="TickMap">
      <MapContainer />
    </div>
  );
};

export default TickMap;
