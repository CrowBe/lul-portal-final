import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import HomeNavbar from '../common/HomeNavbar';
import MainSection from '../layout/MainSection';
import ProjectSection from '../layout/ProjectSection';
import AboutSection from '../layout/AboutSection';
import StaffSection from '../layout/StaffSection';
import { debounce } from 'throttle-debounce';

const HomePage = () => {
    const [position, setPosition] = useState(0);
    const [inProp, setInProp] = useState(false);
    // These variables are used in combination with the scroll handler
    // to simulate route changing on scroll.
    const componentOptions = [
        MainSection, ProjectSection, 
        AboutSection, StaffSection
    ];
    const CurrentComponent = componentOptions[position];

    // The scroll handler recursively removes itself to ensure it is not
    // called multiple times on wheel or swipe

    const scrollHandler = debounce(300, ((e) => {
        
        console.log("1")
        if (e.deltaY > 0) {
            if (position < 3) {
                setPosition(position + 1);
                setInProp(true)
            }
        } else if (position > 0) {
            setPosition(position - 1);
            setInProp(true)
        }
        e.target.removeEventListener(e.type, scrollHandler)
    }));

    const linkIndicator = async () => {
        let links = await document.getElementsByClassName("home-sidebar-button")
        for (let link of links) {
            if (link.id !== `link-${position}`) {
                link.classList.remove("current-link")
            } else if (link.id === `link-${position}`) {
                link.classList.add("current-link")
            }
        } 
    }
    
    // The use effect hook is given a set timout before adding the handler so that the scroll handler
    // isn't immediately added on load. This avoids skipping pages on a fast load.
    useEffect(() => {
        const addScrollListener = async () => {
            let wrapper = await document.getElementById("home-page-wrapper");
            wrapper.addEventListener('wheel', scrollHandler)
            wrapper.addEventListener('touchmove', scrollHandler)
        }
        linkIndicator();
        addScrollListener()
    })
    
    return (
        <CSSTransition
        in={inProp}
        timeout={200}
        classNames="section"
    >
        <div id="home-page-wrapper">
            <HomeNavbar setter={setPosition}/>
            <CurrentComponent />
        </div>
    </CSSTransition>
    )
};

export default HomePage;