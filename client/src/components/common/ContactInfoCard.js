import React from 'react';

const ContactInfoCard = (props) => {
    const {img, info, name} = props;

    return (
        <div className="contact-info-card" id={`card-${name}`}>
            <img src={img} alt=""/>
            <p>{info}</p>
        </div>
    )
}

export default ContactInfoCard;