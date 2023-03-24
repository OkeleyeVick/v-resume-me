import React, { useEffect, useState } from "react";
import PageLoader from "../PageLoader";
import AnimatedSection from "./AnimatedSection";
import FinalSection from "./FinalSection";
import FirstSection from "./FirstSection";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

const LandingPage = () => {
	const [showPreloader, setShowPreloader] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPreloader(false);
		}, 2500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			{showPreloader && <PageLoader />}
			{!showPreloader && (
				<>
					<Header />
					<HeroSection />
					<AnimatedSection />
					<FirstSection />
					<SecondSection />
					<ThirdSection />
					<FinalSection />
				</>
			)}
		</div>
	);
};

export default LandingPage;
