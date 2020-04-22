import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [time, setTime] = useState("");
    const [message, setMessage] = useState("");
    const [redirect, setRedirect ] = useState(null);

    if (redirect) {
        return(<Redirect to={redirect}/>)
    }

    const getFormData = (form) => {
        const elements = form.elements;
        let honeypot;
    
        const fields = Object.keys(elements).filter(function(k) {
          if (elements[k].name === "honeypot") {
            honeypot = elements[k].value;
            return false;
          }
          return true;
        }).map(function(k) {
          if(elements[k].name !== undefined) {
            return elements[k].name;
          // special case for Edge's html collection
          }else if(elements[k].length > 0){
            return elements[k].item(0).name;
          }
        }).filter(function(item, pos, self) {
          return self.indexOf(item) === pos && item;
        });
    
        const formData = {};
        fields.forEach(function(name){
          const element = elements[name];
          
          // singular form elements just have one value
          formData[name] = element.value;
    
          // when our element has multiple items, get their values
          if (element.length) {
            const data = [];
            for (let i = 0; i < element.length; i++) {
              let item = element.item(i);
              if (item.checked || item.selected) {
                data.push(item.value);
              }
            }
            formData[name] = data.join(', ');
          }
        });
    
        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail
          = form.dataset.email || ""; // no email by default
    
        return {data: formData, honeypot: honeypot};
    }

    const handleFormSubmit = (event) => {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var formData = getFormData(form);
        var data = formData.data;
    
        // If a honeypot field is filled, assume it was done so by a spam bot.
        if (formData.honeypot) {
          return false;
        }
    
        // disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert("Thanks for contacting us! We'll get back to you as soon as we can.");
                setRedirect("/");
            }
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
    }

    return (
        <div className="contact-form-container">
            <h3>Send Us A Message</h3>
            <form id="contact-form" className="gform pure-form pure-form-stacked" method="POST" onSubmit={handleFormSubmit}
            action="https://script.google.com/macros/s/AKfycbwlF3R8lKfK2W1ksgU9clZtKmGLlO0o8G-PYAqW22WwbnA5GBMQ/exec">
                <input type="text" name="name" id="contact-name" placeholder="Name*" onChange={(e) => setName(e.target.value)} value={name} required/>
                <input type="text" name="number" id="contact-number" placeholder="Phone Number*" onChange={(e) => setNumber(e.target.value)} value={number} required/>
                <select name="time" id="contact-time" onChange={(e) => setTime(e.target.value)} value={time}>
                    <option hidden defaultValue value="anytime">Best Time?</option>
                    <option value="before 9am">Before 9am</option>
                    <option value="9am - 5pm">9am-5pm</option>
                    <option value="after 5pm">After 5pm</option>
                    <option value="anytime">Anytime</option>
                </select>
                <textarea name="message" id="contact-message" placeholder="What can we help you with*" onChange={(e) => setMessage(e.target.value)} value={message} required>
                </textarea>
                <input id="honeypot" type="text" name="honeypot" value="" />
            </form>
            <button type="submit" form="contact-form" id="contact-submit">Send Message</button>
        </div>
    )
};

export default ContactForm;