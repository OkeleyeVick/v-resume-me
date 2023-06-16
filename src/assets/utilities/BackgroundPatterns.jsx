import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const BackgroundPatterns = () => {
	const [selectedBG, setSelectedBG] = useState("");
	const patterns = [
		{ id: 1, name: "Pattern 1", pattern: "patternpad", patternRepeat: true },
		{ id: 2, name: "Pattern 2", pattern: "abstract-timekeeper", patternRepeat: true },
		{ id: 3, name: "Spiral", pattern: "bullseye-gradient", patternRepeat: true },
		{ id: 4, name: "3d Box 1", pattern: "protruding-squares", patternRepeat: true },
		{ id: 5, name: "3d Box 2", pattern: "large-triangles", patternRepeat: true },
		{ id: 6, name: "Square share", pattern: "radiant-gradient", patternRepeat: false },
	];

	function handleChange() {}

	return (
		<div className="p-8">
			<React.Fragment>
				<div className="w-64">
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label" className="bg-white px-2">
							Background-Image
						</InputLabel>
						<Select labelId="demo-simple-select-label" id="demo-simple-select" value={selectedBG} label="Age" onChange={handleChange}>
							{patterns.map(({ name, pattern, patternRepeat, id }) => (
								<div className="flex items-center">
									<MenuItem key={id}>
										<div
											value={selectedBG}
											className={`w-8 h-4 rounded-sm cursor-pointer`}
											style={{
												backgroundImage: `url(/src/assets/images/BackgroundSVGs/${pattern}.svg)`,
												backgroundPosition: "center center",
												backgroundRepeat: `${patternRepeat ? "no-repeat" : "repeat"}`,
												backgroundSize: "cover",
											}}></div>
										<span>{name}</span>
									</MenuItem>
								</div>
							))}
						</Select>
					</FormControl>
				</div>
			</React.Fragment>
		</div>
	);
};

export default BackgroundPatterns;
