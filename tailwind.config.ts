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
				"peddy-primary": "#0D7981",
			},
			fontFamily: {
				kreonSerif: '"Kreon", serif;',
				sourceSans: '"Source Sans 3", sans-serif;',
				hallelujah: '"Gloria Hallelujah", cursive;',
			},
		},
	},
	plugins: [],
} as Config;
