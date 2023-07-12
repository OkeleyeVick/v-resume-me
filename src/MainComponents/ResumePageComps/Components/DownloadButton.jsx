import React from "react";
import { Icon } from "@iconify/react";
import "../../../assets/css/fonts.css";

const baseFont = {
	Syne: "Syne",
	Rubik: "Rubik",
	Lora: "Lora",
	Stolzl: "Stolzl",
};

//TODO FIX THE DOWNLOAD BUTTON

const DownloadButton = () => {
	function downloadPDF() {
		console.log("I am downloading in pdf format");
	}
	function downloadDOCXS() {
		console.log("I am downloading in docxs format");
	}

	const DownloadOptions = [
		{
			title: "Download in PDF",
			download: downloadPDF,
			icon: "ph:file-pdf-duotone",
			size: "w-5 h-5",
		},
		{
			title: "Download in DOCX",
			download: downloadDOCXS,
			icon: "bi:filetype-docx",
			size: "w-5 h-4",
		},
	];

	return (
		<div className="" style={{ fontFamily: baseFont.Lora }}>
			<button>Button to download something</button>
		</div>
	);
};

export default DownloadButton;
