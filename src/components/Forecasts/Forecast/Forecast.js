import React from 'react';

import styles from './Forecast.module.css';

const forecast = (props) => {
    let classes = styles.Forecast;
    if(props.isActive){
        classes = classes.concat(' '+styles.Active);
    }
    return (
        <div className={classes} onClick={props.clicked}>
            <span>{props.data.day}</span>
        </div>
    )
};

export default forecast;