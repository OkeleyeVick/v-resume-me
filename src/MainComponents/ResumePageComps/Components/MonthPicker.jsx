import React, { useContext, useState } from "react";
import useComponentVisible from "../../../assets/hooks/useComponentVisible";
import { Icon } from "@iconify/react";

const MonthPicker = ({ className, getMonth }) => {
	const [startMonth, setStartMonth] = useState("");

	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	const { dropdownRef, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

	function handleMonthState() {
		setIsComponentVisible((prev) => !prev);
	}
	function handleMonthValue(monthName, monthIndex) {
		const monthInNumber = monthIndex.toString().length < 2 ? `${0}${monthIndex}` : `${monthIndex}`;
		setStartMonth(monthName);
		getMonth(monthInNumber.toString());
	}
	return (
		<div name="month" ref={dropdownRef} className={`border border-solid border-gray-50 rounded-md relative ${className}`}>
			<button
				type="button"
				className="bg-white border border-solid border-border_clr rounded-md w-full flex items-center p-2 px-3 hover:border-main text-sm justify-between"
				onClick={handleMonthState}>
				<span className="overflow-hidden text-ellipsis mr-1 text-gray-600">{startMonth ? startMonth : "Month"}</span>
				<span className=" bg-opacity-60 p-1">
					<Icon icon="fluent:chevron-down-20-filled" className="w-4 h-4 text-gray-500" />
				</span>
			</button>
			<div
				className={`${
					isComponentVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-0"
				} dropdown scroll origin-bottom max-h-[170px] w-full overflow-auto shadow-custom_3 absolute bottom-full z-10 bg-white rounded-md py-2 mb-1`}
				name="month-dropdown dropdown">
				{months.map((month, monthIndex) => {
					return (
						<React.Fragment key={monthIndex}>
							<button
								className="w-full rounded-sm text-sm py-2 ease-linear bg-transparent hover:bg-main hover:bg-opacity-20 hover:text-main text-gray-800 leading-tight text-start px-3"
								type="button"
								name={month}
								onClick={() => (handleMonthState(false), handleMonthValue(month, monthIndex + 1))}>
								{month}
							</button>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default MonthPicker;
