import React from "react";
import { Link } from "react-router-dom";
import favicon from "../../assets/images/SVGs/resume.me.svg";
import "../../assets/css/fonts.css";
import useThemeMode from "../../assets/hooks/useThemeMode";
import { Icon } from "@iconify/react";

const Header = () => {
	const [colorTheme, setTheme] = useThemeMode();
	return (
		<React.Fragment>
			<div className="flex items-center justify-between p-4 md:px-16 shadow-sm bg-white dark:shadow-white/20 dark:bg-dark_theme_text_clr font-[Rubik] sticky top-0 z-10">
				<Link to="/" className="flex items-center gap-2">
					<img src={favicon} alt="Logo Image" className="h-6 w-6 md:w-8 md:h-8" />
					<span className="font-semibold md:font-bold text-hoverBgClr">Resumé.me</span>
				</Link>
				<div className="flex items-center">
					<button type="button" className="text-hoverBgClr" onClick={() => setTheme(colorTheme)}>
						<Icon icon="line-md:light-dark-loop" className="w-8 h-8 md:w-8 md:h-8" />
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Header;
