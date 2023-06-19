import { Icon } from "@iconify/react";
import React, { useRef, useState } from "react";

const ImageUploadComponent = ({ label }) => {
	const [image, setImageForDisplay] = useState(null);
	const imageRef = useRef(null);
	const handleClick = () => {
		imageRef.current.click();
	};

	function handleImageUpload(event) {
		const imageObject = event.target.files;
		setImageForDisplay(URL.createObjectURL(imageObject[0]));
	}
	return (
		<div id="userImage_container" className="cursor-pointer" onClick={() => handleClick()}>
			<div className="flex items-center gap-4 group">
				<input type="file" ref={imageRef} aria-label={label} hidden onChange={handleImageUpload} />
				<div className="flex items-center justify-center bg-input_clr w-14 h-14 rounded-sm overflow-hidden hover:border hover:border-main border-transparent border border-solid">
					{image ? (
						<img src={image} alt="" />
					) : (
						<Icon icon="mingcute:user-add-line" className="hover:text-main w-8 h-8 text-[rgb(190,196,213)]" />
					)}
				</div>
				{image === null ? (
					<label htmlFor={label} className="text-xs cursor-pointer hover:text-main">
						{label}
					</label>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default ImageUploadComponent;
