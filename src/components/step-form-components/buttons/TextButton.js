import React from 'react';
import './buttons-styles.scss';

const TextButton = ({btnText, onClick}) => (
    <button className="test-button" onClick={onClick}>
        {btnText}
    </button>
);

export default TextButton;