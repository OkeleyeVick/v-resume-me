import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { themeContext } from "../../../MainComponents/ResumePageComps/CreateResumePage";
import { memo } from "react";

const ThemeTogglerButton = () => {
	const { themeSelection, setSelectedThemes, sideBarState, setSideBarState } = useContext(themeContext);
	const { themeSideBar } = themeSelection;

	function handleThemeSideBarState() {
		// open the sidebar and update the state
		setSideBarState(true);
		setSelectedThemes((previousThemeData) => {
			return {
				...previousThemeData,
				themeSideBar: {
					...previousThemeData.themeSideBar,
					isThemeSideBarOpen: true,
				},
			};
		});
	}

	return (
		<React.Fragment>
			<div
				className={`${
					sideBarState ? "scale-0" : "scale-100"
				} duration-75 right-0 top-0 flex z-30 items-start justify-end pr-3 lg:pr-6 pt-3 fixed`}>
				<button
					type="button"
					className="bg-main shadow-md p-3 rounded-full hover:bg-hoverBgClr focus-visible:outline-red-100"
					onClick={handleThemeSideBarState}>
					<Icon icon="zondicons:color-palette" className="text-white w-6 h-6" />
				</button>
			</div>
		</React.Fragment>
	);
};

export default memo(ThemeTogglerButton);
