import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { GeneralContext, themeContext } from "../../../MainComponents/ResumePageComps/CreateResumePage";
import { memo } from "react";
import { motion } from "framer-motion";

const ThemeTogglerButton = () => {
	const { setSelectedThemes, sideBarState, setSideBarState } = useContext(themeContext);
	const { isPreviewVisible, setIsPreviewVisible } = useContext(GeneralContext);

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

	const handlePreviewState = function () {
		setIsPreviewVisible((previous) => !previous);
	};

	return (
		<React.Fragment>
			<div className="flex flex-col gap-y-3 fixed pr-3 lg:pr-6 pt-3 right-0 top-0 z-[28]">
				<motion.div className={`flex duration-75 items-start justify-end`}>
					<motion.button
						layout
						type="button"
						className="bg-main shadow-md p-3 rounded-full hover:bg-hoverBgClr focus-visible:outline-red-100 sm:hidden inline"
						onClick={handlePreviewState}>
						<motion.span layoutId="icon">
							<Icon icon={isPreviewVisible ? `icon-park-outline:close` : `gg:menu`} className="text-white w-6 h-6" />
						</motion.span>
					</motion.button>
				</motion.div>
				<div className={`${sideBarState ? "scale-0" : "scale-100"} duration-75 flex items-start justify-end `}>
					<button
						type="button"
						className="bg-main shadow-md p-3 rounded-full hover:bg-hoverBgClr focus-visible:outline-red-100"
						onClick={handleThemeSideBarState}>
						<Icon icon="zondicons:color-palette" className="text-white w-6 h-6" />
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default memo(ThemeTogglerButton);
