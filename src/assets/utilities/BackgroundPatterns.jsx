import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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

	function handleChange(pattern, patternRepeat, name) {
		setSelectedBG({
			bg: pattern,
			repeat: patternRepeat,
			name: name,
		});
	}
	return (
		<div className="p-8">
			<React.Fragment>
				<div className="w-64">
					<FormControl fullWidth sx={{ m: 1, minWidth: 120 }} size="small" className="hover:border-pink-50">
						<InputLabel id="bg-pattern-select-label" className="bg-white px-2">
							Background-Image
						</InputLabel>
						<Select labelId="bg-pattern-select-label" value={selectedBG} label="background-pattern">
							{patterns.map(({ name, pattern, patternRepeat, id }) => (
								<MenuItem
									key={id}
									value={pattern}
									className="hover:bg-main hover:bg-opacity-20 transition duration-300 ease-in-out"
									onClick={() => handleChange(pattern, patternRepeat, name)}>
									<div className="flex items-center gap-x-3">
										<div
											value={selectedBG.bg}
											className={`w-10 h-5 rounded-sm`}
											style={{
												backgroundImage: `url(/src/assets/images/BackgroundSVGs/${pattern}.svg)`,
												fontFamily: "Syne",
												backgroundPosition: "center center",
												backgroundRepeat: `${patternRepeat ? "repeat" : "no-repeat"}`,
												backgroundSize: "cover",
											}}></div>
										<span>{name}</span>
									</div>
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
			</React.Fragment>
		</div>
	);
};

export default BackgroundPatterns;
