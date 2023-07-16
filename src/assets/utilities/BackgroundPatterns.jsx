import React, { useState } from "react";
import "../css/fonts.css";

const BackgroundPatterns = () => {
	const [selectedBG, setSelectedBG] = useState({ bg: "", repeat: false, name: "" });
	const patterns = [
		{ id: 1, name: "Pattern 1", pattern: "patternpad", patternRepeat: true },
		{ id: 2, name: "Pattern 2", pattern: "abstract-timekeeper", patternRepeat: true },
		{ id: 3, name: "Spiral", pattern: "bullseye-gradient", patternRepeat: true },
		{ id: 4, name: "3d Box 1", pattern: "protruding-squares", patternRepeat: true },
		{ id: 5, name: "3d Box 2", pattern: "large-triangles", patternRepeat: true },
		{ id: 6, name: "Square share", pattern: "radiant-gradient", patternRepeat: false },
		{ id: 7, name: "Snow", pattern: "Snow", patternRepeat: false },
	];

	return (
		<div className="p-8">
			<React.Fragment>
				<div className="w-64">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem officiis, commodi explicabo pariatur nostrum
					quasi rem facilis est, ab id maiores harum placeat fugiat eaque sapiente. Vero, consectetur ducimus.
				</div>
			</React.Fragment>
		</div>
	);
};

export default BackgroundPatterns;
