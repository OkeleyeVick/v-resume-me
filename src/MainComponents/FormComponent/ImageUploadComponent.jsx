import React from "react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";

const ImageUploadComponent = ({ label }) => {
	// Initialize once (at the start of your app).
	const uploader = Uploader({
		apiKey: "free", // Get production API keys from Upload.io
	});

	// Configuration options: https://upload.io/uploader#customize
	const options = { multi: true };

	return (
		<div id="userImage_container" className="cursor-pointer">
			<UploadButton uploader={uploader} options={options} onComplete={(files) => files.map((x) => x.fileUrl).join("\n")}>
				{({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
			</UploadButton>
		</div>
	);
};

export default ImageUploadComponent;
