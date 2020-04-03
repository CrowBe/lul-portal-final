import React from 'react';
import ContactHours from '../common/ContactHours';
import ContactInfo from '../common/ContactInfo';
import staffPhotoBel from '../../images/bel-profile-headshot.jpg';
import staffPhotoJon from '../../images/jon-profile-headshot.jpg';
import whiteLogoNavy from '../../images/white-logo-navy.jpg';

const StaffSection = () => {
    const contactInfo = { 
        "jon": { number: "+61 409 360 118", email: "jon@lookinguplandscapes.com.au"},
        "bel": { number: "+61 409 420 118", email: "bel@lookinguplandscapes.com.au"}
    }

    const showContactInfo = (e) => {
        const { target } = e;
        const phone = document.createElement("P");
        const number = document.createTextNode(`${contactInfo[target.name].number}`);
        const email = document.createElement("P");
        const address = document.createTextNode(`${contactInfo[target.name].email}`)
        phone.appendChild(number);
        email.appendChild(address);
        target.parentNode.appendChild(phone);
        target.parentNode.appendChild(email);
        target.parentNode.removeChild(target);
    }

    return (
        <section name="staff" id="staff-section-container" className="section-container">
            <div id="staff-card-container" >
                <div className="staff-card">
                    <div className="staff-card-image">
                        <img src={staffPhotoJon} alt="Man's face and shoulders. He has brown hair and is wearing a jacket with the Looking Up Landscapes logo." />
                    </div>
                    <div className="staff-card-details">
                        <h4>Jon McGill</h4>
                        <span>Co-owner & Head Landscaper</span>
                        <div className="staff-contact-info" >
                            <p>Contact Information:</p>
                            <button onClick={showContactInfo} name="jon">
                                Click to Show
                            </button>
                        </div>
                    </div>
                </div>
                <div className="staff-card">
                    <div className="staff-card-image">
                        <img src={staffPhotoBel} alt="Woman's face and shoulders. She has brown hair and is wearing a jacket with the Looking Up Landscapes logo." />
                    </div>
                    <div className="staff-card-details">
                        <h4>Bel McGill</h4>
                        <span>Co-owner & Business Administrator</span>
                        <div className="staff-contact-info" >
                            <p>Contact Information:</p>
                            <button onClick={showContactInfo} name="bel">
                                Click to Show
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="staff-section-footer">
                <ContactInfo />
                <ContactHours />
                <div id="staff-footer-logo">
                    <img src={whiteLogoNavy} alt="Outline of house with a leaf incorporated into the lines. The words Looking Up Landscapes in bold."/>
                    <p>"Landscapes You Can Live In"</p>
                </div>
            </div>
        </section>
    )
};

export default StaffSection;