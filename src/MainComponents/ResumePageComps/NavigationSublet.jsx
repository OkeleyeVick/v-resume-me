import React, { useContext } from "react";
import { MobileMenuContext, componentContext } from "./CreateResumePage";
import { Icon } from "@iconify/react";

const NavigationSublet = () => {
	const { component } = useContext(componentContext);
	const { setMobileMenu } = useContext(MobileMenuContext);
	return (
		<div className="bg-custom_2 w-full h-full text-white relative p-0 m-0">
			<div className="h-full py-3 px-3 transition duration-500 ease-in-out relative">
				<button
					type="button"
					className="absolute bg-main_3 bg-opacity-90 shadow-custom_3 p-2 rounded-full -right-10 top-4 transition ease-in-out duration-300 border border-main hover:bg-opacity-100 lg:invisible"
					onClick={() => {
						setMobileMenu(false);
					}}>
					<Icon icon="ph:x-bold" />
				</button>
				<div>{component}</div>
			</div>
			{/* <OffcanvasLoader /> */}
		</div>
	);
};

export default NavigationSublet;
