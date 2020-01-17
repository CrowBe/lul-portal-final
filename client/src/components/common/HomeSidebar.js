import React, { useEffect } from 'react';

const HomeSidebar = (props) => {
    const { position } = props;
    const links = [
        { name: 'Home', id: 'link-0' },
        { name: 'Projects', id: 'link-1' },
        { name: 'About', id: 'link-2' },
        { name: 'Staff', id: 'link-3' }
    ]
    const linkTransition = async () => {
        let links = document.getElementsByClassName('home-sidebar-button');
        for (let link of links) {
            link.classList.remove('current-link');
        }
        let link = await document.getElementById(`link-${position}`);
        link.classList.add("current-link");
    };

    useEffect(() => {
        linkTransition();
    })

    return (
    <nav id="home-sidebar">
        {links.map(link => (
            <button className="home-sidebar-button" id={link.id} key={link.id}>
                {link.name}
            </button>
        ))}
    </nav>
    )
}

export default HomeSidebar;