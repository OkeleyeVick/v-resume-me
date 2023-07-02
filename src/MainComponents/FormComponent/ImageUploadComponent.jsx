import { Icon } from "@iconify/react";
import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import Modal from "../ResumePageComps/Components/Modal";
import { userDataContext } from "../ResumePageComps/CreateResumePage";

const ImageUploadComponent = ({ label, updateProfileImage }) => {
	const [image, setImageForDisplay] = useState(null);
	const imageRef = useRef(null);
	const [imageError, setImageError] = useState(null);
	const { setUserData } = useContext(userDataContext);

	const handleClick = () => {
		imageRef.current.click();
	};

	function checkFileType(imageFileType) {
		// check for the fileExtension
		let isValid = true;
		const fileExtension = imageFileType.name.split(".").pop();

		const allowedExtensions = ["jpeg", "jpg", "png", "gif", "webp", "jfif"];

		isValid = !allowedExtensions.includes(fileExtension) ? (isValid = false) : (isValid = true);

		return isValid;
	}

	function handleImageUpload(event) {
		if (event) {
			const image = event.target.files[0];
			const isValid = checkFileType(image);
			const reader = new FileReader();
			reader.readAsDataURL(image);
			reader.addEventListener("loadend", () => {
				if (isValid === false) {
					setImageError("Upload image in jpeg, png, jpg, gif, jfif or webp format");
				} else {
					setUserData((prevData) => {
						console.log(prevData);
						return { ...prevData };
					});
					updateProfileImage(reader.result);
					setImageForDisplay(reader.result);
				}
			});
		}
	}

	function handleRemoveImage() {
		if (image) {
			setImageForDisplay(null);
		}
	}

	const imageEditOptions = [
		{
			label: "Edit photo",
			icon: "uil:image-edit",
			action: handleClick,
		},
		{
			label: "Delete photo",
			icon: "mi:delete",
			action: handleRemoveImage,
			style: "group-hover/edit-options:text-red-500",
		},
	];

	return (
		<React.Fragment>
			<div id="userImage_container" className="hover:text-main group/image">
				<div className="flex items-center gap-4 group">
					<input type="file" ref={imageRef} aria-label={label} hidden onChange={(event) => handleImageUpload(event)} />
					<div
						className={`flex items-center justify-center bg-input_clr w-20 h-20 lg:w-16 lg:h-16 rounded-sm overflow-hidden hover:border hover:border-main border-transparent border border-solid group-hover/image:border-main ${
							image ? "cursor-default pointer-events-none" : "cursor-pointer"
						}`}
						onClick={handleClick}>
						{image ? (
							<motion.img
								accept="image/*, .png, .jpeg, .jpg, .webp"
								src={image}
								alt="user-image"
								className="w-full h-full object-cover"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							/>
						) : (
							<Icon icon="mingcute:user-add-line" className="w-8 h-8 text-[rgb(190,196,213)] group-hover/image:text-main" />
						)}
					</div>
					{image === null ? (
						<label htmlFor={label} className="text-sm cursor-pointer hover:text-main" onClick={() => handleClick()}>
							{label}
						</label>
					) : (
						<motion.div className="flex flex-col items-start gap-1" animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
							{imageEditOptions.map(({ label, icon, action, style }, indexValue) => {
								return (
									<React.Fragment key={indexValue}>
										<button className="flex items-center text-xs gap-2 group/edit-options" type="button" onClick={() => action()}>
											<Icon
												icon={icon}
												className={`w-5 h-5 text-gray-400 ${style ? style : "group-hover/edit-options:text-main"}`}
											/>
											<label
												htmlFor={label}
												className={`cursor-pointer text-gray-600 ${style ? style : "group-hover/edit-options:text-main"}`}>
												{label}
											</label>
										</button>
									</React.Fragment>
								);
							})}
						</motion.div>
					)}
				</div>
			</div>
			{imageError && <Modal errorType={imageError} />}
		</React.Fragment>
	);
};

export default ImageUploadComponent;
