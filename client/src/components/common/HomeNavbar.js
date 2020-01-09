import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const HomeNavbar = () => {
    const [linkId, setLinkId] = useState("A");

    const linkIndicator = async (linkId) => {
        let links = await document.getElementsByClassName("home-sidebar-button")
        for (let link of links) {
            link.classList.remove("current-link")
        }
        setLinkId(window.location.pathname.replace(/\//, 'A'));
        let currentLink = await document.getElementById(linkId);
        currentLink.classList.toggle("current-link");
    }
    
    useEffect(() => {
        linkIndicator(linkId);
    })

    return (
    <header id="home-sidebar">
        <Link to="/" >
            <div className="home-sidebar-button" id="A"><span>Home</span></div>
        </Link>
        <Link to="/projects" >
            <div className="home-sidebar-button" id="Aprojects"><span>Projects</span></div>
        </Link>
        <Link to="/about" >
            <div className="home-sidebar-button" id="Aabout"><span>About Us</span></div>
        </Link>
        <Link to="/staff" >
            <div className="home-sidebar-button" id="Astaff"><span>Staff</span></div>
        </Link>
    </header>
    )
}

export default HomeNavbar;