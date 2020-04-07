import React from 'react';
import ContactInfoCard from './ContactInfoCard';
import { FaMobileAlt } from "react-icons/fa";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";
// FiGlobe

const ContactInfo = () => {
    return (
    <div className="contact-info-container">
        <h3>Contact Info</h3>
        <div className="contact-card-container">
            <ContactInfoCard Icon={MdPhoneInTalk} info="(02) 4067 4076" name="phone"/>
            <ContactInfoCard Icon={FaMobileAlt} info="+61 409 360 118" name="mobile"/>
            <ContactInfoCard Icon={MdEmail} info="office@lookinguplandscapes.com.au" name="email"/>
        </div>

    </div>
    )
};

export default ContactInfo;