import React from 'react';
import ContactHours from '../common/ContactHours';
import ContactDetails from '../common/ContactDetails';

const staffPhotoBel = process.env.PUBLIC_URL + './assets/bel-profile-headshot.jpg';
const staffPhotoJon = process.env.PUBLIC_URL + './assets/jon-profile-headshot.jpg';
const whiteLogoNavy = process.env.PUBLIC_URL + './assets/white-logo-navy.png';

const StaffSection = () => {
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
                        <p>
                            Contact Info: ............
                        </p>
                    </div>
                </div>
                <div className="staff-card">
                    <div className="staff-card-image">
                        <img src={staffPhotoBel} alt="Woman's face and shoulders. She has brown hair and is wearing a jacket with the Looking Up Landscapes logo." />
                    </div>
                    <div className="staff-card-details">
                        <h4>Bel McGill</h4>
                        <span>Co-owner & Business Administrator</span>
                        <p>
                            Contact Info: ............
                        </p>
                    </div>
                </div>
            </div>
            <div className="staff-section-footer">
                <ContactDetails />
                <ContactHours />
                <img src={whiteLogoNavy} id="staff-footer-logo" alt="Outline of house with a leaf incorporated into the lines. The words Looking Up Landscapes in bold."/>
            </div>
        </section>
    )
};

export default StaffSection;