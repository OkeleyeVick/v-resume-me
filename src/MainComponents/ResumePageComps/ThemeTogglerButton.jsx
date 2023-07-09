import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { themeContext } from "./CreateResumePage";

const ThemeTogglerButton = () => {
	const { themeSelection, setSelectedThemes } = useContext(themeContext);
	const { themeSideBar } = themeSelection;

	const [openSideBar, setOpenSideBar] = useState(themeSideBar.isThemeSideBarOpen);

	function handleThemeSideBarState() {
		// open the sidebar and update the state
		// setSelectedThemes((previousThemeData) => {
		// 	return {
		// 		...previousThemeData,
		// 		themeSideBar: {
		// 			...previousThemeData.themeSideBar,
		// 			isThemeSideBarOpen: true,
		// 		},
		// 	};
		// });
		setOpenSideBar((prev) => !prev);
	}

	return (
		<div className="right-0 top-0 flex z-10 items-start justify-end pr-6 pt-3 fixed">
			<button type="button" className="bg-main shadow-md p-3 rounded-full hover:bg-hoverBgClr" onClick={handleThemeSideBarState}>
				<Icon icon="zondicons:color-palette" className="text-white w-6 h-6" />
			</button>
		</div>
	);
};

export default ThemeTogglerButton;
