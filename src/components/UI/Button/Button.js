import React from 'react';

import styles from './Button.module.css';

const button = (props) => {
    return (
        <div className={styles.ButtonContaier}>
            <button 
                className={styles.Button} 
                onClick={props.clicked}
            >{props.text}</button>
        </div>
        
    )
}

export default button;