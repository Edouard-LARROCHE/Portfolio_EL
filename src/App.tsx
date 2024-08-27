import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom"

import Layout from "./layout/Layout"
import Activity from "./pages/activity/activity"
import Projects from "./pages/projects/projects"
import Contact from "./pages/contact/contact"

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Navigate to="/home" />} />
						<Route path="/home/activity" element={<Activity />} />
						<Route
							path="/home/projects"
							element={<Projects repos={[]} loading={false} />}
						/>
						<Route path="/home/contact" element={<Contact />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App

