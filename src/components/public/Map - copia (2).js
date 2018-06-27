import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDtUzseWSSOM15g98lF_1eCUEgy4eCFkcQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (console.log(props.lat),console.log(props.lng),(
  <GoogleMap defaultZoom={13} defaultCenter={{ lat: props.lat, lng: props.lng}}>
    {props.isMarkerShown && (
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    )}
  </GoogleMap>
)));
export default Map;