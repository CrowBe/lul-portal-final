import React, { useEffect } from 'react';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useLocation } from "react-router-dom";
import MainSection from './MainSection';
import ProjectSection from './ProjectSection';
import AboutSection from './AboutSection';
import StaffSection from './StaffSection';


const HomePage = () => {
	let location = useLocation();
	  
	const intersectHandler = (entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				let elem = entry.target;
				elem.scrollIntoView({
					block: "start",
					behavior: "smooth"
				});
			}
		});
	}

	const intersectHandlerDebounced = AwesomeDebouncePromise(intersectHandler, 500);

	let options = {
		root: null,
		rootMargin: '0px',
		threshold: [0.5, 0.6, 0.7, 0.8, 0.9]
	}

	let observer = new IntersectionObserver(intersectHandlerDebounced, options);

	useEffect(() => {
		let targets = document.querySelectorAll('.section-container');
		for (let target of targets) {
			observer.observe(target);
		}
		let { hash } = location;
		if (hash) {
			let node = document.getElementsByName(hash.replace('#', ''));
			if (node.length > 0) {
				node[0].scrollIntoView({
				block: "start",
				behavior: "smooth"
				});
			}
		}

	})
	return (
		<div className='home-page-wrapper'>
			<MainSection />
			<ProjectSection />
			<AboutSection />
			<StaffSection />
		</div>
	)
};

export default HomePage;