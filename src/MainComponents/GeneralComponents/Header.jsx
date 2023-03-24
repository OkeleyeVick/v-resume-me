import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<React.Fragment>
			<div className="flex items-center justify-between p-5 md:px-16 shadow-sm">
				<Link to="/" className="flex items-center gap-2">
					<Icon icon="carbon:document-multiple-01" className="h-6 w-6 md:w-8 md:h-8 text-main" />
					<span className="font-semibold md:font-bold text-main">Resumé.me</span>
				</Link>
				<div className="flex items-center"></div>
			</div>
		</React.Fragment>
	);
};

export default Header;
