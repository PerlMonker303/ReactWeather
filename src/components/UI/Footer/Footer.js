import React from 'react';

import styles from './Footer.module.css';

const footer = (props) => {
    return (
        <div className={styles.Footer}>
            <p>
            <span>@AlexandrescuAndrei-Robert</span>
            <br/>
            <span><strong>Fork</strong> my project: https://github.com/PerlMonker303/ReactWeather</span>
            </p>
        </div>
    );
}

export default footer;