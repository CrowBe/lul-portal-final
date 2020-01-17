import React from 'react';

const ContactHours = () => {
    return (
        <div className="contact-hours-grid">
            <span id="weekdays">
                Mon-Fri;
            </span>
            <span id="saturday">
                Saturday:
            </span>
            <span id="sunday">
                Sunday:
            </span>
            <span id="week-hours">
                7am-5pm
            </span>
            <span id="sat-hours">
                9am-3pm
            </span>
            <span id="sun-hours">
                Closed
            </span>
        </div>
    );
}

export default ContactHours