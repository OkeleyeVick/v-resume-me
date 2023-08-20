import React, { memo, useEffect, useState } from "react";
import Footer from "../GeneralComponents/Footer";
import Header from "../GeneralComponents/Header";
import AnimatedSection from "./AnimatedSection";
import FinalSection from "./FinalSection";
import FirstSection from "./FirstSection";
import HeroSection from "./HeroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import "../../assets/css/fonts.css";
import { motion } from "framer-motion";

const LandingPage = () => {
	return (
		<div className="font-[Rubik]">
			<React.Fragment>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
					<Header />
					<HeroSection />
					<FirstSection />
					<ThirdSection />
					<FinalSection />
					<SecondSection />
					<Footer />
				</motion.div>
			</React.Fragment>
		</div>
	);
};

export default memo(LandingPage);
