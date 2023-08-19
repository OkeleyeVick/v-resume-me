import React from "react";
import Footer from "../GeneralComponents/Footer";
import Header from "../GeneralComponents/Header";
import "../../assets/css/fonts.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<React.Fragment>
			<motion.div
				initial={{ opacity: 0.3 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2 }}
				className="min-h-screen flex flex-col justify-between font-[Rubik] dark:bg-dark_theme_text_clr">
				<Header />
				<div className="text-center">
					<h2 className="font-bold text-3xl dark:text-white">PageNotFound</h2>
					<div className="mt-8">
						<Link to="/" className="bg-main text-white text-sm hover:bg-hoverBgClr py-3 rounded-full px-10 ">
							Go home
						</Link>
					</div>
				</div>
				<Footer />
			</motion.div>
		</React.Fragment>
	);
};

export default PageNotFound;
