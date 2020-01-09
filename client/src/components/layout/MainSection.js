import React from 'react';
import VideoBg from "reactjs-videobg";

const videoURL = 'https://drive.google.com/uc?export=view&id=17lqdAAMvUATZ_tYehANOA2d0NAebNPUL'
const poster = 'https://i1.wp.com/lookinguplandscapes.com.au/wp-content/uploads/2018/01/House-slide-1.jpg?fit=1621%2C1080';

const MainSection = () => {
    return (
        <div id="main-section-layout">
            <VideoBg poster={poster}>
                <VideoBg.Source src={videoURL} type="video/mp4" />
                Your browser does not support this content
            </VideoBg>
            <h1 id="main-section-key-phrase">Landscapes You Can Live In</h1>
        </div>
    )};

export default MainSection;