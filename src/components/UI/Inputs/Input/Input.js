import React from 'react';

import styles from './Input.module.css';

const input = (props) => {
    return (
        <div style={{display: "inline-block"}}>
            <input 
                className={styles.Input}
                placeholder={props.placeholder}
                onChange={(event) => props.changed(event, props.placeholder)}
                list={"suggestions_"+props.placeholder}
                value={props.value}
            />
            <datalist id={"suggestions_"+props.placeholder}>
                {
                    props.suggestions.map(sugg => {
                        return (
                            <option key={sugg} value={sugg} />
                        )
                    })
                }
            </datalist>
        </div>
    )
}

export default input;