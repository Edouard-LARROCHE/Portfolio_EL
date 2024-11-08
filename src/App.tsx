import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"

import { Toaster } from "sonner"
import { useScreenSize } from "./context/hooks/customHooks"

import Layout from "./layout/Layout"
import Activity from "./pages/activity/activity"
import Projects from "./pages/projects/projects"
import Contact from "./pages/contact/contact"
import ScreenSizeWarning from "./pages/screenSizeWarning/screenSizeWarning"

import LayoutMobile from "./pages/mobile"

function App() {
	const screenSize = useScreenSize()

	const renderRoutes = () => (
		<>
			<Route index element={<Navigate to="/home" />} />
			<Route path="/home/activity" element={<Activity />} />
			<Route
				path="/home/projects"
				element={<Projects repos={[]} loading={false} />}
			/>
			<Route path="/home/contact" element={<Contact />} />
		</>
	)

	if (screenSize === "tooSmall") {
		return <ScreenSizeWarning />
	}

	if (screenSize === "mobile") {
		return (
			<Router>
				<Routes>
					<Route path="/" element={<LayoutMobile />}>
						{renderRoutes()}
					</Route>
				</Routes>
			</Router>
		)
	}

	return (
		<div className="App">
			<Router>
				<Toaster
					richColors
					closeButton
					expand={false}
					position="bottom-right"
					toastOptions={{
						style: {
							background: "rgb(80, 70, 229)",
							color: "rgb(255, 255, 255)",
							border: "none",
						},
					}}
				/>
				<Routes>
					<Route path="/" element={<Layout />}>
						{renderRoutes()}
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App

