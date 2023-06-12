import React from "react";

const BackgroundPatterns = () => {
	const patterns = [
		{ pattern: "patternpad", patternRepeat: true },
		{ pattern: "abstract-timekeeper", patternRepeat: true },
		{ pattern: "bullseye-gradient", patternRepeat: true },
		{ pattern: "protruding-squares", patternRepeat: true },
		{ pattern: "large-triangles", patternRepeat: true },
		{ pattern: "radiant-gradient", patternRepeat: false },
	];

	return (
		<div>
			{patterns.map(({ pattern, patternRepeat }, index) => (
				<div
					key={index}
					className={`w-30 h-64 rounded-sm cursor-pointer`}
					style={{
						backgroundImage: `url(/src/assets/images/BackgroundSVGs/${pattern}.svg)`,
						backgroundPosition: "center center",
						backgroundRepeat: `${patternRepeat ? "repeat" : "repeat"}`,
						backgroundSize: "cover",
					}}></div>
			))}
		</div>
	);
};

export default BackgroundPatterns;
