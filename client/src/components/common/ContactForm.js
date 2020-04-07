import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [time, setTime] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/mail-request', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify({ name, number, time, message }) // body data type must match "Content-Type" header
        });
        console.log(response.json()); // parses JSON response into native JavaScript objects
        
      }

    return (
        <div className="contact-form-container">
            <h3>Send Us A Message</h3>
            <form className="contact-form" id="public-contact" onSubmit={handleSubmit}>
                <input type="text" name="name" id="contact-name" placeholder="Name*" onChange={(e) => setName(e.target.value)} value={name} required/>
                <input type="text" name="number" id="contact-number" placeholder="Phone Number*" onChange={(e) => setNumber(e.target.value)} value={number} required/>
                <select name="time" id="contact-time" onChange={(e) => setTime(e.target.value)} value={time}>
                    <option disabled selected hidden value="anytime">Best Time?</option>
                    <option value="before 9am">Before 9am</option>
                    <option value="9am - 5pm">9am-5pm</option>
                    <option value="after 5pm">After 5pm</option>
                    <option value="anytime">Anytime</option>
                </select>
                <textarea name="message" id="contact-message" placeholder="What can we help you with*" onChange={(e) => setMessage(e.target.value)} value={message} required>
                </textarea>
            </form>
            <button value="Submit" type="submit" form="public-contact" id="contact-submit">Send Message</button>
        </div>
    )
};

export default ContactForm;