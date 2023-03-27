import React from "react";
import Input from "../../GeneralComponents/Input";

const PersonalComponent = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col gap-8 mt-8">
				<Input label="Fullname" type="text" aria-label="Name input" ariaLabel="Name input" placeholder="Enter your name" />
				<Input label="Position" type="text" aria-label="position" ariaLabel="position" placeholder="Enter your position" />
				<Input label="Phone" type="number" aria-label="position" ariaLabel="position" placeholder="Enter number" />
			</div>
		</React.Fragment>
	);
};

export default PersonalComponent;
