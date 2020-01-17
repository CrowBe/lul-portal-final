import React, { useState, useEffect } from 'react';
import { throttle, debounce } from 'throttle-debounce';
import HomeSidebar from '../common/HomeSidebar';
import SectionHandler from '../layout/SectionHandler';
import FooterArrow from '../common/FooterArrow';


const HomePage = () => {
    const [position, setPosition] = useState(0);
    const [previousPosition, setPreviousPosition] = useState(null);

    // Lodash debounce function is used to ensure the function is not called multiple times
    // This would rapidly move through components and lag the client.
    const scrollHandler = debounce(200, ((e) => {
        setPreviousPosition(position);
        if (e.deltaY > 0) {
            if (position < 3) {
                setPosition(position + 1);
            }
        } else if (position > 0) {
            setPosition(position - 1);
        }
    }));

    const linkHandler = throttle(200, (event) => {
        setPreviousPosition(position);
        setPosition(Number(event.target.id[5]));
    });

    const addListeners = () => {
        let container = document.getElementsByClassName("section-container")[0];
        container.addEventListener('wheel', scrollHandler);

        let buttons = document.getElementsByClassName("home-sidebar-button");
        for (let button of buttons) {
            button.addEventListener('click', linkHandler)
        }

        let homeButton = document.getElementById("main-nav-home");
        homeButton.addEventListener('click', (event) => {
            setPosition(0);
        });
    };

    const sectionTransitionHandler = () => {
        let containers = document.getElementsByClassName("section-container");
        containers[0].classList.add("section-enter")
        if (containers.length > 1) {
            containers[1].classList.add("section-exit")
        }
    }

    
    // the useEffect hook adds the event listeners once the page has rendered
    useEffect(() => {
        addListeners();
        sectionTransitionHandler();
    })
    
    return (
        <div id="home-page-wrapper" >
            <SectionHandler position={position}  previousPosition={previousPosition}/>
            <HomeSidebar position={position} />
            <FooterArrow />
        </div>
    )
};

export default HomePage;