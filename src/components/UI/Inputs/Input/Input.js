import React from 'react';

import styles from './Input.module.css';

const input = (props) => {
    return (
        <div style={{display: "inline-block"}}>
            <input 
                className={styles.Input}
                placeholder={props.placeholder}
                onChange={(event) => props.changed(event, props.placeholder)}
            />
            <datalist id="suggestions">
                <option value="Black" />
                <option value="Red" />
                <option value="Green" />
                <option value="Blue" />
                <option value="White" />
            </datalist>
        </div>
    )
}

export default input;