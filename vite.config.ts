import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"
import react from "@vitejs/plugin-react"

export default defineConfig({
	server: {
		open: true,
		port: 3000,
	},
	css: {
		devSourcemap: true,
	},
	plugins: [
		svgr({
			include: "**/*.svg?react",
		}),
		react({
			jsxRuntime: "automatic",
		}),
	],
})

