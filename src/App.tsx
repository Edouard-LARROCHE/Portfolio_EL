import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"

import { Toaster } from "sonner"
import { useScreenSize } from "./context/hooks/screenSizeHooks"

import Layout from "./layout/Layout"
import Activity from "./pages/activity/activity"
import Projects from "./pages/projects/projects"
import ReviewData from "./data/ReviewsData"
import Contact from "./pages/contact/contact"
import ScreenSizeWarning from "./pages/screenSizeWarning/screenSizeWarning"

import LayoutMobile from "./pages/mobile"

function App() {
	const screenSize = useScreenSize()

	const renderRoutes = () => (
		<>
			<Route index element={<Navigate to="/home/activity" replace />} />
			<Route path="/home/activity" element={<Activity />} />
			<Route
				path="/home/projects"
				element={<Projects repos={[]} loading={false} />}
			/>
			<Route path="/home/reviews" element={<ReviewData />} />
			<Route path="/home/contact" element={<Contact />} />
		</>
	)

	if (screenSize === "tooSmall") {
		return <ScreenSizeWarning />
	}

	if (screenSize === "mobile") {
		return (
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
					<Route path="/home" element={<LayoutMobile />}>
						{renderRoutes()}
					</Route>
					<Route path="/" element={<Navigate to="/home" replace />} />
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

