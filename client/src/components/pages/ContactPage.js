import React from 'react';
import ContactInfo from '../layout/ContactInfo';
import ContactForm from '../common/ContactForm';

const ContactPage = () => {
    return (
        <div className="contact-page-container">
            <div className="contact-section-one">
                <p>
                    Your garden and landscaping needs are our priority!
                    No job is too big or small. Get in touch with us
                    today so we can start on your new outdoor space.
                </p>
                <ContactForm />
            </div>
            <div>
                
            </div>
            <ContactInfo />
        </div>
    )
}
export default ContactPage