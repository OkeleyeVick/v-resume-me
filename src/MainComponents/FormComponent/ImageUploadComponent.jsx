import { Icon } from "@iconify/react";
import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GeneralContext, userDataContext } from "../ResumePageComps/CreateResumePage";

const ImageUploadComponent = ({ label }) => {
	const [image, setImageForDisplay] = useState("");
	const imageRef = useRef(null);
	const { setUserPersonalData } = useContext(userDataContext);
	const { setError } = useContext(GeneralContext);

	const handleClick = () => {
		imageRef.current.click();
	};

	function checkFileType(imageFileType) {
		// check for the fileExtension
		let isValid;
		const allowedExtensions = ["jpeg", "jpg", "png", "webp"];
		if (imageFileType) {
			const fileExtension = imageFileType.name.split(".")[1].toLowerCase();
			isValid = !allowedExtensions.includes(fileExtension) ? false : true;
		}
		return isValid;
	}

	const readFile = (passedFile) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.addEventListener("load", () => resolve(reader.result));
			reader.addEventListener("error", () => reject(new Error(reader.error)));

			reader.readAsDataURL(passedFile);
		});
	};

	async function handleImageUpload(event) {
		const fileGotten = event.target.files[0];
		if (!fileGotten) return;
		const isValid = checkFileType(fileGotten);
		if (!isValid) {
			return setError("Upload image in jpeg, png or jpg format");
		} else {
			const result = await readFile(fileGotten);

			setImageForDisplay(result);
			setUserPersonalData((previousData) => {
				return {
					...previousData,
					image: {
						...previousData.image,
						imageSrc: result,
					},
				};
			});
		}
	}

	function handleRemoveImage() {
		if (image) {
			setImageForDisplay("");
			setUserPersonalData((prevData) => ({
				...prevData,
				image: {
					...prevData.image,
					imageSrc: "",
				},
			}));
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
			<div id="userImage_container" className="hover:text-main dark:hover:text-main group/image">
				<div className="flex items-center gap-4 group">
					<input type="file" ref={imageRef} aria-label={label} hidden onChange={handleImageUpload} />
					<motion.div
						className={`flex items-center justify-center bg-input_clr dark:bg-dark_theme_text_clr w-20 h-20 lg:w-16 lg:h-16 rounded-sm overflow-hidden hover:border hover:border-main border-transparent border border-solid group-hover/image:border-main ${
							image ? "cursor-default pointer-events-none" : "cursor-pointer"
						}`}
						onClick={handleClick}>
						{image !== "" ? (
							<motion.img
								accept="image/*, .png, .jpeg, .jpg, .webp"
								src={image}
								alt="user-image"
								className="w-full h-full object-cover object-top"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								exit={{ opacity: 0 }}
							/>
						) : (
							<Icon icon="mingcute:user-add-line" className="w-8 h-8 dark:text-label_clr text-[rgb(190,196,213)] group-hover/image:text-main" />
						)}
					</motion.div>
					{image === (null || "") ? (
						<label
							htmlFor={label}
							className="text-sm cursor-pointer hover:text-main dark:text-label_clr hover:dark:text-main duration-300"
							onClick={() => handleClick()}>
							{label}
						</label>
					) : (
						<motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }} className="flex flex-col items-start gap-1">
							{imageEditOptions.map(({ label, icon, action, style }, indexValue) => {
								return (
									<React.Fragment key={indexValue}>
										<motion.button
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											initial={{ opacity: 0 }}
											className="flex items-center text-xs gap-2 group/edit-options"
											type="button"
											onClick={() => action()}>
											<Icon
												icon={icon}
												className={`w-5 h-5 dark:text-label_clr text-gray-400 ${style ? style : "group-hover/edit-options:text-main"}`}
											/>
											<label
												htmlFor={label}
												className={`cursor-pointer dark:text-label_clr text-gray-600 ${style ? style : "group-hover/edit-options:text-main"}`}>
												{label}
											</label>
										</motion.button>
									</React.Fragment>
								);
							})}
						</motion.div>
					)}
				</div>
			</div>
		</React.Fragment>
	);
};

export default ImageUploadComponent;
