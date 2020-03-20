import React, { useState, useEffect } from 'react';
import projectPhoto1 from '../../images/project-photo-1.jpg';
import projectPhoto2 from '../../images/project-photo-2.jpg';
import projectPhoto3 from '../../images/project-photo-3.jpg';
import projectPhoto4 from '../../images/project-photo-4.jpg';
import projectPhoto5 from '../../images/project-photo-5.jpg';
import projectPhoto6 from '../../images/project-photo-6.jpg';


const ProjectSection = () => {
    const [number, setNumber] = useState(1);

    const imageTransition = async () => {
        let currentImage = await document.getElementById(`image-${number}`);
        setTimeout(() => {
            currentImage.classList.toggle("hover")
            if (number < 6) {
                setNumber(number + 1);
            } else {
                setNumber(1);
            }
          }, 3000);
        currentImage.classList.toggle("hover");
    }

    useEffect(() => {
        imageTransition();
    })

    return (
        <section name="projects" id="project-section-container" className="section-container">
            <div className="project-image-grid">
                <div className="project-image-container">
                    <img src={projectPhoto1} alt="Timber fencing stained reddish-brown beside tiled pool area." />
                    <p className="project-image-text" id="image-1">
                        Timber Screening
                    </p>
                </div>
                <div className="project-image-container">
                    <img src={projectPhoto2} alt="Rough sandstone blocks used for creating a tiered garden bed." />
                    <p className="project-image-text" id="image-2">
                        Garden Design
                        
                    </p>
                </div>
                <div className="project-image-container">
                    <img src={projectPhoto3} alt="Shaped hedgeline curling past a pool fence." />
                    <p className="project-image-text" id="image-3">
                        Lawns & Paving
                    </p>
                </div>
            </div>
            <div className="project-image-grid">
            <div className="project-image-container">
                    <img src={projectPhoto4} alt="Newly made decking and timber stairs stained tan brown" />
                    <p className="project-image-text" id="image-4">
                        Sandstone Work
                    </p>
                </div>
                <div className="project-image-container">
                    <img src={projectPhoto5} alt="New lawn, freshly cut with paver stepping stone path alongside." />
                    <p className="project-image-text" id="image-5">
                        Decking
                    </p>
                </div>
                <div className="project-image-container">
                    <img src={projectPhoto6} alt="New garden bed built beside driveway using wooden retaining walls." />
                    <p className="project-image-text" id="image-6">
                        Retaining Walls
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;