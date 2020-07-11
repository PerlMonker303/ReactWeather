import React, { useState } from 'react';

import styles from './Forecasts.module.css';
import Forecast from './Forecast/Forecast';

const Forecasts = (props) => {
    const [state, setState] = useState({
        data: [
            {day: "Monday", weather: "Sunny"},
            {day: "Tuesday", weather: "Sunny"},
            {day: "Wednesday", weather: "Sunny"},
            {day: "Thursday", weather: "Sunny"},
            {day: "Friday", weather: "Sunny"},
            {day: "Saturday", weather: "Sunny"},
            {day: "Sunday", weather: "Sunny"}
        ],
        current: {
            location: '',
            time: '',
            feelslike: '',
            humidity: '',
            precip: '',
            pressure: '',
            temperature: '',
            visiblity: '',
            icon: '',
            wind: {
            direction: '',
            speed: ''
            }
        }
    });
    const forecasts = state.data.map(forecast => {
        return (
            <Forecast key={forecast.day} data={forecast}/>
        )
    });
    return (
        
        <div className={styles.Forecasts}>
            {forecasts}
            <Forecast data={forecasts}/>
        </div>
    );
}

export default Forecasts;