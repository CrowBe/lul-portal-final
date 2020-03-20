import React from 'react';
import ContactInfoCard from './ContactInfoCard';
import { FaMobileAlt } from "react-icons/fa";
import { MdPhoneInTalk, MdEmail } from "react-icons/md";

const ContactDetails = () => {
    return (
    <div className="contact-details-container">
        <h4>Contact Info</h4>
        <ContactInfoCard Icon={MdPhoneInTalk} info="(02) 4067 4076" name="phone"/>
        <ContactInfoCard Icon={FaMobileAlt} info="+61 409 360 118" name="mobile"/>
        <ContactInfoCard Icon={MdEmail} info="admin@lookinguplandscapes.com.au" name="email"/>
    </div>
    )
};

export default ContactDetails;