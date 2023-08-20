import React, { memo, useContext } from "react";
import InputWithLabel from "../../FormComponent/InputComponent";
import ImageUploadComponent from "../../FormComponent/ImageUploadComponent";
import { Icon } from "@iconify/react";
import { userDataContext } from "../CreateResumePage";
import TipTap from "../../FormComponent/Tiptap.jsx";

const UserIndex = () => {
	const { userPersonalData, setUserPersonalData, userPersonalSummary, setUserPersonalSummary } = useContext(userDataContext);

	function handleSummaryUpdate(data) {
		setUserPersonalSummary(data);
	}

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
					<Icon icon="uiw:user" className="w-8 h-8 dark:text-label_clr" />
					<h2 className="font-semibold text-xl dark:text-label_clr">Personal Information</h2>
				</span>
			</div>
			<div className="flex flex-col md:grid grid-cols-2 gap-x-7 gap-y-4 md:items-end mb-4">
				{Object.values(userPersonalData).map(
					({ inputMode, imageSrc, ariaLabel, type, hasExtraInfo, tooltipData, nameLabel, isImage, value }, wrapperIndex) => {
						return isImage ? (
							<ImageUploadComponent imageSrc={imageSrc} label={nameLabel} key={nameLabel} />
						) : (
							<InputWithLabel
								inputMode={inputMode}
								label={nameLabel}
								name={ariaLabel}
								key={wrapperIndex}
								value={value}
								aria-label={ariaLabel}
								type={type}
								updateTheDetail={updateTheDetail}
								tooltip={tooltipData}
								hasExtraInfo={hasExtraInfo}
							/>
						);
					}
				)}
			</div>
			<div className="summary mt-6">
				<div className="flex flex-col">
					<label className="text-lg font-semibold text-slate-700 mb-[1px] dark:text-label_clr">Professional Summary</label>
					<span className="text-[.8rem] mb-2 text-label_clr">
						Write a brief summary about yourself. Mention your role, experience &{" "}
						<span className="text-slate-600 dark:text-main">most importantly</span>, your biggest achievements, best qualities and skills.
					</span>
				</div>
				<TipTap text={userPersonalSummary} onUpdate={handleSummaryUpdate} />
			</div>
		</React.Fragment>
	);
};

export default memo(UserIndex);
