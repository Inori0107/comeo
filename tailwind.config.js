/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./app/**/*.{js,vue,ts}",
		"./app/components/**/*.{js,vue,ts}",
		"./app/pages/**/*.{js,vue,ts}",
		"./app/layouts/**/*.{js,vue,ts}",
		"./app/plugins/**/*.{js,vue,ts}"
	],
	theme: {
		extend: {
			colors: {
				brand: {
					yellow: "#facc15", // amber-400
					orange: "#f97316", // orange-500
					red: "#ef4444", // red-500
					green: "#22c55e", // green-500
					blue: "#3b82f6", // blue-500
					surface: "#fff7ed", // orange-50
					"on-surface": "#0f172a", // slate-900
					muted: "#6b7280", // gray-500
					border: "#f1f5f9" // slate-100
				}
			},
			fontFamily: {
				sans: [
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"Segoe UI",
					"Roboto",
					"Noto Sans",
					"Ubuntu",
					"Cantarell",
					"Helvetica Neue",
					"Arial",
					"Apple Color Emoji",
					"Segoe UI Emoji"
				]
			},
			maxWidth: {
				container: "1120px"
			},
			spacing: {
				section: "64px"
			},
			borderRadius: {
				surface: "16px"
			},
			boxShadow: {
				surface: "0 1px 0 rgba(16, 24, 40, 0.02)"
			},
			animation: {
				float: "float 6s ease-in-out infinite"
			},
			keyframes: {
				float: {
					"0%, 100%": {
						transform: "translateY(0) rotate(0.5deg)"
					},
					"50%": {
						transform: "translateY(-8px) rotate(-0.6deg)"
					}
				}
			}
		}
	},
	plugins: []
};
