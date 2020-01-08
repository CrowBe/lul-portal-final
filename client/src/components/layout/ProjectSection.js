import React from 'react';
import { Link } from "react-router-dom";

const projectPhoto1 = process.env.PUBLIC_URL + './assets/project-photo-1.jpg';
const projectPhoto2 = process.env.PUBLIC_URL + './assets/project-photo-2.jpg';
const projectPhoto3 = process.env.PUBLIC_URL + './assets/project-photo-3.jpg';
const projectPhoto4 = process.env.PUBLIC_URL + './assets/project-photo-4.jpg';
const projectPhoto5 = process.env.PUBLIC_URL + './assets/project-photo-5.jpg';
const projectPhoto6 = process.env.PUBLIC_URL + './assets/project-photo-6.jpg';

const ProjectSection = () => {
    return (
        <div id="project-section-container">
            <div className="project-image-grid">
                <div>
                    <img src={projectPhoto1} alt="" />
                    <div className="project-image-text">Timber Screening</div>
                </div>
                <div><img src={projectPhoto2} alt="" /></div>
                <div><img src={projectPhoto3} alt="" /></div>
            </div>
            <div className="project-image-grid">
                <div><img src={projectPhoto4} alt="" /></div>
                <div><img src={projectPhoto5} alt="" /></div>
                <div><img src={projectPhoto6} alt="" /></div>
            </div>
        </div>
    )
}

export default ProjectSection;