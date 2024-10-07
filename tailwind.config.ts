import { Config } from "tailwindcss";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,html}",
		"./public/**/*.{js,ts,html}",
	],
	theme: {
		extend: {
			colors: {
				"peddy-primary": "#fff000",
			},
		},
	},
	plugins: [],
} as Config;
