import { Icon } from "@iconify/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useThemeMode from "../../../assets/hooks/useThemeMode";
const ThemeModeSwitcher = () => {
	const [colorTheme, setTheme] = useThemeMode();
	const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

	const toggleDarkMode = () => {
		setTheme(colorTheme);
		setDarkSide();
	};

	return (
		<div className="fixed lg:left-[43%] z-[10]">
			<div className="flex items-center justify-center flex-col">
				<div className="string h-10 w-[1px] bg-black dark:bg-white"></div>
				<button type="button" onClick={() => toggleDarkMode()} className={`${colorTheme === "light" ? "text-white" : ""} rotate-180`}>
					<Icon
						icon={`${colorTheme === "light" ? "majesticons:lightbulb-shine" : "majesticons:lightbulb-shine-line"}`}
						className="w-10 h-10"
					/>
				</button>
			</div>
		</div>
	);
};

export default ThemeModeSwitcher;
