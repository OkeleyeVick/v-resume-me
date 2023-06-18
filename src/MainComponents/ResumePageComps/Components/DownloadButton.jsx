import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Icon } from "@iconify/react";
import "../../../assets/css/fonts.css";

const baseFont = {
	Syne: "Syne",
	Rubik: "Rubik",
	Lora: "Lora",
	Stolzl: "Stolzl",
};

const DownloadButton = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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
		<div className="relative" style={{ fontFamily: baseFont.Syne }}>
			<Button
				id="basic-button"
				className="flex items-center gap-2 p-3 px-5 shadow-lg bg-main hover:bg-hoverBgClr"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}>
				<Icon icon="ph:download-simple" className="text-white h-5 w-5" />
				<span className="text-white text-xs">Download</span>
			</Button>
			<Menu
				id="basic-menu"
				className="translate-x-6 -translate-y-12 "
				anchorEl={anchorEl}
				open={open}
				anchorOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}>
				{DownloadOptions.map(({ title, download, icon, size }, index) => {
					return (
						<MenuItem
							key={index}
							className="text-xs flex items-center gap-2 pr-10 py-2 text-gray-600 hover:text-main hover:bg-transparent"
							onClick={() => {
								handleClose();
								download();
							}}>
							<Icon icon={icon} className={`${size} `} />
							<span>{title}</span>
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);
};

export default DownloadButton;
