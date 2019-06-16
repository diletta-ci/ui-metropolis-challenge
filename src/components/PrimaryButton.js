import React from 'react';
import '../assets/style/ui-elements/_primary-button.scss';

function PrimaryButton(props) {
    return (
        <button className="primary-button">{props.copy}</button>
    )
}

export default PrimaryButton;