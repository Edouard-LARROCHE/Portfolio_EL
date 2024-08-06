import React from "react"

import Title from "../../components/title/title"
import NavBar from "../../components/navBar/navBar"

import "./index.scss"

const LeftSide = () => {
	return (
		<div className="leftPart">
			<NavBar />
			<Title />
		</div>
	)
}

export default LeftSide

