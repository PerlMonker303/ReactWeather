import React from 'react';

import styles from './Error.module.css';

const error = (props) => {
    return (
        <div className={styles.Error}>
            <p>{props.message}</p>
        </div>
    )
}

export default error;