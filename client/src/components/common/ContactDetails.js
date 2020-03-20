import React from 'react';
import ContactInfoCard from '../common/ContactInfoCard';
import mobileIcon from '../../images/mobile-icon.png';
import emailIcon from '../../images/email-icon.png';
import phoneIcon from '../../images/phone-icon.png';

const ContactDetails = () => {
    return (
    <div className="contact-details-container">
        <h4>Contact Info</h4>
        <ContactInfoCard img={phoneIcon} info="(02) 4067 4076" name="phone"/>
        <ContactInfoCard img={mobileIcon} info="+61 409 360 118" name="mobile"/>
        <ContactInfoCard img={emailIcon} info="admin@lookinguplandscapes.com.au" name="email"/>
    </div>
    )
};

export default ContactDetails;