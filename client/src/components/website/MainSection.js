import React from 'react';
import posterImage from '../../images/wide-video-poster.png';
const videoURL = 'https://drive.google.com/uc?id=1enQ_oifL_fqMt5c1Sg6VnveCnIJbucof'

const MainSection = () => {
    
    return (
        <section name="home" id="main-section-container" className="section-container">
            <div id="main-poster-image-container">
                <video loop={true} muted={true} autoPlay poster={posterImage} className="fullscreen-bg-video" src={videoURL} />
                <h1 id="main-section-key-phrase">Landscapes You Can Live In</h1>
            </div>
        </section>
    )};

export default MainSection;