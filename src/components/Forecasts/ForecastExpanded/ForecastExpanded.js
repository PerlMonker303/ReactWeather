import React, { Component } from 'react';

import Paragraph from '../../UI/Paragraph/Paragraph';
import styles from './ForecastExpanded.module.css';

class ForecastExpanded extends Component {
    state = {
        values: [],
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
        pressure: null,
        visible: false
    }

    componentWillMount = () => {
        console.log(this.props.data);
        this.setState({
            ...this.state,
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
            pressure: this.props.data.current.pressure,
            visible: true
        });
    }

    render(){
        return (
            <div className={styles.ForecastExpanded}>
                <h2>TODAY'S FORECAST</h2>
                <h3><i>{this.state.description}</i></h3>
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
                    <Paragraph label="Wind" value={this.state.wind_dir+'at'+this.state.wind_speed+'km/h'}/>
                    <Paragraph label="Precipitation" value={this.state.precipitation+'mm/3h'}/>
                    <Paragraph label="Pressure" value={this.state.pressure+' x0.001 mBar'}/>
                </div>
        </div>
        );
    }
}

export default ForecastExpanded;