import React from "react";
import { Link } from "react-router-dom";

const logo = process.env.PUBLIC_URL + './assets/colour-logo.png';

const MainNavBar = () => {
    return (
        <nav id='main-nav-bar'>
            <span>
                <Link to="/"><img src={logo} alt="Logo" /></Link>&nbsp;
                {/* <Link to="/contactUs">Contact Us</Link> */}
            </span>
        </nav>
    );
};

export default MainNavBar;