import React from 'react';

import styles from './Button.module.css';

const button = (props) => {
    return (
        <div className={styles.ButtonContaier}>
            <button className={styles.Button}>{props.text}</button>
        </div>
        
    )
}

export default button;