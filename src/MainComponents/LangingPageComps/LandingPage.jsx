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
import { motion } from "framer-motion";

const baseFont = {
	Rubik: "Rubik",
};

const LandingPage = () => {
	const [showPreloader, setShowPreloader] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPreloader(false);
		}, 1800);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div style={{ fontFamily: baseFont.Rubik }}>
			{showPreloader && <PageLoader />}
			{!showPreloader && (
				<React.Fragment>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
						<Header />
						<HeroSection />
						<FirstSection />
						<ThirdSection />
						<FinalSection />
						<AnimatedSection />
						<SecondSection />
						<Footer />
					</motion.div>
				</React.Fragment>
			)}
		</div>
	);
};

export default memo(LandingPage);
