import React from "react";
import InputWithLabel from "../FormComponent/InputComponent";

const FileName = ({ fileName, setFileName }) => {
	function updateFileName(inputValue) {
		setFileName(inputValue);
	}

	return (
		<div className="text-start my-4 w-2/3 mx-auto mb-8">
			<InputWithLabel updateTheDetail={updateFileName} placeholder="Enter filename" label="What should your filename be saved as" />
		</div>
	);
};

export default FileName;
