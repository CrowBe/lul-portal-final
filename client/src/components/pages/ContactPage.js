import React from 'react';
import ContactForm from '../common/ContactForm';
import ContactHours from '../common/ContactHours';
import ContactInfo from '../common/ContactInfo';

const ContactPage = () => {
    return (
        <div className="contact-page-container">
            <div className="contact-form-section">
                <h2>Contact Us</h2>
                <p>We offer a full range of landscaping services with over 15 years of experience.</p>
                <ContactForm />
            </div>
            <div className="contact-details-section">
                <ContactInfo />
                <ContactHours />
            </div>
        </div>
    )
}
export default ContactPage