import { Icon } from "@iconify/react";
import React from "react";

function getYearList() {
	const currentYear = new Date().getFullYear();
	const startYear = 1950;

	const yearList = [];
	for (let year = currentYear; year >= startYear; year--) {
		yearList.push(year);
	}

	return yearList;
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const DatePicker = () => {
	return (
		<React.Fragment>
			<div name="month" className="border border-solid border-gray-50 rounded-md relative">
				<button type="button">
					<span></span>
					<Icon icon="fluent:chevron-down-20-filled" className="w-5 h-5" />
				</button>
				<div className="max-h-[150px] max-w-[80px] overflow-auto shadow-md absolute">
					{getYearList().map((year, yearIndex) => {
						return (
							<React.Fragment key={yearIndex}>
								<button className="block w-full" type="button">
									{year}
								</button>
							</React.Fragment>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default DatePicker;
