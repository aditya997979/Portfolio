/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#f5efe6',
				foreground: '#1f1a17',
				muted: '#e8dfd3',
				accent: '#d4a373',
			},
			fontFamily: {
				display: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial'],
				body: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial'],
			},
		},
	},
	plugins: [],
};


