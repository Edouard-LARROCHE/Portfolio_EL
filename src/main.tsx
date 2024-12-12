import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./i18n"

import { ScreenSizeProvider } from "./context/provider/screenSizeProvider.js"
import { ThemeProvider } from "./context/provider/themeProvider.js"

import "./scss/styles.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ScreenSizeProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ScreenSizeProvider>
	</React.StrictMode>,
)

