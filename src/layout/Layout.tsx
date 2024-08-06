import React from "react"

import LeftSide from "../pages/leftSide"
import RightSide from "../pages/rightSide"

import "./layout.scss"

const Layout = () => {
	return (
		<div className="layout">
			<LeftSide />
			<RightSide />
		</div>
	)
}

export default Layout

