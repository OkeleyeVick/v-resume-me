import { Icon } from "@iconify/react";
import React from "react";
import useThemeMode from "../../../assets/hooks/useThemeMode";
const ThemeModeSwitcher = () => {
	const [colorTheme, setTheme] = useThemeMode();

	const toggleDarkMode = () => {
		setTheme(colorTheme);
	};

	return (
		<div className="fixed lg:left-[43%] z-[10] top-4">
			<div className="flex items-center justify-center flex-col">
				{/* <div className="string h-10 w-[1px] bg-black dark:bg-white"></div> */}
				<button
					type="button"
					onClick={() => toggleDarkMode()}
					className={`dark:bg-dark_theme dark:border-main border bg-main p-3 rounded-full text-white rotate-180`}>
					<Icon
						// icon={`${colorTheme === "light" ? "majesticons:lightbulb-shine" : "majesticons:lightbulb-shine-line"}`}
						icon={`mdi:theme-light-dark`}
						className="w-6 h-6"
					/>
				</button>
			</div>
		</div>
	);
};

export default ThemeModeSwitcher;
