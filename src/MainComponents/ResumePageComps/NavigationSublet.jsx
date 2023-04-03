import React, { useContext } from "react";
import { componentContext } from "./CreateResumePage";
import OffcanvasLoader from "../../assets/UI-Components/OffcanvasLoader";

const NavigationSublet = () => {
	const { component } = useContext(componentContext);
	return (
		<div className="bg-custom_2 w-full h-full text-white relative">
			<div className="h-full p-4 px-3 transition duration-500 ease-in-out">{component}</div>
			<OffcanvasLoader />
		</div>
	);
};

export default NavigationSublet;
