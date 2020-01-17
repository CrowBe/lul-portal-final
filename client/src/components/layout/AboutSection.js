import React from 'react';
import { Link } from "react-router-dom";

const designLogo = process.env.PUBLIC_URL + './assets/design-logo.png';
const constructLogo = process.env.PUBLIC_URL + './assets/construct-logo.png';
const gardenLogo = process.env.PUBLIC_URL + './assets/garden-logo.png';
const maintainLogo = process.env.PUBLIC_URL + './assets/maintain-logo.png';

const AboutSection = () => {
    return (
        <section id='about-section-container' className="section-container">
            <div id="about-text-container">
                <p>
                        A family owned business with a history of <span>Integrity</span>,
                        the experience to upgrade your outdoor space with <span>Excellence</span>,
                        and an attitude of <span>Genuine Care</span> for every customer.
                </p>
                <div id="about-page-link"><Link to="/about-page">Learn more about our company...</Link></div>

            </div>
            <div id="about-icons-container">
                <div>
                    <img src={designLogo} alt="A set of three different types of rulers used for paper design drawings" />
                    <h3>Design</h3>
                </div>
                <div >
                    <img src={constructLogo} alt="A construction hammer" />
                    <h3>Construct</h3>
                </div>
                <div >
                    <img src={gardenLogo} alt="A set of three different gardening shovels and spades" />
                    <h3>Garden</h3>
                </div>
                <div >
                    <img src={maintainLogo} alt="Two shifter wrenches" />
                    <h3>Maintain</h3>
                </div>
            </div>
        </section>
    )
}

export default AboutSection