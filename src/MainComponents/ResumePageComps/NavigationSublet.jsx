import React, { useContext } from "react";
import { componentContext } from "./CreateResumePage";

const NavigationSublet = () => {
	const { component } = useContext(componentContext);
	return (
		<div className="bg-custom_2 w-full h-full">
			<div className="h-full p-4">{component}</div>
		</div>
	);
};

export default NavigationSublet;
