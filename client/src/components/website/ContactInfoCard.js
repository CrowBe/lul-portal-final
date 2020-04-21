import React from 'react';

const ContactInfoCard = (props) => {
    const {Icon, info, name} = props;

    return (
        <div className="contact-info-card" id={`${name}-card`}>
            <Icon /><p>{info}</p>
        </div>
    )
}

export default ContactInfoCard;