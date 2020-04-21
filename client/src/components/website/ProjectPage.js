import React, { useEffect} from 'react';
 
const ProjectPage = () => {
    useEffect(() => {
        document.addEventListener('fb_init', e => window.FB.XFBML.parse());
    })
    return (
        <div className="fb-page" data-href="https://www.facebook.com/LUL2018/" data-tabs="timeline" data-width="500" data-height="1000px" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true"></div>
    );
}

export default ProjectPage;