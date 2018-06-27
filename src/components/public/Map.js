import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const style = {
	position: 'relative',
  width: '100%',
  height: '400px'
}


class MapCustom extends Component {
  render() {
    return (
        <Map 
        	google={this.props.google}
        	style={style}
        	initialCenter={{
            	lat: 10.0170052,
            	lng: -84.0995243
        	}}
          	zoom={15}>
 
        	<Marker
    			title={'The marker`s title will appear as a tooltip.'}
    			name={'Momentos Tamijor'}
    			position={{lat: 10.0223952, lng: -84.0995243}} />
 
        	<InfoWindow onClose={this.onInfoWindowClose}>
            </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCdSnKVMjpS59tL0nfmoJLseJ9gN9r8yik")
})(MapCustom)
