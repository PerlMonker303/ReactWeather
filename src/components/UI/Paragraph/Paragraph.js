import React from 'react';

const paragraph = (props) => {
    return (
        <p><strong>{props.label}</strong>: {props.value}</p>
    );
}

export default paragraph;