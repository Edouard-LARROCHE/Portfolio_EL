import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"

import { ScreenSizeProvider } from "./context/screenSizeProvider"

import "./scss/styles.scss"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ScreenSizeProvider>
			<App />
		</ScreenSizeProvider>
	</React.StrictMode>,
)

