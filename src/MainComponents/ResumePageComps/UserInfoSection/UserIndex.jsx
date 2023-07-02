import React, { useContext, useEffect, useState } from "react";
import InputWithLabel from "../../FormComponent/InputComponent";
import ImageUploadComponent from "../../FormComponent/ImageUploadComponent";
import { Icon } from "@iconify/react";
import TextArea from "../../FormComponent/TextArea";
import { userDataContext } from "../CreateResumePage";

const UserIndex = () => {
	const { userGeneralData, setUserGeneralData, userPersonalData, setUserPersonalData } = useContext(userDataContext);

	return (
		<React.Fragment>
			<div id="title" className="select-none mb-6">
				<span className="flex items-end gap-x-3 text-slate-700">
					<Icon icon="uiw:user" className="w-8 h-8" />
					<h2 className="font-semibold text-xl">Personal Information</h2>
				</span>
			</div>
			{Object.values(userPersonalData).map((eachDivWrapper, wrapperIndex) => {
				return (
					<div key={wrapperIndex} className="flex flex-col md:grid grid-cols-2 gap-x-7 gap-y-6 md:items-end mb-4">
						{Object.values(eachDivWrapper).map(
							(
								{ inputMode, ariaLabel, type, hasExtraInfo, tooltipData, nameLabel, isImage, runUpdate, updateProfileImage },
								inputIndex
							) => {
								return isImage ? (
									<ImageUploadComponent label={nameLabel} updateProfileImage={updateProfileImage} key={inputIndex} />
								) : (
									<React.Fragment key={inputIndex}>
										<InputWithLabel
											inputMode={inputMode}
											label={nameLabel}
											name={ariaLabel}
											value={userPersonalData[ariaLabel]}
											aria-label={ariaLabel}
											type={type}
											runUpdate={runUpdate}
											tooltip={tooltipData}
											hasExtraInfo={hasExtraInfo}
										/>
									</React.Fragment>
								);
							}
						)}
					</div>
				);
			})}
			<div className="summary">
				<TextArea label="summary" aria-label="summary" hasSubText />
			</div>
		</React.Fragment>
	);
};

export default UserIndex;
