import React from 'react';

import Button from '../Button/Button';
import styles from './Input.module.css';

const input = (props) => {
    return (
        <div className={styles.Input}>
            <h1>Location:</h1>
            <input type="text" placeholder="country"></input>
            <input type="text" placeholder="state"></input>
            <input type="text" placeholder="city"></input>
            <Button text="GO" />
        </div>
    )
}

export default input;