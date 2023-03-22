import React from "react";
import AnimatedSection from "./AnimatedSection";
import FinalSection from "./FinalSection";
import FirstSection from "./FirstSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const LandingPage = () => {
	return (
		<div>
			<Header />
			<HeroSection />
			<AnimatedSection />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FinalSection />
		</div>
	);
};

export default LandingPage;
