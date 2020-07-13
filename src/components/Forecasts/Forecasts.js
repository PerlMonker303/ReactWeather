import React, { useState } from 'react';

import styles from './Forecasts.module.css';
import Forecast from './Forecast/Forecast';

export const DAYS={
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
};

const Forecasts = (props) => {
    const [state, ] = useState({
        data: [
            {day: "Monday", weather: "Sunny"},
            {day: "Tuesday", weather: "Sunny"},
            {day: "Wednesday", weather: "Sunny"},
            {day: "Thursday", weather: "Sunny"},
            {day: "Friday", weather: "Sunny"},
            {day: "Saturday", weather: "Sunny"},
            {day: "Sunday", weather: "Sunny"}
        ]
    });

    const forecasts = state.data.map(forecast => {
        return (
            <Forecast 
                key={forecast.day} 
                data={forecast}
                isActive={forecast.day === DAYS[props.activeDay] ? true : false}
                clicked={() => props.clicked(forecast.day)}
            />
        )
    });
    return (
        
        <div className={styles.Forecasts}>
            {forecasts}
        </div>
    );
}

export default Forecasts;