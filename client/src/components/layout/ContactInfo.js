import React from 'react';
import ContactInfoCard from '../common/ContactInfoCard';
import ContactHours from '../common/ContactHours';

const emailIcon = process.env.PUBLIC_URL + './assets/email-icon.png';
const phoneIcon = process.env.PUBLIC_URL + './assets/phone-icon.png';
const mobileIcon = process.env.PUBLIC_URL + './assets/mobile-icon.png';
// const globeIcon = process.env.PUBLIC_URL + './assets/globe-icon.png';

const ContactInfo = () => {
    return (
        <div className="contact-info-container">
            <div className="contact-details-container">
                <h4>Contact Info</h4>
                <ContactInfoCard img={phoneIcon} info="(02) 4067 4076" name="phone"/>
                <ContactInfoCard img={mobileIcon} info="+61 409 360 118" name="mobile"/>
                <ContactInfoCard img={emailIcon} info="admin@ lookinguplandscapes .com.au" name="email"/>
            </div>
            <div className="contact-hours-container">
                <h4>Office Hours</h4>
                <ContactHours />
            </div>
        </div>
    )
};

export default ContactInfo