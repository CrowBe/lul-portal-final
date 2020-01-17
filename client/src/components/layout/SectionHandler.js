import React from 'react';
import MainSection from '../layout/MainSection';
import ProjectSection from '../layout/ProjectSection';
import AboutSection from '../layout/AboutSection';
import StaffSection from '../layout/StaffSection';
  
const SectionHandler = (props) => {
  const { position, previousPosition } = props;
  const components = [
    MainSection, ProjectSection,
    AboutSection, StaffSection
  ];
  const CurrentComponent = components[position]
  const ExitingComponent = components[previousPosition] || null;

  if (ExitingComponent) {
    return (
      <>
        <CurrentComponent />
        <ExitingComponent />
      </>
    )
  }
  return (
    <CurrentComponent />
  )
  
}

export default SectionHandler;