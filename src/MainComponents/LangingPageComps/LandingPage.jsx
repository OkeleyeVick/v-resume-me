import React from "react";
import AnimatedSection from "./AnimatedSection";
import FirstSection from "./FirstSection";
import Header from "./Header";
import HeroSection from "./HeroSection";

const LandingPage = () => {
	return (
		<div>
			<Header />
			<HeroSection />
			<AnimatedSection />
			<FirstSection />
		</div>
	);
};

export default LandingPage;
