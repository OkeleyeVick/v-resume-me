import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import Input from "../../GeneralComponents/Input";

const SkillComponent = () => {
	const [date, setDate] = useState(new Date());
	useEffect(() => {}, [date]);
	return (
		<React.Fragment>
			<div>
				<Calendar
					onChange={() => {
						setDate();

						console.log(date);
					}}
					value={date}
				/>
				<br />
				<br />
				<br />
				<br />
			</div>
		</React.Fragment>
	);
};

export default SkillComponent;
