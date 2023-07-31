import React from 'react';
import './InfoToolTip.css';

function InfoToolTip({ onClose, status: { isOpen, successful, text } }) {
    React.useEffect(() => {
        setTimeout(onClose, 1500)
    }, [isOpen])

    return (
        <div
            className={`info-tooltip__container ${isOpen ? 'info-tooltip__container_active' : ''} ${successful ? 'info-tooltip__container_successful' : ''}`}
        >
            <h2
                className={`info-tooltip__title ${text.toString().length >= 100 ? 'info-tooltip__title_long' : ''}`}
            >
                {text.toString()}
            </h2>
        </div>
    );
}

export default InfoToolTip