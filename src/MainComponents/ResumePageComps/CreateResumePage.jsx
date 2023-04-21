import React, { createContext, useState } from "react";
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

	return (
		<React.Fragment>
			<MobileMenuContext.Provider value={{ isActiveMobileMenu, setMobileMenu }}>
				<componentContext.Provider value={{ component, setComponent }}>
					<div className="lg:flex min-h-screen" style={{ fontFamily: baseFont.Syne }}>
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

export default CreateResumePage;
