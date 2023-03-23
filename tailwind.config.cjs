/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				main: "#8390FA",
				main_2: "#EFF2F9",
				main_3: "#0F141E",
				hoverBgClr: "#6274F8",
			},
			colors: {
				main: "#8390FA",
				main_2: "#EFF2F9",
				main_3: "#0F141E",
				text_clr: "#1E2532",
			},
			boxShadow: {
				custom_1: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
				custom_2: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
				custom_3: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
			},
			animation: {
				rotate: "rotateY 10s linear infinite",
				rotateAndGoDown: "rotateAndGoDown 20s linear infinite",
			},
			keyframes: {
				rotateY: {
					"0%": {
						transform: "rotateY(0deg) ",
					},
					"100%": {
						transform: "rotateY(360deg) ",
					},
				},
				rotateAndGoDown: {
					"0%": {
						transform: "rotateY(0deg) translateY(-200px)",
					},
					"100%": {
						transform: "rotateY(360deg) translateY(800px)",
					},
				},
			},
		},
	},
	plugins: [],
};
