import React from 'react';
import ContactInfo from '../layout/ContactInfo';

const ContactPage = () => {
    return (
        <div className="contact-page-container">
            <div className="contact-section-one">
                <div className="contact-form-container">
                    <h2>Contact Form</h2>
                    <p>Let us know how to get in contact with you.</p>
                    <form className="contact-form">
                        <input type="text" name="customer-name" id="contact-name" placeholder="Name*" required/>
                        <input type="text" name="customer-number" id="contact-number" placeholder="Phone Number*" required/>
                        <select name="time" id="contact-time">
                            <option value="default" disabled selected>Best Time</option>
                            <option value="before 9am">Before 9am</option>
                            <option value="9am - 5pm">9am-5pm</option>
                            <option value="after 5pm">After 5pm</option>
                            <option value="anytime">Anytime</option>
                        </select>
                        <textarea name="message" id="contact-message" placeholder="What can we help you with?">
                            
                        </textarea>
                        <input type="submit" value="Send Message" id="contact-submit" />
                    </form>
                </div>
                <p>
                    Your garden and landscaping needs are our priority!
                    No job is too big or small. Get in touch with us
                    today so we can start on your new outdoor space.
                </p>
            </div>
            <ContactInfo />
        </div>
    )
}
export default ContactPage