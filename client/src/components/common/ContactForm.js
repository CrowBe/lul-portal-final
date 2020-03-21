import React, { useState } from 'react';

const ContactForm = () => {
    const [message, setMessage] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerNumber, setCustomerNumber] = useState("");
    const [time, setTime] = useState("");
    return (
        <div className="contact-form-container">
            <h2>Contact Form</h2>
            <p>Let us know how to get in contact with you.</p>
            <form className="contact-form">
                <input type="text" name="customer-name" id="contact-name" placeholder="Name*" onChange={(e) => setCustomerName(e.target.value)} value={customerName} required/>
                <input type="text" name="customer-number" id="contact-number" placeholder="Phone Number*" onChange={(e) => setCustomerNumber(e.target.value)} value={customerNumber} required/>
                <select name="time" id="contact-time" onChange={(e) => setTime(e.target.value)} value={time}>
                    <option disabled selected hidden value="">Best Time?</option>
                    <option value="before 9am">Before 9am</option>
                    <option value="9am - 5pm">9am-5pm</option>
                    <option value="after 5pm">After 5pm</option>
                    <option value="anytime">Anytime</option>
                </select>
                <textarea name="message" id="contact-message" placeholder="What can we help you with*" onChange={(e) => setMessage(e.target.value)} value={message} required>
                </textarea>
                <input type="submit" value="Send Message" id="contact-submit" />
            </form>
        </div>
    )
};

export default ContactForm;