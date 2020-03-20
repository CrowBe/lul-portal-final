import React, { useEffect } from 'react';
import MainSection from '../layout/MainSection';
import ProjectSection from '../layout/ProjectSection';
import AboutSection from '../layout/AboutSection';
import StaffSection from '../layout/StaffSection';

const HomePage = (props) => {
    const {history} = props;
    useEffect(() => {

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
        <MainSection />
        <ProjectSection />
        <AboutSection />
        <StaffSection />
      </div>
    )
};

export default HomePage;