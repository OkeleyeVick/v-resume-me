import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import { SketchPicker } from "react-color";
import { GeneralContext, themeContext } from "../../MainComponents/ResumePageComps/CreateResumePage";
import "../css/fonts.css";
import "../../MainComponents/ResumePageComps/Components/date.css";
import { memo } from "react";
import { Switch } from "@headlessui/react";

const fontFamily = [
	"system-ui",
	"Stolzl",
	"IBMPlexSans",
	"Fira Code",
	"Inter",
	"Montserrat",
	"Mulish",
	"Nunito Sans",
	"Rubik",
	"Ubuntu",
	"Source Serif Pro",
	"Epilogue",
	"SpaceGrotesk",
	"Henk Work",
	"Raleway",
	"Work Sans",
	"Grotesk",
	"Sora",
	"Magnat",
	"Exo",
	"Expletus Sans",
	"Roobert",
	"CASaygon",
	"Cormonrant",
	"Bianco",
	"Quicksand",
];

const ThemeFamily = () => {
	// contexts
	const { isAllButtonVisible, setIsAllButtonVisibility } = useContext(GeneralContext);
	const { themeSelection, setSelectedThemes, setSideBarState, sideBarState, largePreview } = useContext(themeContext);
	const { userResumeColor, font } = themeSelection;
	// states
	const [colorThemeState, setColorThemeState] = useState(userResumeColor.selectedColor.color);
	const [isActiveColorDropdown, setisActiveColorDropdown] = useState(userResumeColor.colorSelectionMenu.isToggleThemeActive);
	const [isActiveFontDropdown, setisActiveFontDropdown] = useState(false);
	const [selectedFont, setSelectedFont] = useState(font.family.customFont);

	// functions
	function handleColorThemeChange(event) {
		// function that handles the color set by the user
		setColorThemeState(event.hex);
		setSelectedThemes((previousTheme) => ({
			...previousTheme,
			userResumeColor: {
				...previousTheme.userResumeColor,
				selectedColor: {
					...previousTheme.userResumeColor.selectedColor,
					color: event.hex,
				},
			},
		}));
	}

	function handleColorDropdownState() {
		// function that handles if the dropdown color state is active or not
		setisActiveColorDropdown((prevState) => !prevState);
	}

	function useSelectedFont(font) {
		setSelectedFont(font);
		setSelectedThemes((previousData) => {
			return {
				...previousData,
				font: {
					...previousData.font,
					family: {
						...previousData.font.family,
						customFont: font,
					},
				},
			};
		});
		setisActiveFontDropdown(false);
	}

	function closeSideBar() {
		// close the sidebar and update the object state
		setSelectedThemes((previousData) => {
			return {
				...previousData,
				themeSideBar: {
					...previousData.themeSideBar,
					isThemeSideBarOpen: false,
				},
			};
		});
		setSideBarState(false);
	}

	function openDropdown() {
		setisActiveFontDropdown((previousData) => !previousData);
	}

	const handleButtonsVisibility = function () {
		setIsAllButtonVisibility((previous) => !previous);
	};

	return (
		<div
			className={`${
				sideBarState === true ? `w-full lg:w-1/2 overflow-auto` : `w-0 opacity-5 overflow-hidden`
			} fixed z-50 backdrop-blur-[2px] h-screen top-0 py-[6px] pl-2 left-0 origin-left bg-black bg-opacity-25 duration-100 ease-linear`}>
			<div
				className={`p-4 h-full rounded-tr-[1rem] rounded-[.7rem] dark:bg-dark_theme_text_clr bg-white shadow-md flex flex-col gap-y-6 relative ease-linear duration-100 ${
					sideBarState ? "w-4/5 md:w-3/5" : "overflow-hidden opacity-50 w-0"
				}`}>
				<div className="close absolute -right-12">
					<button type="button" className={`bg-gray-50 z-50 shadow-md rounded-full p-2`} onClick={closeSideBar}>
						<Icon icon="mi:close" className="w-5 h-5" />
					</button>
				</div>
				<div title="theme-title">
					<h1 className="text-slate-900 font-medium text-xl dark:text-label_clr">Theme Options</h1>
				</div>
				<div className="flex flex-col gap-y-2">
					<h6 className="font-medium dark:text-label_clr">Font</h6>
					<div className="rounded-md relative">
						<button
							type="button"
							className={`flex items-center justify-between py-3 px-4 border border-solid hover:bg-ash_white w-full rounded-md dark:hover:bg-dark_theme ${
								isActiveFontDropdown
									? "dark:border-main border-main dark:bg-dark_theme bg-gray-100"
									: "dark:border-label_clr border-border_clr"
							}`}
							onClick={openDropdown}>
							<span className="text-[.9rem] dark:text-label_clr" name="font" style={{ fontFamily: `${selectedFont ?? "Roboto"}` }}>
								{selectedFont ?? "Select font"}
							</span>
							<Icon
								icon="fluent:chevron-down-24-filled"
								className={`w-5 h-5 duration-150 dark:text-label_clr ease-linear transition-transform ${
									isActiveFontDropdown ? "rotate-180" : "rotate-0"
								}`}
							/>
						</button>
						<div
							className={`${
								isActiveFontDropdown === true ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
							} origin-top font-dropdown-container rounded-md absolute top-full shadow-md mt-2 left-0 right-0 dark:text-label_clr dark:bg-dark_theme_text_clrbg-white z-50 grid  items-start duration-100 overflow-hidden`}>
							<div
								className={`min-h-0 max-h-[200px] px-2 overflow-x-hidden overflow-y-auto border-main bg-white dark:border-main dark:bg-dark_theme rounded-md scroll ${
									isActiveFontDropdown ? "py-2 border" : "py-0 border-0"
								}`}>
								{fontFamily.map((font) => (
									<button
										type="button"
										className="p-2 w-full rounded-[4px] text-start outline-transparent focus-visible:outline-main text-sm bg-transparent hover:bg-main hover:bg-opacity-20 hover:text-main dark:text-label_clr"
										key={font}
										style={{ fontFamily: `${font}` }}
										onClick={() => useSelectedFont(font)}>
										{font}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-y-2 relative">
					<div className="flex items-center gap-x-4">
						<h6 className="font-medium dark:text-label_clr">Color:</h6>
						<button
							type="button"
							className={`rounded-full active:border-main p-2 shadow-custom_3 border border-solid border-main ${
								isActiveColorDropdown ? "bg-main hover:bg-hoverBgClr" : "bg-white"
							}`}
							onClick={handleColorDropdownState}>
							<Icon icon="fluent-emoji:artist-medium-light" className="w-8 h-8" />
						</button>
					</div>
					<div
						className={`border transition duration-200 border-solid bg-white border-border_clr p-2 text-[.8rem] rounded-md absolute -right-4 -top-4 z-[2] translate-y-3 origin-top-left w-max shadow-md ${
							isActiveColorDropdown ? "scale-100" : " scale-0"
						}`}>
						<SketchPicker color={colorThemeState} onChange={handleColorThemeChange} />
					</div>
				</div>
				<div className="flex align-items-center justify-between">
					<h6 className="font-medium dark:text-label_clr">Turn off all buttons</h6>
					<Switch
						checked={isAllButtonVisible}
						onChange={handleButtonsVisibility}
						className={`${isAllButtonVisible ? "bg-main" : "bg-gray-200"} relative inline-flex h-6 w-11 items-center rounded-full`}>
						<span className="sr-only">Enable notifications</span>
						<span
							className={`${
								isAllButtonVisible ? "translate-x-6" : "translate-x-1"
							} inline-block h-4 w-4 transform rounded-full bg-white transition`}
						/>
					</Switch>
				</div>
				<div className="mt-4 p-4 border border-solid border-border_clr rounded-md">
					<span className="text-slate-400 text-sm sm:text-base">More theme options coming soon...</span>
				</div>
			</div>
		</div>
	);
};

export default memo(ThemeFamily);
