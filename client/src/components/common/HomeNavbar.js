import React from 'react';


const HomeNavbar = (props) => {
    let { setter } = props;

    return (
    <header id="home-sidebar">
        <div className="home-sidebar-button" id="link-0" onClick={() => setter(0)}>
            <span>Home</span>
        </div>
        <div className="home-sidebar-button" id="link-1" onClick={() => setter(1)}>
            <span>Projects</span>
            </div>
        <div className="home-sidebar-button" id="link-2" onClick={() => setter(2)}>
            <span>About Us</span>
            </div>
        <div className="home-sidebar-button" id="link-3" onClick={() => setter(3)}>
            <span>Staff</span>
        </div>
    </header>
    )
}

export default HomeNavbar;