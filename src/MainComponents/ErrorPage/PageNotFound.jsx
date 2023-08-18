import React from "react";
import Footer from "../GeneralComponents/Footer";
import Header from "../GeneralComponents/Header";
import "../../assets/css/fonts.css";

const PageNotFound = () => {
	return (
		<React.Fragment>
			<div className="min-h-screen flex flex-col justify-between font-[Rubik]">
				<Header />
				<div className="text-center">
					<h2 className="font-bold text-3xl">PageNotFound</h2>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default PageNotFound;
