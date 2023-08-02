import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../assets/images/SVGs/favicon.svg";
import "../../assets/css/fonts.css";

const Header = () => {
	return (
		<React.Fragment>
			<div className="flex items-center justify-between p-4 md:px-16 shadow-sm" style={{ fontFamily: "Rubik" }}>
				<Link to="/" className="flex items-center gap-2">
					<img src={favicon} alt="Logo Image" className="h-6 w-6 md:w-8 md:h-8" />
					<span className="font-semibold md:font-bold text-main">Resumé.me</span>
				</Link>
				<div className="flex items-center"></div>
			</div>
		</React.Fragment>
	);
};

export default Header;
