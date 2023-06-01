
import React, { useState } from 'react';

const LoadingScreen = () => {
	const [isLoading, setIsLoading] = useState(true);

	if (isLoading) {
		return (
			<div className="loading-screen-container">
				<h2>Loading...</h2>
				<svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-ripple">
					<circle cx="50" cy="50" r="16.3643" fill="none" stroke="#93d0eb" strokeWidth="3">
						<animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="1.3" keySplines="0 0.2 0.8 1" begin="-0.65s"  
						repeatCount="indefinite" />
						<animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1.3" 
						keySplines="0.2 0 0.8 1" begin="-0.65s" repeatCount="indefinite" />
					</circle>
					<circle cx="50" cy="50" r="41.4638" fill="none" stroke="#809075" strokeWidth="3">
						<animate attributeName="r" calcMode="spline" values="0;40" keyTimes="0;1" dur="1.3" keySplines="0 0.2 0.8 1" begin="0s" 
						repeatCount="indefinite" />
						<animate attributeName="opacity" calcMode="spline" values="1;0" keyTimes="0;1" dur="1.3" 
						keySplines="0.2 0 0.8 1" begin="0s" repeatCount="indefinite" />
					</circle>
				</svg>
			</div>
		);
	} else {
		return null;
	}
};

export default LoadingScreen;