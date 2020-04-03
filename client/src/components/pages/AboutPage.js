import React, { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
    return (
        <div id="about-page">
            <h2>About Us</h2>
            <p>
                In 2005, while working for the original McGill family business The North Rocks Greenery,
                Jon McGill took on his first Garden Maintenance job armed with just a pair of secateurs.
            </p>
            <p>
                The business grew significantly, servicing Sydney's Hills District, and expanded to certified Landscaping services.
                The McGill family then re-branded the business after selling the Nursery before moving away from Garden Maintenance.
            </p>
            <p>
                Under the new name, <span>Looking Up Landscapes </span>
                services Newcastle and the Hunter Valley through to Lake Macquarie and the Central Coast.
                The Landscaping teams are still managed by Jon, who now has well over a decade of experience and qualifications, and supported operationally by his wife Belinda.
            </p>
            <h2>Our Values</h2>
            <p>
                <span>Integrity: </span>We provide a quality product,
                informed by your desires and expectations,
                for a price that genuinely represents that product.
            </p>
            <p>
                <span>Excellence: </span>We seek to go beyond ‘good enough’
                to ‘really well done’; building a product that lasts,
                that achieves results aesthetically and functionally while
                ultimately exceeding your expectations.
            </p>
            <p>
                <span>Genuine Care: </span>We are people who provide
                not just a physical product, but a valuable service
                that is sensitive to needs of each customer along with their
                personal and family space.
            </p>
        </div>
    )
};

export default AboutPage;