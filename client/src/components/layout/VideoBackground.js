import React from 'react';
import VideoBg from "reactjs-videobg";

const videoURL = 'https://drive.google.com/file/d/17lqdAAMvUATZ_tYehANOA2d0NAebNPUL/view?usp=sharing'
const poster = 'https://i1.wp.com/lookinguplandscapes.com.au/wp-content/uploads/2018/01/House-slide-1.jpg?fit=1621%2C1080';

const VideoBackground = () => {
    return (
        <VideoBg poster={poster}>
            <VideoBg.Source src={videoURL} type="video/mp4" />
            Your browser does not support this content
        </VideoBg>
    )};

export default VideoBackground;