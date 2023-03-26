import React, { createContext, useState } from "react";
import NavigationSublet from "./NavigationSublet";
import Navigation from "./Navigation";
import TemplateDisplay from "./TemplateDisplay";
import PersonalComponent from "./NavComponents/PersonalComponent";

export const componentContext = createContext();
const CreateResumePage = () => {
	const [component, setComponent] = useState(<PersonalComponent />);

	return (
		<React.Fragment>
			<componentContext.Provider value={{ component, setComponent }}>
				<div className="flex min-h-screen">
					<div className="flex items-center w-[31.5%] h-screen">
						<Navigation />
						<NavigationSublet />
					</div>
					<div className="h-screen w-[69.5%] bg-custom_1">
						<TemplateDisplay />
					</div>
				</div>
			</componentContext.Provider>
		</React.Fragment>
	);
};

export default CreateResumePage;
