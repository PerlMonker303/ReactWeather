import React from 'react';

import styles from './Forecast.module.css';

const forecast = (props) => {
    return (
        <div className={styles.Forecast}>
            <span>{props.data.day}</span>
        </div>
    )
};

export default forecast;