import React, { useEffect } from 'react';
import MainSection from '../layout/MainSection';
import ProjectSection from '../layout/ProjectSection';
import AboutSection from '../layout/AboutSection';
import StaffSection from '../layout/StaffSection';

const downArrow = process.env.PUBLIC_URL + './assets/down-arrow-white.png';
const baseLine = process.env.PUBLIC_URL + './assets/arrow-base-white.png';

const HomePage = (props) => {
    const { history } = props;
    const config = {
      root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
      rootMargin: '0px',
      threshold: [0.7, 0.95]
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        let targetId = `${entry.target.id}-container`;
        if (entry.intersectionRatio > 0.8) {
          let targetElement = document.getElementById(targetId)
          console.log(targetElement);
        } else if (entry.intersectionRatio > 0.1) {
          console.log(`${targetId} is partially on screen`)
        } else {
          console.log(entry.intersectionRatio)
        }
      });
    }

    useEffect(() => {
      let observer = new IntersectionObserver(handleIntersect, config);
      const containers = document.getElementsByClassName('sentinel');
      for (let container of containers) {
        observer.observe(container);
      }

      const { hash } = history.location;
      if (hash) {
        let node = document.getElementsByName(hash.replace('#', ''));
        if (node.length > 0) {
            node[0].scrollIntoView({
              block: "start",
              behavior: "smooth"
            });
        }
      }
    })

    return (
      <div className='home-page-wrapper'>
        <div id="main-section" className="sentinel"></div>
        <MainSection />
        <div id="project-section" className="sentinel"></div>
        <ProjectSection />
        <div id="about-section" className="sentinel"></div>
        <AboutSection />
        <div id="staff-section" className="sentinel"></div>
        <StaffSection />
        <footer>
          <div id="footer-arrow-container">
              <img src={downArrow} alt="white arrow pointing down" />
              <img src={baseLine} alt="white line with down arrow moving towards it" />
          </div>
        </footer>
      </div>
    )
};

export default HomePage;