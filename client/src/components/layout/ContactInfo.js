import React from 'react';
import ContactHours from '../common/ContactHours';
import ContactDetails from '../common/ContactDetails';

const ContactInfo = () => {
    return (
        <div className="contact-info-container">
            <ContactDetails />
            <ContactHours />
        </div>
    )
};

export default ContactInfo