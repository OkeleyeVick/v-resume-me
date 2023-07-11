import React, { useContext, useState } from "react";
import InputWithLabel from "../../FormComponent/InputComponent";
import { userDataContext } from "../CreateResumePage";
import { memo } from "react";

const EducationIndex = () => {
	const { userGeneralData, setUserGeneralData, userEducationData, setUserEducationData } = useContext(userDataContext);

	function updateTheInput(inputValue, field) {
		setUserEducationData((previousData) => ({
			...previousData,
			[field]: {
				...previousData[field],
				value: inputValue,
			},
		}));
	}

	return <React.Fragment></React.Fragment>;
};

export default memo(EducationIndex);
