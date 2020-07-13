import React, { Component } from 'react';

import Paragraph from '../../UI/Paragraph/Paragraph';
import Spinner from '../../UI/Spinner/Spinner';
import styles from './ForecastExpanded.module.css';

import { DAYS } from '../Forecasts';

class ForecastExpanded extends Component {
    constructor(props){
        super(props);
        this.state = {
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
            pressure: this.props.data.current.pressure/1000,
            image: this.props.data.current.weather_icons[0],
            visible: true
        }
    }

    render(){
        const today = DAYS[new Date().getDay()];
        const message = '(This is CONCEPTUAL only, 7-day forecast is not free)';
        return (
            <div className={styles.ForecastExpanded}>
                <h2>{today === this.props.activeDay ? "TODAY'S FORECAST" : "STILL TODAY'S FORECAST"}</h2>
                <h3><i>{this.state.description}</i></h3>
                <p>{today === this.props.activeDay ? null : message}</p>
                {this.state.image_loading ? <Spinner /> : <img src={this.state.image} alt={"Image depicting "+this.state.description}></img>}
                <div className={styles.Pane}>
                    <h3>Closest Location Found:</h3>
                    <Paragraph label="Name" value={this.state.location.name}/>
                    <Paragraph label="Region" value={this.state.location.region}/>
                    <Paragraph label="Country" value={this.state.location.country}/>
                    <Paragraph label="Timezone" value={this.state.location.timezone_id + ' UTC ' + this.state.location.utc_offset}/>
                    <Paragraph label="Latitude" value={this.state.location.lat+'\u00B0'}/>
                    <Paragraph label="Longitude" value={this.state.location.lon+'\u00B0'}/>
                    <Paragraph label="Local Time" value={this.state.location.localtime}/>
                </div>
                <div className={styles.Pane}>
                    <h3>Current Weather:</h3>
                    <Paragraph label="Temperature" value={this.state.current_temp+'\u00B0 C'}/>
                    <Paragraph label="Felt Temperature" value={this.state.feelslike+'\u00B0 C'}/>
                    <Paragraph label="Humidity" value={this.state.current_humidity+'%'}/>
                    <Paragraph label="Visibility" value={this.state.current_visibility+' km'}/>
                    <Paragraph label="Wind" value={this.state.wind_dir+' at '+this.state.wind_speed+' km/h'}/>
                    <Paragraph label="Precipitation" value={this.state.precipitation+' mm/3h'}/>
                    <Paragraph label="Pressure" value={this.state.pressure+' mBar'}/>
                </div>
        </div>
        );
    }
}

export default ForecastExpanded;