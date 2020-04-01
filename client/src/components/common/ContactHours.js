import React from 'react';

const ContactHours = () => {
    return (
        <div className="contact-hours-container">
            <h3 id="contact-hours-header">Office Hours</h3>
            <div className="hours-cards-container">
                <div>
                    <p>Mon-Fri: </p>
                    <p>7am-5pm</p>
                </div>
                <div>
                    <p>Saturday:</p>
                    <p>9am-3pm</p>
                </div>
                <div>
                    <p>Sunday:</p>
                    <p>Closed</p>
                </div>
            </div>
        </div>
    );
}

export default ContactHours