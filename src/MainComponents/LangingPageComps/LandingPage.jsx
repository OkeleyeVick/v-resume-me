import React from "react";
import AnimatedSection from "./AnimatedSection";
import FirstSection from "./FirstSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";

const LandingPage = () => {
	return (
		<div>
			<Header />
			<HeroSection />
			<AnimatedSection />
			<FirstSection />
			<SecondSection />
		</div>
	);
};

export default LandingPage;
