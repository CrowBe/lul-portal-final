import React from 'react';
import { Link } from "react-router-dom";
import { FaDraftingCompass, FaHammer, FaSeedling, FaTint } from "react-icons/fa";

const AboutSection = () => {
    return (
        <section name="about" id='about-section-container' className="section-container">
            <div id="about-text-container">
                <p>
                        A family owned business with a history of <span>Integrity</span>,
                        the experience to upgrade your outdoor space with <span>Excellence</span>,
                        and an attitude of <span>Genuine Care</span> for every customer.
                </p>
            </div>
            <div id="about-icons-container">
                <div>
                    <div className="about-icon" >
                        <FaDraftingCompass/>
                    </div>
                    <h3>Design</h3>
                </div>
                <div >
                    <div className="about-icon" >
                        <FaHammer />
                    </div>
                    <h3>Construct</h3>
                </div>
                <div >
                    <div className="about-icon" >
                        <FaSeedling/>
                    </div>
                    <h3>Garden</h3>
                </div>
                <div >
                    <div className="about-icon" >
                        <FaTint/>
                    </div>
                    <h3>Maintain</h3>
                </div>
            </div>
            <Link id="about-page-link" to="/about-page"><button>Learn More</button></Link>
        </section>
    )
}

export default AboutSection