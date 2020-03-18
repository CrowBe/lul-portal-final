import React from "react";
import { Link } from "react-router-dom";

const logo = process.env.PUBLIC_URL + './assets/colour-logo.png';

const MainNavBar = () => {
    return (
        <nav id='main-nav-bar'>
            <div id="nav-logo">
                <Link to="/"><img src={logo} alt="Logo, outline of a house with a leaf integrated into it." id="main-nav-home" /></Link>
            </div>
            <div id="contact-button">
                <Link to="/contact-form"><button>Contact Us</button></Link>
            </div>
        </nav>
    );
};

export default MainNavBar;