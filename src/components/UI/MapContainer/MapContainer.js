import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import styles from './MapContainer.module.css';

export class MapContainer extends Component {
    render() {
        return (
          <div className={styles.MapContainer}>
            <span className={styles.Span}>Interactive Map</span>
            <Map 
              className={styles.Map}
              google={this.props.google} 
              zoom={15}
              initialCenter={{
                lat: this.props.data.location.lat,
                lng: this.props.data.location.lon,
              }}
            >
      
              <Marker onClick={this.onMarkerClick}
                      name={'Current location'} />
      
              <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.props.data.location.name}</h1>
                  </div>
              </InfoWindow>
            </Map>
          </div>
        );
      }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAvzGrNl09m8eAAyqElT5K30qfYKwxG5KA')
})(MapContainer)