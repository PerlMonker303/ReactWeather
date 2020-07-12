import React, { Component } from 'react';

import styles from './ForecastExpanded.module.css';

class ForecastExpanded extends Component {
    state = {
        current_time: null,
        location: null,
        current_temp: null,
        feelslike: null,
        current_humidity: null,
        current_visibility: null,
        uv_index: null,
        wind_dir: null,
        wind_speed: null,
        precipitation: null,
        description: null,
        visible: false
    }

    componentWillMount = () => {
        console.log(this.props.data);
        this.setState({
            current_time: this.props.data.current.observation_time,
            location: this.props.data.location,
            current_temp: this.props.data.current.temperature,
            feelslike: this.props.data.current.feelslike,
            current_humidity: this.props.data.current.humidity,
            current_visibility: this.props.data.current.visibility,
            uv_index: this.props.data.current.uv_index,
            wind_dir: this.props.data.current.wind_dir,
            wind_speed: this.props.data.current.wind_speed,
            precipitation: this.props.data.current.precip,
            description: this.props.data.current.weather_descriptions[0],
            visible: true
        });
    }

    render(){
        return (
            <div className={styles.ForecastExpanded}>
                <h2>FORECAST</h2>
                <h4>{this.state.description}</h4>
                <div className={styles.Pane}>
                    <h4>Closest Location Found:</h4>
                    <p>Name: {this.state.location.name}</p>
                    <p>Region: {this.state.location.region}</p>
                    <p>Country: {this.state.location.country}</p>
                    <p>Timezone: {this.state.location.timezone_id}</p>
                    <p>Latitude: {this.state.location.lat}&deg;</p>
                    <p>Longitude: {this.state.location.lon}&deg;</p>
                </div>
                <div className={styles.Pane}>
                    <h4>Current Weather:</h4>
                    <p>Temperature: {this.state.current_temp}&deg; C</p>
                    <p>Felt temperature: {this.state.feelslike}&deg; C</p>
                    <p>Humidity: {this.state.current_humidity}&#37;</p>
                    <p>Visibility: {this.state.current_visibility} km</p>
                    <p>Wind: {this.state.wind_dir} at {this.state.wind_speed}km/h</p>
                    <p>Precipitation: {this.state.precipitation} mm/3h</p>
                </div>
        </div>
        );
    }
}

export default ForecastExpanded;

/*

<div>
    
    <ul>
        <li>-</li>
        <li>-</li>
        <li>-</li>        
        <li>-</li>
        <li>-</li>
        <li>-</li>
    </ul>
</div>
*/