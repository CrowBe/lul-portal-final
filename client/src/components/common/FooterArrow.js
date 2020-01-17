import React from 'react';

const downArrow = process.env.PUBLIC_URL + './assets/down-arrow-white.png';
const baseLine = process.env.PUBLIC_URL + './assets/arrow-base-white.png';


const FooterArrow = () => {
    return (
        <div id="footer-arrow-container">
            <img src={downArrow} alt="white arrow pointing down" />
            <img src={baseLine} alt="white line with down arrow moving towards it" />
        </div>
    )
}

export default FooterArrow