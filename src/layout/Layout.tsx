import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import LeftSide from "../pages/leftSide"
import RightSide from "../pages/rightSide"

import "./layout.scss"

const Layout = () => {
	const navigate = useNavigate()

	useEffect(() => {
		if (window.location.pathname === "/") {
			navigate("/home/projects")
		}
	}, [])

	return (
		<div className="layout">
			<LeftSide />
			<RightSide />
		</div>
	)
}

export default Layout

