import React from 'react';
import VideoBg from "reactjs-videobg";

const videoURL = 'https://drive.google.com/file/d/17lqdAAMvUATZ_tYehANOA2d0NAebNPUL/view?usp=sharing'
const poster = process.env.PUBLIC_URL + './assets/colour-logo.png';

const VideoBackground = () => {
    return (
        <VideoBg poster={poster}>
            <VideoBg.Source src={videoURL} type="video/mp4" />
            Your browser does not support this content
        </VideoBg>
    )};

export default VideoBackground;