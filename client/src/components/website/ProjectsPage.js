import React from 'react';
import useScript from 'react-script-hook';
 
const ProjectsPage = () => {
	const [loading, error] = useScript({ 
		src: 'https://connect.facebook.net/en_US/sdk.js',
		onload:   window.fbAsyncInit = function() {
			window.FB.init({
			  appId            : '214394536562014',
			  autoLogAppEvents : true,
			  xfbml            : true,
			  version          : 'v6.0'
			});
		}
	});

	let width = window.innerWidth;
	width = width > 500 ? 500 : width;
	let height = window.innerHeight * 0.75;
	let spacing = (window.innerWidth - width) / 2
	const fbStyles = {
		marginLeft: spacing
	};
   
	if (loading) return <h3>Loading Facebook Api...</h3>;
	if (error) return <h3>Failed to load Stripe API: {error.message}</h3>;
   
	return (
		<div className="projects-page">
			<div id="fb-container">
				<div style={fbStyles} className="fb-page" data-href="https://www.facebook.com/LUL2018/" data-tabs="timeline" data-width={width} data-height={height} data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/LUL2018/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/LUL2018/">Looking Up Landscapes</a></blockquote></div>
			</div>
		</div>
	);
  }

export default ProjectsPage;