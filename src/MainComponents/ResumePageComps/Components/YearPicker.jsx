import React from "react";
import useComponentVisible from "../../../assets/hooks/useComponentVisible";
import { Icon } from "@iconify/react";

function getYearList() {
	const currentYear_plus3 = new Date().getFullYear() + 3;
	const startYear = 1950;

	const yearList = [];
	for (let year = currentYear_plus3; year >= startYear; year--) {
		yearList.push(year);
	}

	return yearList;
}

const YearPicker = ({ year, setYear, className }) => {
	const { dropdownRef, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

	function handleYearState() {
		setIsComponentVisible((prev) => !prev);
	}

	return (
		<div name="year" ref={dropdownRef} className={`${className} border border-solid border-gray-50 rounded-md relative`}>
			<button
				type="button"
				className="bg-white border border-solid border-border_clr rounded-md w-full flex items-center p-2 px-3 hover:border-main text-sm justify-between"
				onClick={handleYearState}>
				<span className="overflow-hidden text-ellipsis mr-1 text-gray-600">{year ? year : "Year"}</span>
				<span className=" bg-opacity-60 p-1">
					<Icon icon="fluent:chevron-down-20-filled" className="w-4 h-4 text-gray-500" />
				</span>
			</button>
			<div
				className={`${
					isComponentVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-0"
				} dropdown scroll origin-bottom max-h-[170px] w-full overflow-auto shadow-custom_3 absolute bottom-full z-10 bg-white rounded-md py-2 grid grid-cols-2 px-1 lg:grid-cols-2 mb-1`}
				name="year-dropdown dropdown">
				{getYearList().map((year, yearIndex) => {
					return (
						<React.Fragment key={yearIndex}>
							<button
								className="w-full rounded-sm text-sm p-1 px-1 ease-linear bg-transparent hover:bg-main hover:bg-opacity-20 hover:text-main text-gray-800 leading-tight"
								type="button"
								onClick={() => (setIsComponentVisible(false), setYear(year))}>
								{year}
							</button>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default YearPicker;
