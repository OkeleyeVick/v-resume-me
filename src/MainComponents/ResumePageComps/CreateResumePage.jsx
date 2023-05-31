import React, { createContext, memo, useState } from "react";
import NavigationSublet from "./NavigationSublet";
import Navigation from "./Navigation";
import TemplateDisplay from "./TemplateDisplay";
import PersonalComponent from "./NavComponents/PersonalComponent";
import "../../assets/css/fonts.css";

const baseFont = {
	Syne: "Syne",
};

export const componentContext = createContext();
export const MobileMenuContext = createContext();
const CreateResumePage = () => {
	const [component, setComponent] = useState(<PersonalComponent />);
	const [isActiveMobileMenu, setMobileMenu] = useState(false);
	const [font, setFont] = useState("Mulish");

	return (
		<React.Fragment>
			<MobileMenuContext.Provider value={{ isActiveMobileMenu, setMobileMenu }}>
				<componentContext.Provider value={{ font, setFont, component, setComponent }}>
					<div className="lg:flex min-h-screen relative" style={{ fontFamily: baseFont.Syne }}>
						<div
							className={`fixed lg:hidden w-full h-full z-[90] backdrop-blur-[2px] bg-black bg-opacity-20 ${
								isActiveMobileMenu ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
							}`}></div>
						<div
							className={`flex items-center fixed z-[99] w-[90%] sm:w-3/5 md:w-2/4 lg:relative lg:w-[35%] xl:w-[31.5%] h-screen ${
								isActiveMobileMenu ? "left-0 translate-x-0" : "-left-full lg:left-0 -translate-x-3 lg:-translate-x-0"
							}`}>
							<Navigation />
							<NavigationSublet />
						</div>
						<div className="h-screen lg:w-[65%] xl:w-[69.5%] bg-custom_1">
							<TemplateDisplay />
						</div>
					</div>
				</componentContext.Provider>
			</MobileMenuContext.Provider>
		</React.Fragment>
	);
};

export default memo(CreateResumePage);
