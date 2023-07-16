import React, { memo, useContext } from "react";
import InputWithLabel from "../../FormComponent/InputComponent";
import ImageUploadComponent from "../../FormComponent/ImageUploadComponent";
import { Icon } from "@iconify/react";
import { userDataContext } from "../CreateResumePage";
import SearchModal from "../Components/SearchModal";
import TipTap from "../../FormComponent/Tiptap.jsx";

const UserIndex = () => {
	const { userGeneralData, setUserGeneralData, userPersonalData, setUserPersonalData } = useContext(userDataContext);

	function updateTheDetail(inputValue, field) {
		setUserPersonalData((previousData) => ({
			...previousData,
			[field]: {
				...previousData[field],
				value: inputValue,
			},
		}));
	}

	return (
		<React.Fragment>
			<div id="title" className="mb-6 flex items-center justify-between">
				<span className="flex items-end gap-x-3 text-slate-700 select-none">
					<Icon icon="uiw:user" className="w-8 h-8" />
					<h2 className="font-semibold text-xl">Personal Information</h2>
				</span>
				<SearchModal />
			</div>
			<div className="flex flex-col md:grid grid-cols-2 gap-x-7 gap-y-4 md:items-end mb-4">
				{Object.values(userPersonalData).map(
					({ inputMode, imageSrc, ariaLabel, type, hasExtraInfo, tooltipData, nameLabel, isImage, value }, wrapperIndex) => {
						return isImage ? (
							<React.Fragment key={wrapperIndex}>
								<ImageUploadComponent imageSrc={imageSrc} label={nameLabel} key={nameLabel} />
							</React.Fragment>
						) : (
							<React.Fragment key={wrapperIndex}>
								<InputWithLabel
									inputMode={inputMode}
									label={nameLabel}
									name={ariaLabel}
									value={value ?? ""}
									aria-label={ariaLabel}
									type={type}
									updateTheDetail={updateTheDetail}
									tooltip={tooltipData}
									hasExtraInfo={hasExtraInfo}
								/>
							</React.Fragment>
						);
					}
				)}
			</div>
			<div className="summary">
				<TipTap />
			</div>
		</React.Fragment>
	);
};

export default memo(UserIndex);
