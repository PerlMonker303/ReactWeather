import React from 'react';

import styles from './Footer.module.css';

const footer = (props) => {
    return (
        <div className={props.sticked ? styles.FooterSticked : styles.Footer}>
            <p className={styles.Paragraph}>
            <span>@AlexandrescuAndrei-Robert</span>
            <br/>
            <span><a
                className={styles.Button} 
                href={'https://github.com/PerlMonker303/ReactWeather'}
                target='_blank'
                rel="noopener noreferrer"
                >Fork</a>my project on Github</span>
            </p>
        </div>
    );
}

export default footer;