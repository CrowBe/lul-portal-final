import React, { useState, useEffect } from 'react';

const projectPhoto1 = process.env.PUBLIC_URL + './assets/project-photo-1.jpg';
const projectPhoto2 = process.env.PUBLIC_URL + './assets/project-photo-2.jpg';
const projectPhoto3 = process.env.PUBLIC_URL + './assets/project-photo-3.jpg';
const projectPhoto4 = process.env.PUBLIC_URL + './assets/project-photo-4.jpg';
const projectPhoto5 = process.env.PUBLIC_URL + './assets/project-photo-5.jpg';
const projectPhoto6 = process.env.PUBLIC_URL + './assets/project-photo-6.jpg';


const ProjectSection = () => {
    const [number, setNumber] = useState(1);

    const imageTransition = async () => {
        let currentImage = await document.getElementById(`image-${number}`);
        currentImage.classList.toggle("hover");
        setTimeout(() => {
            currentImage.classList.toggle("hover")
            if (number < 6) {
                setNumber(number + 1);
            } else {
                setNumber(1);
            }
          }, 4000);
    }

    useEffect(() => {
        imageTransition();
    })

    return (
        <div id="project-section-container">
            <div className="project-image-grid">
                <div className="project-image-container">
                    <img src={projectPhoto1} alt="Timber fencing stained reddish-brown beside tiled pool area." />
                    <p className="project-image-text" id="image-1">
                        <span>Timber Screening</span>
                    </p>
                </div>
                <div className="project-image-container">
                    <img src={projectPhoto2} alt="Rough sandstone blocks used for creating a tiered garden bed." />
                    <p className="project-image-text" id="image-2">
                        <span>Sandstone Work</span>
                    </p>
                </div>
                <div className="project-image-container">
                    <img src={projectPhoto3} alt="Shaped hedgeline curling past a pool fence." />
                    <p className="project-image-text" id="image-3">
                        <span>Garden Design</span>
                    </p>
                </div>
            </div>
            <div className="project-image-grid">
            <div className="project-image-container">
                    <img src={projectPhoto4} alt="Newly made decking and timber stairs stained tan brown" />
                    <p className="project-image-text" id="image-4">
                        <span>Decking</span>
                    </p>
                </div>
                <div className="project-image-container">
                    <img src={projectPhoto5} alt="New lawn, freshly cut with paver stepping stone path alongside." />
                    <p className="project-image-text" id="image-5">
                        <span>Lawns & Paving</span>
                    </p>
                </div>
                <div className="project-image-container">
                    <img src={projectPhoto6} alt="New garden bed built beside driveway using wooden retaining walls." />
                    <p className="project-image-text" id="image-6">
                        <span>Retaining Walls</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;