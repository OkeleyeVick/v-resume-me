import { Icon } from "@iconify/react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Modal from "../ResumePageComps/Components/Modal";

const ImageUploadComponent = ({ label }) => {
	const [image, setImageForDisplay] = useState(null);
	const imageRef = useRef(null);
	const [imageError, setImageError] = useState(null);

	const handleClick = () => {
		imageRef.current.click();
	};

	function checkFileType(imageFileType) {
		let isValid = true;
		const allowedExtension = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];

		if (allowedExtension.indexOf(imageFileType) < 0) {
			isValid = false;
			setImageError("Upload image in jpeg, png, jpg, gif or webp format");
		}
		return isValid;
	}

	function handleImageUpload(event) {
		const imageObject = event.target.files;
		const isValid = checkFileType(imageObject[0].type);
		isValid ? setImageForDisplay(URL.createObjectURL(imageObject[0])) : null;
	}

	function handleRemoveImage() {
		if (image) {
			setImageForDisplay(null);
		}
	}

	const imageEditOptions = [
		{
			label: "Edit photo",
			icon: "fluent:image-edit-20-regular",
			action: handleClick,
		},
		{
			label: "Delete photo",
			icon: "fluent:delete-32-regular",
			action: handleRemoveImage,
		},
	];

	if (imageError) {
		return <Modal errorType={imageError} />;
	}
	return (
		<div id="userImage_container" className="hover:text-main group/image">
			<div className="flex items-center gap-4 group">
				<input type="file" ref={imageRef} aria-label={label} hidden onChange={handleImageUpload} />
				<div
					className={`flex items-center justify-center bg-input_clr w-14 h-14 rounded-sm overflow-hidden hover:border hover:border-main border-transparent border border-solid group-hover/image:border-main ${
						image ? "cursor-default pointer-events-none" : "cursor-pointer"
					}`}
					onClick={() => handleClick()}>
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
					<label htmlFor={label} className="text-xs cursor-pointer hover:text-main" onClick={() => handleClick()}>
						{label}
					</label>
				) : (
					<motion.div className="flex flex-col items-start gap-1" animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
						{imageEditOptions.map(({ label, icon, action }, indexValue) => {
							return (
								<React.Fragment key={indexValue}>
									<button className="flex items-center text-xs gap-2 group/edit-options" type="button" onClick={() => action()}>
										<Icon icon={icon} className="group-hover/edit-options:text-main w-5 h-5 text-gray-400" />
										<label htmlFor={label} className="group-hover/edit-options:text-main cursor-pointer text-gray-600">
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
	);
};

export default ImageUploadComponent;
