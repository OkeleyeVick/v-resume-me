import React from "react";
import "./date.css";
import MonthPicker from "./MonthPicker";

const DatePicker = ({ value }) => {
	console.log(value);
	return (
		<React.Fragment>
			<MonthPicker />
		</React.Fragment>
	);
};

export default DatePicker;
