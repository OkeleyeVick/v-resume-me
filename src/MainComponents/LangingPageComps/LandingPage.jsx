import React, { memo, useEffect, useState } from "react";
import Footer from "../GeneralComponents/Footer";
import Header from "../GeneralComponents/Header";
import PageLoader from "../GeneralComponents/PageLoader";
import AnimatedSection from "./AnimatedSection";
import FinalSection from "./FinalSection";
import FirstSection from "./FirstSection";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import "../../assets/css/fonts.css";
import { MotionConfig, motion } from "framer-motion";

const baseFont = {
	Syne: "Rubik",
};

const LandingPage = () => {
	const [showPreloader, setShowPreloader] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPreloader(false);
		}, 2500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div style={{ fontFamily: baseFont.Syne }}>
			{showPreloader && (
				<MotionConfig>
					<motion.div animate={{ opacity: 0 }}>
						<PageLoader />
					</motion.div>
				</MotionConfig>
			)}
			{!showPreloader && (
				<React.Fragment>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
						<Header />
						<HeroSection />
						<AnimatedSection />
						<FirstSection />
						<SecondSection />
						<ThirdSection />
						<FinalSection />
						<Footer />
					</motion.div>
				</React.Fragment>
			)}
		</div>
	);
};

export default memo(LandingPage);
