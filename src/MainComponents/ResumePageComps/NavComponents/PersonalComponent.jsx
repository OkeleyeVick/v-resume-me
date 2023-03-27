import React from "react";
import Input from "../../GeneralComponents/Input";

const PersonalComponent = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col gap-8 mt-8">
				<Input label="Fullname" type="text" aria-label="Name input" ariaLabel="Name input" placeholder="Enter your name" />
				<Input label="Position" type="text" aria-label="position" ariaLabel="position" placeholder="Enter your position" />
				<Input label="Phone" type="number" aria-label="position" ariaLabel="position" placeholder="Enter number" />
				<Input label="Address" type="text" aria-label="address" ariaLabel="address" placeholder="Enter address" />
				<Input label="State" type="text" aria-label="text" ariaLabel="text" placeholder="Enter state" />
				<Input label="ZIP Code" type="text" aria-label="text" ariaLabel="text" placeholder="Enter zip code" />
			</div>
		</React.Fragment>
	);
};

export default PersonalComponent;
